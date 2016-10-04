/* Utiliza apiary sólo en desarrollo */
angular.module('pokedexApp')
.factory('Pokemon', ['$http', function PokemonFactory($http){
  return{
    all: function(){
      return $http({method: 'GET', url:'https://private-e669b67-pokemon3.apiary-mock.com/pokemon'});
      //return $http({method: 'GET', url:'/api/pokemon'});
    },
    find: function(id){
      return $http({method: 'GET', url:'https://private-e669b67-pokemon3.apiary-mock.com/pokemon/' + id});
      //return $http({method: 'GET', url:'/api/pokemon/' + id});
    } 
  };
}]);