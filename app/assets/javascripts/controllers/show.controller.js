app.controller("MoviesShowController", function($scope, $resource, $routeParams, Movie) {
  $scope.movie = Movie.show({ id: $routeParams.id });

});
