
json.extract! @movie, :id, :title, :description, :category, :picture, :available, :rating
json.reviews @movie.reviews do |review|
  json.extract! review, :id, :body
end
