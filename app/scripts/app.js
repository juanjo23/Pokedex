
var toggle = true;
var navTitle = '';
$('#btn-menu').click(function(){	
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
	$('#btn-menu').click();
});


$('#btn-back').click(function(){
  $(this).hide();
  $('#btn-menu').show();
  window.history.back();
});

angular.module('pokedexApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
//.config(function($routeProvider){
	$routeProvider
	  .when('/pokemons', {
        templateUrl:'templates/pages/pokemons/index.html',
        controller: 'PokemonsController',
        controllerAs: 'pkCtrl'
      })
      .when('/pokemons/:id', {
      	templateUrl:'templates/pages/pokemons/show.html',        
        controller: 'PokemonsShowController',
        controllerAs: 'pkShowCtrl'
      })
      .when('/caught', {
        templateUrl:'templates/pages/caught/index.html'
      })
      .when('/battle-box', {
      	templateUrl:'templates/pages/battle-box/index.html'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);