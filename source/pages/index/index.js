import 'normalize.css';
import './index.scss';
import '../../style/fonts.scss';
import '../../img/water.jpg';
import '../../img/water-maps.jpg';
// import './sprite_template.scss';
// import 'sprite.scss';
// import '../../img/sprite.svg';

console.log('in index.js');

var authBtnTrigger = document.querySelector('.auth-button');
var flip = document.querySelector('.auth');
var form = document.querySelector('.container');
var rotateTarget = document.querySelector('.auth-form');

function rotate(event) {
  flip.classList.add('rotated');
  authBtnTrigger.style.opacity ='0';
  authBtnTrigger.style.cursor ='default';
}

window.onclick = function(event) {
  var target = event.target;
  console.log(target); // где был клик?
  if (target == form) {
    flip.classList.remove('rotated');
    authBtnTrigger.style.opacity ='1';
    authBtnTrigger.style.cursor ='pointer';
  }
};

authBtnTrigger.addEventListener('click', rotate);

var preloader = function() {
	let images = document.images,
		images_total = images.length,
		images__loaded = 0,
		preloader = document.querySelector('.preloader'),
		preloader__percents = document.querySelector('.preloader__percents');
	console.log('HI!!')
	
	for (let i = 0; i < images_total; i++) {
		var image_clone = new Image();
		image_clone.onload = imageLoaded();
		// image_clone.onerror = imageLoaded();
		image_clone.src = images[i].src
	}
	console.log(images_total)
	console.log(images__loaded)

	function imageLoaded() {
		images__loaded++;
		preloader__percents.innerHTML = (((100 / images_total) * images__loaded) << 0) + '%';

		if (images__loaded >= images_total ) {
			setTimeout(function(){
				if(!preloader.classList.contains('done')){
					preloader.classList.add('done');
				}
			}, 1000);
		}
	}
}
preloader();
