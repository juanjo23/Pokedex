angular.module('pokedexApp')
.controller('PokemonShowController', ['$scope', '$http', '$routeParams', 'Pokemon', function PokemonShowController($scope, $http, $routeParams, Pokemon) {
  var controller = this;
  $scope.pokemon_id = $routeParams.id;

  $('#nav-title').text('Description');
  $('#btn-menu').hide();
  $('#btn-back').show();


  $scope.pad0 = function(num){
    var res = (num < 10) ? '00' : ((num < 100) ? '0':'');  	
    return '#'+ res + num;
  }

  Pokemon.find($scope.pokemon_id).success(function(data){
    $scope.pokemon = data;
  });
  
}]);

	