json.movie do
  json.extract! @movie, :id, :title, :description
  json.comments @movie.reviews do |review|
    json.extract! review, :id, :body
  end
end
