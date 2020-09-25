json.data do
  json.array! @recipes do |recipe|
    json.merge! recipe.attributes
  end
end

json.partial! 'api/v1/partials/pagination', collection: @recipes
