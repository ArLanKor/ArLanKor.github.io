const navSlide = () => {
  const burger = document.querySelector('burger');
  const nav = document.querySelector('nav-links li');
  const navlinks = document.querySelectorAll('nav-links li');

  burger.addEventListener('click',() => {
  nav.classlist.toggle('nav-active');
});
navlinks.forEach((link,index) => {
link.style.animation ='navLinkFade 0.5s ease forwards $(index / 7)s';

});

}

navSlide();
