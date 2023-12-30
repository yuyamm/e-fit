# frozen_string_literal: true

class DatabaseAuth::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  def create
    begin
      self.resource = warden.authenticate!(auth_options)
      if resource
        user = resource.user.as_json(only: [:name])
        response_json = user.merge(resource.as_json(only: [:email]))
        render json: response_json, status: :ok
      end
    rescue Warden::NotAuthenticated
      render json: { errors: 'invalid email or password' }, status: :unauthorized
    end
  end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:nickname])
  # end
end
