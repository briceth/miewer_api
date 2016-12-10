app.controller("MoviesIndexController", function($scope, $location, $resource, Movie) {
  $scope.movies = Movie.index();

  // $scope.new = function() {
  //   $location.path("/movies/new");
  // };

    Movie = $resource('/api/v1/movies/:id', {id: "@id"}, {update: {method: "PUT"}})


  $scope.movies = Movie.query();

    $scope.addEntry = function () {
    movie = Movie.save($scope.newMovie);
     $scope.movies.push(movie);
     $scope.newMovie = {};
   };

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
});
