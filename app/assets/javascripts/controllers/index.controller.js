app.controller("MoviesIndexController", function($scope, $location, Movie) {
  $scope.movies = Movie.index();

  $scope.new = function() {
    $location.path("/movies/new");
  };

  $scope.movies = Movie.query();

    $scope.addEntry = function () {
    movie = Movie.save($scope.newMovie);
     $scope.movies.push(movie);
     $scope.newMovie = {};
   };
});
