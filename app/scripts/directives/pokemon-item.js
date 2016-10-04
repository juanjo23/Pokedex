angular.module('pokedexApp')
.directive('pokemonItem', ['$timeout', function($timeout) {
  return {
    replace: true,
    restrict: 'E',
    scope: {
      pokemon: '='
    },
    templateUrl: 'templates/directives/pokemon-item.html',
    link: function(scope, element) {

      var isCaughtCtrl = scope.$parent.ctrl_name == 'caughtController';

      /* Se colorean las pokebolas o estrellas de
      los pokemon almacenados en localStorage */
      scope.pokemon.caught = 0;
      scope.pokemon.battle = 0;
      if(localStorage[scope.pokemon.name] == 1){
        scope.pokemon.caught = 1;
      }
      if(localStorage[scope.pokemon.name + 'B']){
        scope.pokemon.battle = 1;
      }
      
      scope.caughtPokemon = function ($event) {
        $event.preventDefault();
        if(scope.pokemon.caught == 1){
          if(isCaughtCtrl){  //Permitimos que el usuario puda cancelar
            scope.uncaught = true;        
          }else{
            scope.pokemon.caught = 0;
            localStorage[scope.pokemon.name] = 0;
          }      
        }else{
          scope.pokemon.caught = 1;
          localStorage[scope.pokemon.name] = 1;
        }
      };

      scope.removePokemon = function ($event) {
        $event.preventDefault();
        scope.pokemon.caught = 0;
        localStorage[scope.pokemon.name] = 0;
        scope.uncaught = false;
        scope.battle = false;
        element.remove();
      };
      
      scope.battlePokemon = function ($event) {
        $event.preventDefault();
        if(scope.pokemon.battle == 1){
          scope.pokemon.battle = 0;
          localStorage[scope.pokemon.name + 'B'] = 0;
          scope.battle = true;
          $timeout(function(){ scope.battle = false; }, 1500);

          //$(".toast").delay(2000).fadeOut(0);
        
        }else{
          scope.pokemon.battle = 1;
          localStorage[scope.pokemon.name + 'B'] = 1;
        }
      }
      scope.pad0 = function (num) {
        var res = num < 10 ? '00' : num < 100 ? '0' : '';
        return '#' + res + num;
      };
    }
  };
}]);