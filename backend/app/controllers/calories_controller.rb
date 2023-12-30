class CaloriesController < ApplicationController
  def index
    calories = Calorie.all
    options = {}
    options[:is_collection] = true
    render json: CalorieSerializer.new(calories, options).serializable_hash
  end

  def show
    calorie = Calorie.find(params[:id])
    render json: CalorieSerializer.new(calorie).serializable_hash
  end

  def create
    calorie = Calorie.new(calorie_params)
    if calorie.save
      render json: CalorieSerializer.new(calorie).serializable_hash
    else
      render json: { error: calorie.errors.messages }, status: 422
    end
  end

  def update
    calorie = Calorie.find(params[:id])
    if calorie.update(calorie_params)
      render json: CalorieSerializer.new(calorie).serializable_hash
    else
      reder json: { error: calorie.errors.messages }, status: 422
    end
  end

  def destroy
    calorie = Calorie.find(params[:id])
    if calorie.destroy
      head :no_content
    else
      render json: { error: calorie.errors.messages }, status: 422
    end
  end

  private
  
  def calorie_params
    params.require(:calorie).permit(:date, :meal1, :meal2, :meal3, :meal4, :meal5)
  end
end
