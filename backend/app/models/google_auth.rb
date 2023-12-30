class GoogleAuth < ApplicationRecord
  belongs_to :user

  before_save { self.email = email.downcase }

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :uid, presence: true, uniquness: true
  validates :email, uniquness: true, format: VALID_EMAIL_REGEX, allow_blank: true
end
