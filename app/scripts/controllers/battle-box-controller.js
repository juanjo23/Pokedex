angular.module('pokedexApp')
.controller('BattleBoxController', ['$scope', 'Pokemon', function BattleBoxController($scope, Pokemon) {
	
  //Variables
  $scope.reverse = false;

  $scope.sort = function(id) {
    $scope.reverse = !$scope.reverse;
  };

  $('#nav-title').text('Battle Box');

  $scope.ctrl_name = 'battleBoxController';

  Pokemon.all().success(function(data){
    $scope.pokemons = data;
    $scope.battle_pokemon = [];
    //Filter caught porkemon
    for(var i = 0; i < $scope.pokemons.length; i++){
      if(localStorage[$scope.pokemons[i].name + 'B'] == 1){
        $scope.battle_pokemon.push($scope.pokemons[i]);
      }
    }
  });

}]);