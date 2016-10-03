angular.module('pokedexApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/pokemon', {
        templateUrl:'templates/pages/pokemon/index.html',
        controller: 'PokemonController'
      })
      .when('/pokemon/:id', {
        templateUrl:'templates/pages/pokemon/show.html',        
        controller: 'PokemonShowController'
      })
      .when('/caught', {
        templateUrl:'templates/pages/caught/index.html',
        controller: 'CaughtController'
      })
      .when('/battle-box', {
        templateUrl:'templates/pages/battle-box/index.html'
      })
      .otherwise({
        redirectTo: '/pokemon'
      });
}]);