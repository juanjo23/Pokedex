angular.module('pokedexApp')
.config(function($routeProvider){
	$routeProvider
	  .when('/all', {
        templateUrl:'templates/pages/all/index.html',
        controller: 'PokemonController'
        controllerAs: 'pkController'
      })
      .when('/caught', {
        templateUrl:'templates/pages/caught/index.html'
      })
      .when('/battle-box', {
      	templateUrl:'templates/pages/battle-box/index.html'
      })
      .otherwise({
        redirectTo: '/all'
      });
});