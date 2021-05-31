import 'alpinejs'
import 'lazysizes'
import 'imgix.js'
import FitVids from './fitvids'

const { imgix } = window

imgix.init({
  useHttps: true,
  host: 'ddimg.imgix.net',
  srcAttribute: 'data-src',
  srcsetAttribute: 'data-srcset',
  sizesAttribute: 'data-sizes'
});

FitVids.init();

document.body.classList.add("js-active");