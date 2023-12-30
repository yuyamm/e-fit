class ApplicationController < ActionController::API
  class InvalidTokenError < StandardError; end
  rescue_from InvalidTokenError, with: :invalid_token
  def invalid_token(e)
    render json: { error: e.message }, status: :unauthorized
  end

  def authenticate_user!
    payload = decode_token
    if payload.nil?
      Rails.logger.error('Invalid token: Token is blank or decode failed')
      raise InvalidTokenError.new("Invalid token: Token is blank or invalid")
    end

    validate_user_from_payload(payload)

    true
  end

  def current_user
    return @current_user if @current_user

    payload = decode_token
    return nil if payload.nil?

    @current_user = find_user_from_payload(payload)
  end

  private

  def decode_token
    token = request.headers['Authorization']&.split&.last
    return nil if !token

    begin
      payload = JWT.decode(token, Rails.application.credentials.jwt_secret, true, algorithm: 'HS256')[0]
    rescue JWT::DecodeError, JWT::ExpiredSignature => e
      Rails.logger.error("Invalid token: #{e.message}")
      return nil
    end
  end

  def validate_user_from_payload(payload)
    @provider = payload.provider
    if @provider == 'google'
      unless GoogleAuth.exists?(uid: payload.uid)
        Rails.logger.error('Invalid token: User with Google Provider does not exist')
        raise InvalidTokenError.new("Invalid token: User with Google Provider does not exist")
      end
    elsif @provider == 'credentials'
      unless DatabaseAuht.exists?(email: payload.email)
        Rails.logger.error('Invalid token: User with database authentication does not exist')
        raise InvalidTokenError.new("Invalid token: User with database authentication does not exist")
      end
    end
  end

  def find_user_from_payload(payload)
    provider = payload.provider
    if provider == 'google'
      return nil unless GoogleAuth.exists?(uid: payload.uid)
      GoogleAuth.find_by(uid: payload.uid).user
    elsif provider == 'credentials'
      return nil unless DatabaseAuth.exists?(email: payload.email)
      DatabaseAuth.find_by(email: payload.email).user
    end
  end
end
