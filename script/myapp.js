import { createPopper } from '@popperjs/core/lib/popper-lite.js';

document.getElementById('my-slider').addEventListener('mouseover', changeText);
function changeText(e){
  e.preventDefault();
}

var slider = tns({
  container: '.my-slider',
  items: 1,
  responsive: {
    640: {
      edgePadding: 20,
      gutter: 20,
      items: 2
    },
    700: {
      gutter: 30
    },
    900: {
      items: 3
    }
  }
});