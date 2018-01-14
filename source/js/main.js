// Функция скролла вниз при клике на стрелку
function scrollDown(e) {
	e.preventDefault();
	var height = window.innerHeight;
	for(var i = 0; i < height; i++) {
	    (function(index) {
	        setTimeout(function() { 
	        	window.scrollTo(0,index); 
	        }, 0.5*i);
	    })(i);
	}
}

var arrowDown = document.querySelector('.arrow-down');
	if (arrowDown) {
		arrowDown.addEventListener('click', scrollDown)
	}

import preloader from '../js/modules/preloader';
preloader();

import hamburger from '../pages/includes/_header/_header.js';
hamburger();