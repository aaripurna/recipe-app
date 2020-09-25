class Recipe < ApplicationRecord
  belongs_to :category
  has_many :ingredients
  has_many_attached :images

  validates_presence_of [:name, :description, :steps]
end
