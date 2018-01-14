import 'normalize.css';
import './blog.scss';
import '../../style/fonts.scss';


var sideMenu = document.querySelector('.blog-side__left'),
		articles = document.querySelector('.main-container__blog'),
		sideMenuTablets = document.querySelector('.menu-tablets'),
    sideMenuButton = document.querySelector('.open-menu'),
    articlesList = articles.querySelectorAll('.blog-article'), //список всех стайтей
    articlesListCoords = articles.getBoundingClientRect(),
    acticlesMenu = document.querySelector('.blog-side__left').querySelector('.articles__list').querySelectorAll('.articles__item'); //список всех статей в боковом меню


window.onload = function() {
    acticlesMenu[0].classList.toggle('active');
  };



function showSideMenu() {
	sideMenuTablets.classList.toggle('menu-tablets__hidden')
}
sideMenuButton.addEventListener('click', showSideMenu);

// function setDefaultClass() {
//   acticlesMenu[0].classList.toggle('active');
// }

function setActiveClass() {
  articlesList.forEach(function(e, index){
    let coords = e.getBoundingClientRect();
    if (coords.top <= 0 && coords.bottom > -70) {
      console.log(`Координаты ${index} равны ВЕРХ ${coords.top} НИЗ ${coords.bottom}`)
      acticlesMenu[index].classList.add('active');
    } else {
      acticlesMenu[index].classList.remove('active');
    }
  });
}


window.onscroll = function menuAction() {
  var menuCoords = sideMenu.getBoundingClientRect(), //Координаты бокового меню
  articlesCoords = articles.getBoundingClientRect(); // координаты блока со статьями

  // Проверка, когда меню основной доходит до верхней точки экрана top=0 или pageX = 0;
  if (articlesCoords.top >= 0) {
    sideMenu.style.marginTop = 20+'px';
  } else { 
    sideMenu.style.marginTop = -(articlesCoords.top) + 20 + 'px';
    setActiveClass();
  }
}
