angular.module('pokedexApp')
.directive('pokemonItem', ['$sce', function($sce) {
  return {
    replace: true,
    restrict: 'E',
    scope: {
      pokemon: '='
    },
    templateUrl: 'templates/directives/pokemon-item.html',
    link: function(scope, element) {
      scope.pokemon.caught = 0;
      if(localStorage[scope.pokemon.name] == 1){
        scope.pokemon.caught = 1;
      }
      
      scope.caughtPokemon = function ($event) {
        $event.preventDefault();
        if(scope.pokemon.caught == 1){
          scope.pokemon.caught = 0;
          localStorage[scope.pokemon.name] = 0;
        }else{
          scope.pokemon.caught = 1;
          localStorage[scope.pokemon.name] = 1;
        }
      
      };

      scope.pad0 = function (num) {
        var res = num < 10 ? '00' : num < 100 ? '0' : '';
        return '#' + res + num;
      };
    }
  };
}]);