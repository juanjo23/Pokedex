
var toggle = true;
var navTitle = '';
$('#btn-menu').click(function(){	
	if(toggle){
		$('#menu-icon').addClass('glyphicon-remove');
		$('#menu-icon').removeClass('glyphicon-menu-hamburger');
		$('#nav-title').fadeOut(200);
	}else{
		$('#menu-icon').addClass('glyphicon-menu-hamburger');
		$('#menu-icon').removeClass('glyphicon-remove');		
		$('#nav-title').fadeIn(200);
	}
	toggle = !toggle;
});

$('.nav a').click(function(){
	$('#btn-menu').click();
});


$('#btn-back').click(function(){
  $(this).hide();
  $('#btn-menu').show();
  window.history.back();
});

angular.module('pokedexApp', ['ngRoute']);
