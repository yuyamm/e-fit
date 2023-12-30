class User < ApplicationRecord
  has_one :database_auth
  has_one :google_auth

  validates :name, presence: true, length: { maximum: 20 }
end