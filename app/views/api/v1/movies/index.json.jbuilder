# json.movies do
  json.array! @movies do |movie|
    json.extract! movie, :id, :title, :description, :picture
  end
# end
