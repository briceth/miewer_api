app.controller("MoviesIndexController", function($scope, $location, $resource, Movie) {
  $scope.movies = Movie.index();

  // $scope.new = function() {
  //   $location.path("/movies/new");
  // };

    // Movie = $resource('/api/v1/movies/:id', {id: "@id"}, {update: {method: "PUT"}})

  // $scope.movies = Movie.query();

    //add movie feature
    $scope.addEntry = function () {
    movie = Movie.save($scope.newMovie);
     $scope.movies.push(movie);
     $scope.newMovie = {};
   };


    //sidebar feature

   $scope.categories = [
    {name: "Comédie"},
    {name: "Action"},
    {name: "Science Fiction"},
    {name: "Horreur"},
    {name: "Romantique"},
   ];

   $scope.currentCategory = null;

   function setCurrentCategory(category) {
      $scope.currentCategory = category;
   }
   $scope.setCurrentCategory = setCurrentCategory;




   $scope.isCreating = false;
   $scope.isEditing = false;

   function startCreating() {
      $scope.isCreating = true;
      $scope.isEditing = false;
   }

   function cancelCreating() {
      $scope.isCreating = false;
   }

   function startEditing() {
      $scope.isCreating = false;
      $scope.isEditing = true;
   }

   function cancelEditing() {
      $scope.isEditing = false;
   }

   $scope.startCreating = startCreating;
   $scope.cancelCreating = cancelCreating;
   $scope.startEditing = startEditing;
   $scope.cancelEditing = cancelCreating;



});
