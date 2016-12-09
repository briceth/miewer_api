// angular.module('MovieApp')
// .controller('MoviesShowController', function ($http, $routeParams){
//   var controller = this;

//   $http({method: 'GET', url: '/movies/' + $routeParams.id})
//   .success(function(data){
//     console.log(data);

//     controller.movie = data;

//   })
// });
app.controller("MoviesShowController", function($scope, $resource, $routeParams, Movie) {
  $scope.movie = Movie.show({ id: $routeParams.id });


  var  Review = $resource('/api/v1/movies/:id', {id: "@id"}, {update: {method: "PUT"}})

  $scope.reviews = Review.query();

  console.log($scope.reviews);



});
