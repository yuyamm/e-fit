class GoogleAuthController < ApplicationController
  def create
    # 初回登録時のみ保存する
    unless GoogleAuth.exists?(uid: google_auth_params[:uid])
      # トランザクションを使って、userとgoogle_authを同時に保存する
      ActiveRecord::Base.transaction do
        user = User.new(user_params)
        google_auth = user.build_google_auth(google_auth_params)
        user.save!
        google_auth.save!
        response_json = user.as_json(only: [:id, :name]).merge(google_auth.as_json(only: [:uid, :email]))
        render json: response_json, status: :created
      rescue ActiveRecord::RecordInvalid => e
          render json: { errors: e.record.errors.messages }, status: :unprocessable_entity
      end
    else
      render json: { message: "already exists" }, status: :ok
    end
  end

  private

  # apiのインターフェース統一のために、後でparamsを統合する
  def google_auth_params
    params.require(:google_auth).permit(:uid, :email)
  end

  def user_params
    params.require(:user).permit(:name)
  end
end
