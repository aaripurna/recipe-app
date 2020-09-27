json.extract! @file, :id, :checksum, :byte_size, :content_type, :filename, :key, :signed_id
json.merge! url: url_for(@file)
json.merge! thumbnail: url_for(@file.variant(resize: "200x200"))
