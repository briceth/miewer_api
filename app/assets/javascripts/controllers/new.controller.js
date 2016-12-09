// angular.module('MovieApp')
// .controller('MoviesNewController', function($scope, $resource, $location) {

//   var controller = this;


//   var  Movie = $resource('/api/v1/movies/:id', {id: "@id"}, {update: {method: "PUT"}})


//   $scope.movies = Movie.query();

//     $scope.addEntry = function () {
//     movie = Movie.save($scope.newMovie);
//     console.log(movie);
//      $scope.movies.push(movie);
//      $scope.newMovie = {};
//    };
// });
