angular.module('MovieApp')
.config(function($routeProvider){
$routeProvider.when('/', {
  templateUrl: 'app/views/pages/home.html.erb',
  })
.otherwise( { redirecTo: '/'} );
});
