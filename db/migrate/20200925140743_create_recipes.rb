class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string        :name
      t.text          :description
      t.string        :steps, array: true

      t.timestamps
    end
  end
end
