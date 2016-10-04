angular.module('pokedexApp')
.controller('PokemonController', ['$scope', 'Pokemon', function PokemonController($scope, Pokemon) {
	
  //Variables
  $scope.reverse = false;
  //$scope.caught = "pokeball-pink";

  $scope.sort = function(id) {
    $scope.reverse = !$scope.reverse;
  };

  $('#nav-title').text('All Pokémon');

  Pokemon.all().success(function(data){
    $scope.pokemons = data;
  });

}]);