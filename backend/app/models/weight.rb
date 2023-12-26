class Weight < ApplicationRecord
  validates :date, presence: true, uniqueness: true
  validates :weight, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :memo, length: { maximum: 200 }, allow_blank: true
end
