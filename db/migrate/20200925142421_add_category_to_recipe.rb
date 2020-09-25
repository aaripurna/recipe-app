class AddCategoryToRecipe < ActiveRecord::Migration[6.0]
  def change
    add_belongs_to :recipes, :category
  end
end
