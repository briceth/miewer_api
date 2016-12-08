 angular.module('MovieApp', ['ngRoute', 'ngResource', 'templates'])
    .controller('MovieCtrl', function($scope, $resource) {


    });

    ////////////////////////////////////////////////////////////////////
    // var app = angular.module('MovieApp', ['ngRoute', 'ngResource'])

    //   app.controller('MovieCtrl', function($scope, $http) {

    //   var cinema = this;

    //   $scope.titleModel = {};
    //   $scope.descriptionModel = {};

    //   cinema.movies = [];

    //   $scope.onSubmit = function () {

    //     $http({
    //       method: "post",
    //       url: '/api/v1/movies/',
    //       data:$scope.titleModel}
    //       ).success(function(data) {
    //       console.log(":)")
    //       console.log($scope.titleModel);
    //       console.log($scope.descriptionModel);
    //       console.log(data);

    //     }).error(function(data) {
    //       console.log(":(")
    //     });


    //   };
    // });
