class User < ApplicationRecord

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
    has_many :reviews
    has_many :movies

  acts_as_token_authenticatable
end
