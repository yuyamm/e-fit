class UsersController < ApplicationController
  before_action :authenticate_user!
  
  def update
    user = current_user
    if user.update(user_params)
      options = { params: { provider: @provider } }
      render json: UserSerializer.new(user, options).serializable_hash, status: :ok
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private 

  def user_params
    params.require(:user).permit(:name)
  end
end
