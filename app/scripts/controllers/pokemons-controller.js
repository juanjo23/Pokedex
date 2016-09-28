angular.module('pokedexApp')
.controller('PokemonsController', ['$scope', '$http', function PokemonsController($scope, $http) {
	
	$scope.reverse = false;
	$scope.sort = function(id) {
		$scope.reverse = !$scope.reverse;
    };


    $scope.pad0 = function(num){
    	var res = (num < 10) ? "00" : ((num < 100) ? "0":"");  	
    	return "#"+ res + num;
    }

	$('#nav-title').text('All Pokémon');

	$http.get('scripts/controllers/pokemons.json').success(function(data) {
   		$scope.pokemons = data;
	});

	/*
	var controller = this;
	$http({method: 'GET', url: '/all'}).success(function(data){
		controller.pokemon = data;
	});
	*/
}]);