// angular.module('MovieApp', ['ngRoute','ngResource'])
//   .controller('MovieCtrl', function HomeController($scope) {
//     $scope.entries = [{title: "les trois freres"}]
//   })

(function(){

var app = angular.module('MovieApp', ['ngResource'])

    angular.module('MovieApp', ['ngRoute', 'ngResource'])
    .controller('MovieCtrl', function($scope, $resource) {

      Entry = $resource('/api/v1/movies/:id', {id: "@id"}, {update: {method: "PUT"}})

      $scope.entries = Entry.query()


        $scope.addEntry = function () {
        entry = Entry.save($scope.newEntry)
         $scope.entries.push(entry);
         $scope.newEntry = {};
       };
    });
})();

// (function(){

//   var app = angular.module('gemStore', []);

//   app.controller('CinemaController', function() {
//     this.movies = gems;
//   });

//   app.controller('TabController', function(){
//     this.tab = 1;

//     this.setTab = function(newValue) {
//       this.tab = newValue;
//     };
//     this.isSet = function(tabName) {
//       return this.tab === tabName;
//     };
//   });

//   app.controller('GalleryController', function(){
//     this.current = 0;
//     this.setCurrent = function(newValue){
//         this.current = newValue || 0;
//     };

//   });

//   app.controller('ReviewController', function(){
//     this.review = {};

//     this.addReview = function(movie){
//       movie.reviews.push(this.review);
//       this.review = {};
//     };
//   });


//   var gems = [{
//     title: 'Bienvenu chez les chtis',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione illum soluta laudantium hic laborum, sequi excepturi nisi sint similique porro nostrum aspernatur nesciunt aut temporibus eius, a quos optio!',
//     rating: 4.9,
//     available: true,
//     price: 10,
//     images: [
//       "images/chtis.jpg"
//     ]
//   },
//   {
//     title: 'les trois frères',
//     description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quae necessitatibus velit, neque, quaerat error omnis doloremque pariatur fugiat dolorum odio. Dolor neque, veniam cum aliquam provident ea harum minus!',
//     rating: 4.1,
//     available: true,
//     price: 10,
//     images: [
//       "images/lestroismerdes.jpg"
//     ]
//   },
//   {
//     title: 'Troie',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis cum delectus dolor quam eaque, vitae sequi. Veniam delectus officia aperiam, magnam, soluta aut distinctio repellat saepe eaque ipsum expedita vero.',
//     rating: 2.95,
//     available: false,
//     price: 10,
//     images: [
//       "images/troie.jpg"
//     ]
//   }];

// })();
