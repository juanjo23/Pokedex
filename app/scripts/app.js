$('.navbar-toggle').click(function(){
	$('#menu-icon').toggleClass('glyphicon-menu-hamburger');
	$('#menu-icon').toggleClass('glyphicon-remove');
});

angular.module('pokedexApp', ['ngRoute']);