window.addEventListener('scroll', parallaxScroll);

function parallaxScroll(){

  var parallaxElements = document.querySelectorAll('.parallax');
  var yOffset = window.pageYOffset;

  parallaxElements.forEach(item => {
    var dataSpeed = parseFloat(item.getAttribute('data-speed')) * 0.5;
    item.style.transform = `translateY(-${dataSpeed * yOffset}px)`;
  });
};