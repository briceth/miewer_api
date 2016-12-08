angular.module('MovieApp')
.controller('MoviesShowController', function ($routeParams){
  var controller = this;
  $http({method: 'GET', url: '/movies/' + $routeParams.id})
  .success(function(data){
    controller.movie = data;
  })
});
