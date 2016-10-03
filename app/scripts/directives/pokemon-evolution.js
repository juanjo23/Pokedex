angular.module('pokedexApp')
.directive('pokemonEvolution', function() {
  return {
    replace: true,
    restrict: 'E',
    scope: {
      evolution: '=',
      types: '='
    },
    templateUrl: 'templates/directives/pokemon-evolution.html',
    link: function(scope, element) {
      console.log('Esta directiva no sirve de mucho');
    }
  };
});