class Calorie < ApplicationRecord
  validates :date, presence: true, uniqueness: true
  validates :meal1, :meal2, :meal3, :meal4, :meal5, numericality: { greater_than_or_equal_to: 0 }, allow_blank: true
end
