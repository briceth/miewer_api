// angular.module('MovieApp')
// .controller('MoviesShowController', function ($http, $routeParams){
//   var controller = this;

//   $http({method: 'GET', url: '/movies/' + $routeParams.id})
//   .success(function(data){
//     console.log(data);

//     controller.movie = data;

//   })
// });
app.controller("MoviesShowController", function($scope, $routeParams, Movie) {
  $scope.movie = Movie.show({ id: $routeParams.id });
});
