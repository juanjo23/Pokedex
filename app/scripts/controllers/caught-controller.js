angular.module('pokedexApp')
.controller('CaughtController', ['$scope', 'Pokemon', function CaughtController($scope, Pokemon) {
	
  //Variables
  $scope.reverse = false;

  $scope.sort = function(id) {
    $scope.reverse = !$scope.reverse;
  };

  $('#nav-title').text('Caught Pokémon');

  $scope.ctrl_name = 'caughtController';

  Pokemon.all().success(function(data){
    $scope.pokemons = data;
    $scope.caught_pokemon = [];
    //Filter caught porkemon
    for(var i = 0; i < $scope.pokemons.length; i++){
      if(localStorage[$scope.pokemons[i].name] == 1){
        $scope.caught_pokemon.push($scope.pokemons[i]);
      }
    }
  });

}]);