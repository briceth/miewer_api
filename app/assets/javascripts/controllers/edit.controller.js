angular.module('MovieApp')
.controller('MovieEditController', function($scope, $resource, $routeParams, Movie) {
  $scope.movie = Movie.show({ id: $routeParams.id });


  // var  Movie = $resource('/api/v1/movies/:id', {id: "@id"}, {update: {method: "PUT"}})

  // $scope.movies = Movie.query();

    console.log($scope.movie)

    // $scope.addEntry
    $scope.updateMovie = function () {
    movie = Movie.save($scope.newMovie);
     $scope.movies.push(movie);
     $scope.newMovie = {};
   };

});
