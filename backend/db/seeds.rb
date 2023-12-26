# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

[1, 2, 3].each do |val|
  Calorie.create!(
    date: Date.new(2023, 12, val),
    meal1: 1000,
    meal2: 1000,
    meal3: 1000,
    meal4: 1000,
    meal5: 1000
  )
end

[1, 2, 3].each do |val|
  Weight.create!(
    date: Date.new(2023, 12, val),
    weight: 80.0,
    memo: "memo #{val}"
  )
end