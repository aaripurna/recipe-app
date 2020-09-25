json.pagination do
  json.count                  collection.count
  json.limit_value            collection.limit_value
  json.total_pages            collection.total_pages
  json.current_page           collection.current_page
  json.next_page              collection.next_page
  json.prev_page              collection.prev_page
  json.is_first_page          collection.first_page?
  json.is_last_page           collection.last_page?
  json.is_out_of_range        collection.out_of_range?
end
