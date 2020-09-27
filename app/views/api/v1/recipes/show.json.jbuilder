json.extract! @recipe, :name, :description, :steps, :category_id
json.type @recipe.category.name
json.photos @recipe.images.map { |image| {url: url_for(image), id: image.id, name: image.filename, type: image.blob.content_type, size: image.blob.byte_size} }

json.ingredients do
  json.array! @recipe.ingredients do |ingredient|
    json.extract! ingredient, :id, :name, :qty
  end
end
