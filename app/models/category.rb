class Category < ApplicationRecord
  include PgSearch::Model
  has_many :recipes, dependent: :destroy
  validates_presence_of :name
  validates_uniqueness_of :name, case_sensitive: false

  pg_search_scope :seacrchable, against: [:name]
end
