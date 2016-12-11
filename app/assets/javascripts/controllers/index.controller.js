app.controller("MoviesIndexController", function($scope, $resource, lodash, Movie) {
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
    var index = _.findIndex($scope.movies, function(m){
      return m.id == editedMovie.id;
    });
    $scope.movies[index] = editedMovie;
    Movie.update(editedMovie);
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
//////////////////////////////////////////////Delete feature

  $scope.deleteMovie = function(movie) {
    Movie.delete({ id: movie.id });
    $scope.movies = _.without($scope.movies, movie);
  };


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
