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
      if(scope.body){
        scope.body = $sce.trustAsHtml(markdown.toHTML(scope.body.toString()));
      }
    }
  };
}]);