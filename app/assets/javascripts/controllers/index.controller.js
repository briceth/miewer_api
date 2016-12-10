app.controller("MoviesIndexController", function($scope, $resource, Movie) {
  $scope.movies = Movie.index();

/////////////////////////////////////////Add movie feature
    $scope.isEditing = false;
    $scope.isCreating = false;

    $scope.startCreating = function() {
      $scope.isCreating = true;
      $scope.isEditing = false;
   }

    $scope.addEntry = function() {
      movie = Movie.save($scope.newMovie);
      $scope.movies.push(movie);
      $scope.newMovie = {};
   };

  $scope.cancelCreating = function() {
      $scope.isCreating = false;
   }

/////////////////////////////////////////Edit movie feature

  $scope.editedMovie = null;

  $scope.setEditedMovie = function(movie) {
    $scope.editedMovie = angular.copy(movie);
  }

  $scope.updateMovie = function(editedMovie) {
    movie = Movie.update(editedMovie);
    $scope.movies.push(movie);
    $scope.editedMovie = null;
    $scope.isEditing = true;
  };


   $scope.startEditing = function() {
      $scope.isCreating = false;
      $scope.isEditing = true;
   }

  $scope.cancelEditing = function() {
      $scope.isEditing = false;
   }


/////////////////////////////////////////////sidebar feature
   $scope.categories = [
    {name: "Comédie"},
    {name: "Action"},
    {name: "Science Fiction"},
    {name: "Horreur"},
    {name: "Romantique"},
   ];

   $scope.currentCategory = null;

  $scope.setCurrentCategory = function(category) {
      $scope.currentCategory = category;
   }

});
