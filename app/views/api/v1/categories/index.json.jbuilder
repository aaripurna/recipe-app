json.data do
  json.array! @categories do |category|
    json.merge! category.attributes
  end
end

json.partial! 'api/v1/partials/pagination', collection: @categories
