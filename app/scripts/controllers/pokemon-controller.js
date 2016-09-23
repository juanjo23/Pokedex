angular.module('pokedexApp')
.controller('PokemonController', function PokemonController($scope) {
	$scope.hola = "WILL BE FOREVER";
	$scope.pokemons = [
		{
		    "id": 1,
		    "name": "Bulbasaur",
		    "image": "001Bulbasaur.png",
		    "types": [
		        { "name": "Grass" }, { "name": "Poison" }
		    ]
		},
		{
		    "id": 4,
		    "name": "Charmander",
		    "image": "004Charmander.png",
		    "types": [
		        { "name": "Fire" }
		    ]
		},
		{
		    "id": 7,
		    "name": "Squirtle",
		    "image": "007Squirtle.png",
		    "types": [
		        { "name": "Water" }
		    ]
		},
		{
		    "id": 10,
		    "name": "Caterpie",
		    "image": "010Caterpie.png",
		    "types": [
		        { "name": "Bug" }
		    ]
		},
		{
		    "id": 12,
		    "name": "Butterfree",
		    "image": "012Butterfree.png",
		    "types": [
		        { "name": "Bug" }, { "name": "Flying" }
		    ]
		},
		{
		    "id": 13,
		    "name": "Weedle",
		    "image": "013Weedle.png",
		    "types": [
		        { "name": "Bug" }, { "name": "Poison" }
		    ]
		},
		{
		    "id": 16,
		    "name": "Pidgey",
		    "image": "016Pidgey.png",
		    "types": [
		        { "name": "Normal" }, { "name": "Flying" }
		    ]
		},
		{
		    "id": 19,
		    "name": "Rattata",
		    "image": "019Rattata.png",
		    "types": [
		        { "name": "Dark" }, { "name": "Normal" }
		    ]
		},
		{
		    "id": 21,
		    "name": "Spearow",
		    "image": "021Spearow.png",
		    "types": [
		        { "name": "Normal" }, { "name": "Flying" }
		    ]
		},
		{
		    "id": 23,
		    "name": "Ekans",
		    "image": "023Ekans.png",
		    "types": [
		        { "name": "Poison" }
		    ]
		},
		{
		    "id": 25,
		    "name": "Pikachu",
		    "image": "025Pikachu.png",
		    "types": [
		        { "name": "Electric" }
		    ]
		},
		{
		    "id": 27,
		    "name": "Sandshrew",
		    "image": "027Sandshrew.png",
		    "types": [
		        {"name": "Ground"}, { "name": "Ice" }, { "name": "Steel" }
		    ]
		},
		{
		    "id": 29,
		    "name": "Nidoran-f",
		    "image": "029Nidoran.png",
		    "types": [
		        { "name": "Poison" }
		    ]
		},
		{
		    "id": 32,
		    "name": "Nidoran-m",
		    "image": "032Nidoran.png",
		    "types": [
		        { "name": "Poison" }
		    ]
		},
		{
		    "id": 35,
		    "name": "Clefairy",
		    "image": "035Clefairy.png",
		    "types": [
		        { "name": "Fairy" }
		    ]
		},
		{
		    "id": 37,
		    "name": "Vulpix",
		    "image": "037Vulpix.png",
		    "types": [
		        { "name": "Fire" }
		    ]
		},
		{
		    "id": 39,
		    "name": "Jigglypuff",
		    "image": "039Jigglypuff.png",
		    "types": [
		        { "name": "Normal" }, { "name": "Fairy" }
		    ]
		},
		{
		    "id": 41,
		    "name": "Zubat",
		    "image": "041Zubat.png",
		    "types": [
		        { "name": "Poison" }, { "name": "Flying" }
		    ]
		},
		{
		    "id": 43,
		    "name": "Oddish",
		    "image": "043Oddish.png",
		    "types": [
		        { "name": "Grass" }, { "name": "Poison" }
		    ]
		},
		{
		    "id": 46,
		    "name": "Paras",
		    "image": "046Paras.png",
		    "types": [
		        { "name": "Bug" }, { "name": "Grass" }
		    ]
		},
		{
		    "id": 48,
		    "name": "Venonat",
		    "image": "048Venonat.png",
		    "types": [
		        { "name": "Bug" }, { "name": "Poison" }
		    ]
		},
		{
		    "id": 50,
		    "name": "Diglett",
		    "image": "050Diglett.png",
		    "types": [
		        { "name": "Ground" }
		    ]
		},
		{
		    "id": 52,
		    "name": "Meowth",
		    "image": "052Meowth.png",
		    "types": [
		        { "name": "Normal" }, { "name": "Dark" }
		    ]
		}
	]
	/*
	var controller = this;
	$http({method: 'GET', url: '/all'}).success(function(data){
		controller.pokemon = data;
	});
	*/
});