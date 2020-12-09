$(document).ready(function () {
	$('.burger').click(function (event) { // Au click sur l'element qui a la class burger
		$('.burger, .menu').toggleClass('active');// On ajoute cette class
		$('body').toggleClass('lock');// On ajoute cette class
	});
	$('.burger.active, .menu__link').click(function (event) {// Au click sur l'element qui a la class burger
		$('.menu, .burger').removeClass('active');// On supprime cette class
		$('body').removeClass('lock');// On supprime cette class
	});
});

