class WeightsController < ApplicationController
  def index
    weights = Weight.all
    options = {}
    options[:is_collection] = true
    render json: WeightSerializer.new(weights, options).serializable_hash
  end
end