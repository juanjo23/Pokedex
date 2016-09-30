angular.module('pokedexApp')
.controller('PokemonController', ['$scope', 'Pokemon', function PokemonController($scope, Pokemon) {
	
	$scope.reverse = false;
	$scope.sort = function(id) {
		$scope.reverse = !$scope.reverse;
    };

    $scope.pad0 = function(num){
    	var res = (num < 10) ? '00' : ((num < 100) ? '0':'');  	
    	return '#'+ res + num;
    }

	$('#nav-title').text('All Pokémon');

	Pokemon.all().success(function(data){
		$scope.pokemons = data;
  });
}]);