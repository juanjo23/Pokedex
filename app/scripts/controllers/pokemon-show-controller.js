angular.module('pokedexApp')
.controller('PokemonShowController', ['$scope', '$http', '$routeParams', 'Pokemon', function PokemonShowController($scope, $http, $routeParams, Pokemon) {
	var controller = this;
	$scope.pokemon_id = $routeParams.id;

	//$http({method:'GET', url: '/pokemons/' + $scope.pokemon_id})
	//.success(function(data){
	//	controller.pokemon = data;
	//});
	$('#nav-title').text('Description');
	$('#btn-menu').hide();
	$('#btn-back').show();

	$scope.isActive = function(pokemon, id) {
    	return pokemon.id == id;
	};

	$scope.pad0 = function(num){
    	var res = (num < 10) ? '00' : ((num < 100) ? '0':'');  	
    	return '#'+ res + num;
    }

  	Pokemon.all().success(function(data){
   		var pokemons = data;
   		for(var i=0; i < pokemons.length; i++){
   			if(pokemons[i].id == $scope.pokemon_id){
   				$scope.pokemon = pokemons[i]; 
   			}
   		}
  	});

/*
	$scope.pokemon = {
		    'id': 4,
		    'name': 'Charmander',
		    'image': '004Charmander.png',
		    'types': [
		        { 'name': 'Fire' }
		    ]
		};
*/
}]);

	