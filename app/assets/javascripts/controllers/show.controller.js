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

    var controller = this;

    console.log($scope.movie);

   $scope.addReview = function() {

    console.log($scope.newReview);


  };

});
