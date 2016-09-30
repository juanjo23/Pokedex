/* Es necsario modificar esta parte para que llame a un restful api */
angular.module('pokedexApp')
.factory('Pokemon', ['$http', function PokemonFactory($http){
	return{
		all: function() {
      return $http({method: 'GET', url: "/data/pokemon.json"});
    },

    find: function(id){
      //return $http({method:'GET', url: '/notes/' + id});
      $http({method: 'GET', url: "/data/pokemon.json"}).success(function(data){
	      var pokemons = data;
	      for(var i=0; i < pokemons.length; i++){
	      	if(pokemons[i].id == id){
	      		return pokemons[i];
	      	}
	      }
      });
    }

	}
}]);