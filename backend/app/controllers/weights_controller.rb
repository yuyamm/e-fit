class WeightsController < ApplicationController
  def index
    weights = Weight.all
    options = {}
    options[:is_collection] = true
    render json: WeightSerializer.new(weights, options).serializable_hash
  end

  def show
    weight = Weight.find(params[:id])
    render json: WeightSerializer.new(weight).serializable_hash
  end

  def create
    weight = Weight.new(weight_params)
    if weight.save
      render json: WeightSerializer.new(weight).serializable_hash
    else
      render json: { error: weight.errors.messages }, status: 422
    end
  end

  def update
    weight = Weight.find(params[:id])
    if weight.update(weight_params)
      render json: WeightSerializer.new(weight).serializable_hash
    else
      render json: { error: weight.errors.messages }, status: 422
    end
  end

  private

  def weight_params
    params.require(:weight).permit(:date, :weight, :memo)
  end
end