class CaloriesController < ApplicationController
  def index
    calories = Calorie.all
    options = {}
    options[:is_collection] = true
    render json: CalorieSerializer.new(calories, options).serializable_hash
  end
end
