window.addEventListener('scroll', parallaxScroll);
window.addEventListener('scroll', darkenNavBar);

function parallaxScroll(){

  var parallaxElements = document.querySelectorAll('.parallax');
  var yOffset = window.pageYOffset;

  parallaxElements.forEach(item => {
    var dataSpeed = parseFloat(item.getAttribute('data-speed')) * 0.5;
    item.style.transform = `translateY(-${dataSpeed * yOffset}px)`;
  });
};

function darkenNavBar(){
  var navbar = document.getElementById('navbar');
  if(window.pageYOffset >= navbar.offsetHeight){
    navbar.style.background = 'rgba(41, 41, 41)';
    navbar.style.boxShadow = '0 4px 0px 0px rgb(48, 48, 48)';
  }
  else {
    navbar.style.background = navbar.style.boxShadow = 'none';
  }
}