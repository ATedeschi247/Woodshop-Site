document.addEventListener('wheel', navbarFixing);

function navbarFixing() {
  if (window.pageYOffset == 0 && !(document.getElementById('links').classList.contains('in'))) {
    document.querySelector('nav').style.backgroundColor = 'transparent';
  } else {
    document.querySelector('nav').style.backgroundColor = '#fff';
  }
}
function navbarClick() {
  if (!(document.getElementById('links').classList.contains('in'))) {
    document.querySelector('nav').style.backgroundColor = 'white';
  }
}