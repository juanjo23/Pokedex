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
      var isBattleBoxCtrl = scope.$parent.ctrl_name == 'battleBoxController';

      /* Se colorean las pokebolas o estrellas de
      los pokemon almacenados en localStorage */
      scope.pokemon.caught = 0;
      scope.pokemon.battle = 0;

      if(localStorage[scope.pokemon.name] == 1){
        scope.pokemon.caught = 1;
      }
      if(localStorage[scope.pokemon.name + 'B'] == 1){
        scope.pokemon.battle = 1;
      }
      
      scope.caughtPokemon = function ($event) {
        $event.preventDefault();
        if(scope.pokemon.caught == 1){

          if(localStorage[scope.pokemon.name + 'B'] == 1) { //Verifica si el pokemon está en la lista battle box
            scope.showAlert('You cannot un-catch Pokémon that are in your battle box');
          }
          else if(isCaughtCtrl){  // Verifica si estamos en la lista caught
            scope.confirm_remove_caught = true;
          }
          else{
            scope.pokemon.caught = 0;
            localStorage[scope.pokemon.name] = 0;
          }      
        }else{
          scope.pokemon.caught = 1;
          localStorage[scope.pokemon.name] = 1;
        }
      };

      scope.removeCaughtPokemon = function ($event) {
        $event.preventDefault();
        scope.pokemon.caught = 0;
        localStorage[scope.pokemon.name] = 0;
        scope.confirm_remove_caught = false;
        element.remove();
      };
      
      scope.battlePokemon = function ($event) {
        $event.preventDefault();
        if(scope.pokemon.battle == 1){
          if(isBattleBoxCtrl){
            scope.confirm_remove_battle = true;
          }else{
            scope.pokemon.battle = 0;
            localStorage[scope.pokemon.name + 'B'] = 0;
          }
        }else{
          if(localStorage[scope.pokemon.name] == 1){ //Se revisa que el pokemon se encuentre caught
            scope.pokemon.battle = 1;
            localStorage[scope.pokemon.name + 'B'] = 1;
          }else{  //Se no está en caguht se manda un alerta
            scope.showAlert('You haven’t captured this Pokémon yet');
          }          
        }
      }
      scope.removeBattlePokemon = function ($event) {
        $event.preventDefault();
        scope.pokemon.battle = 0;
        localStorage[scope.pokemon.name + 'B'] = 0;
        scope.confirm_remove_caught = false;
        element.remove();
      };
      
      scope.showAlert = function(alert_message){
        scope.alert = true;
        scope.alert_message = alert_message;
        $timeout(function(){ scope.alert = false; }, 2000);
      }
      scope.pad0 = function (num) {
        var res = num < 10 ? '00' : num < 100 ? '0' : '';
        return '#' + res + num;
      };
    }
  };
}]);