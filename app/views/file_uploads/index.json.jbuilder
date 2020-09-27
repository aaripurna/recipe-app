json.array! @files do |blob|
  json.extract! blob, :id, :checksum, :byte_size, :content_type, :filename, :key
  json.merge! url: url_for(blob)
  json.merge! thumbnail: url_for(blob.variant(resize: "200x200"))
end
