angular.module('pokedexApp')
.controller('PokemonController', function PokemonController($scope) {
	$scope.hola = "WILL BE FOREVER";
	$scope.pokemon = {
		    "id": 1,
		    "name": "Bulbasaur",
		    "image": "bulbasaur.png",
		    "types": [
		        {		            
		            "type": {
		                "name": "poison"		                
		            }
		        }, 
		        {		            
		            "type": {
		                "name": "grass"
		            }
		        }
		    ]
		}		        
	/*
	var controller = this;
	$http({method: 'GET', url: '/all'}).success(function(data){
		controller.pokemon = data;
	});
	*/
});