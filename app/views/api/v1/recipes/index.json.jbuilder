json.data do
  json.array! @recipes do |recipe|
    json.merge! recipe.attributes
    json.photos recipe.images.map { |image| url_for(image) }
    json.type recipe.category.name
  end
end

json.partial! 'api/v1/partials/pagination', collection: @recipes
