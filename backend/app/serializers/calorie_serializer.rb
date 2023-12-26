class CalorieSerializer
  include JSONAPI::Serializer

  attributes :date, :meal1, :meal2, :meal3, :meal4, :meal5
end