class Recipe < ApplicationRecord
  include PgSearch::Model
  belongs_to :category
  has_many :ingredients
  has_many_attached :images

  validates_presence_of [:name, :description, :steps]

  pg_search_scope :seacrchable, against: [:name, :description]
  pg_search_scope :seacrchable_childern, associated_against: { ingredients: :name }
end
