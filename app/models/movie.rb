class Movie < ApplicationRecord
  has_many :reviews, dependent: :destroy
  belongs_to :user
end
