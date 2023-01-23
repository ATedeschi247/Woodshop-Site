// document.addEventListener('scroll', navbarFixing);
window.onscroll = function() {navbarFixing()};

function navbarFixing() {
  if (document.documentElement.scrollTop == 0 && !(document.getElementById('links').classList.contains('in'))) {
    document.querySelector('nav').style.backgroundColor = 'transparent';
  } else {
    document.querySelector('nav').style.backgroundColor = '#fff';
  }
}
function navbarClick() {
  if (!(document.getElementById('links').classList.contains('in'))) {
    document.querySelector('nav').style.backgroundColor = 'white';
  } else {
    if(document.documentElement.scrollTop == 0) {
      document.querySelector('nav').style.backgroundColor = 'transparent';
    }
  }
}

document.querySelector('.carousel-inner').style.height = '600px';