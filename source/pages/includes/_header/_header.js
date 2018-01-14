import './_header.scss';

export default function() {
	var hamburger = document.querySelector('.hamburger'),
			menu = document.querySelector('.menu-open'),
			menuList = document.querySelector('.menu-open__list'),
			leftSide = document.querySelector('.menu-open__left'),
			rightSide = document.querySelector('.menu-open__right');

	function action() {
		hamburger.classList.toggle('is-active');
		if (hamburger.classList.contains('is-active')) {
			setTimeout(function(){
				menuList.style.top = 20 + "%";
			}, 500);
			setTimeout(function(){
				menuList.style.opacity = 1;
			}, 1000);
			menu.style.opacity = 1;
			menu.style.zIndex = 2;
			leftSide.style.left = 0;
			rightSide.style.right = 0;
			document.body.style.overflow = 'hidden';

		} else {
			leftSide.style.left = -900+"px";
			rightSide.style.right = -900+"px";
			document.body.style.overflow = 'visible';
			menu.style.zIndex = 0;
			menu.style.opacity = 0;
			menuList.style.top = -100 + "%";
			menuList.style.opacity = 0;
		}
	}

	hamburger.addEventListener('click', action);
}