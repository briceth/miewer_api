
  json.array! @movies do |movie|
    json.extract! movie, :id, :title, :category, :reviews
  end

