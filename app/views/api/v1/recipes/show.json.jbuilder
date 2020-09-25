json.extract! @recipe, :name, :description, :steps
json.type @recipe.category.name
json.photos @recipe.images.map { |image| url_for(image) }

json.ingredients do
  json.array! @recipe.ingredients do |ingredient|
    json.extract! ingredient, :name, :qty
  end
end
