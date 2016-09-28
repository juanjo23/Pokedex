angular.module('pokedexApp')
.controller('PokemonsShowController', ['$scope', '$http', '$routeParams', function PokemonsShowController($scope, $http, $routeParams) {
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

	$http.get('scripts/controllers/pokemons.json').success(function(data) {
   		var pokemons = data;

   		for(var i=0; i < pokemons.length; i++){
   			console.log(pokemons[i].id +" - "+$scope.pokemon_id);
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

	