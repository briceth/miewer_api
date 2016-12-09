app.controller('ReviewController', function(){
  this.review = {};

  this.addReview = function(movie) {
    movie.reviews.push(this.review);
  };
});
