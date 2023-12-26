class WeightSerializer
  include JSONAPI::Serializer

  attributes :date, :weight, :memo
end