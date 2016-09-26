var toggle = true;
var navTitle = '';
$('.navbar-toggle').click(function(){	
	if(toggle){
		$('#menu-icon').addClass('glyphicon-remove');
		$('#menu-icon').removeClass('glyphicon-menu-hamburger');
		$('#nav-title').fadeOut(200);
	}else{
		$('#menu-icon').addClass('glyphicon-menu-hamburger');
		$('#menu-icon').removeClass('glyphicon-remove');		
		$('#nav-title').fadeIn(200);
	}
	toggle = !toggle;
});

$('.nav a').click(function(){
	$('.navbar-toggle').click();
});


angular.module('pokedexApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
//.config(function($routeProvider){
	$routeProvider
	  .when('/pokemons', {
        templateUrl:'templates/pages/pokemons/index.html',
        controller: 'PokemonController',
        controllerAs: 'pkController'
      })
      .when('/pokemons/:id', {
      	templateUrl:'templates/pages/pokemons/index.html',        
        controller: 'PokemonController',
      	controller: 'PokemonController',
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
}]);