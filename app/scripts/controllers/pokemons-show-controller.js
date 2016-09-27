angular.module('pokedexApp')
.controller('PokemonsShowController', ['$scope', '$routeParams', function ($scope, $routeParams) {
	var controller = this;
	$scope.pokemon_id = $routeParams.id;
	//$http({method:'GET', url: '/pokemons/' + $scope.pokemon_id})
	//.success(function(data){
	//	controller.pokemon = data;
	//});
	$scope.pokemon = {
		    'id': 4,
		    'name': 'Charmander',
		    'image': '004Charmander.png',
		    'types': [
		        { 'name': 'Fire' }
		    ]
		};

}]);

	