angular.module('MovieApp')
.controller('MoviesIndexController', function($scope, $resource, $location) {

  var  Movie = $resource('/api/v1/movies/:id', {id: "@id"}, {update: {method: "PUT"}})


  $scope.movies = Movie.query();

    $scope.addEntry = function () {
    movie = Movie.save($scope.newMovie);
     $location.path('/');
     $scope.movies.push(movie);
     $scope.newMovie = {};
   };
});
