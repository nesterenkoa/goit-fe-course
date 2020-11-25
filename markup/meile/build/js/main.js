function makeResponsive() {
  var root = document.querySelector('#stream-container');
  var rootWidth = root.offsetWidth;
  if(rootWidth > 1100) {
    root.classList.remove('small-pc');
  } else {
    root.classList.add('small-pc');
  }
  if(rootWidth > 992) {
    root.classList.remove('tablet');
  } else {
    root.classList.add('tablet');
  }
  if(rootWidth > 768) {
    root.classList.remove('mobile');
  } else {
    root.classList.add('mobile');
  }
}
document.addEventListener('DOMContentLoaded', makeResponsive);
window.addEventListener('resize', makeResponsive);