json.array! @movies do |movie|
  json.extract! movie, :id, :title, :description, :category, :available, :rating
end

