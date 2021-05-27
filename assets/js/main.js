import 'alpinejs'
import 'lazysizes'
import 'imgix.js'

// function getScrollbarWidth() {
//   return window.innerWidth - document.documentElement.clientWidth;
// }

// const scrollWidth = getScrollbarWidth();
// console.log("Scroll width is ", scrollWidth);

// function setBodyScroll(isScrollable = true) {
//   console.log("Scroll width is ", scrollWidth);

//   if (isScrollable) {
//     document.body.style.paddingRight = "0px";
//     document.body.classList.remove("overflow-hidden");
//   } else {
//     document.body.style.paddingRight = `${scrollWidth}px`;
//     document.body.classList.add("overflow-hidden");
//   }
// }

// if(document.getElementById('tha-menu')) {
//   const menuVm = new Vue({
//     el: "#tha-menu",
//     data: {
//       open: false,
//       menuItems: window.__menus || [],
//     },
//     created() {
//       if (this.open) {
//         setBodyScroll(false);
//       } else {
//         setBodyScroll(true);
//       }
//     },
//   });

//   menuVm.$watch("open", (newVal) => {
//     setBodyScroll(!newVal);
//   });
// }


// const config = {
//   rootMargin: "0px 0px 0px 0px",
//   threshold: 0,
// };
// 
// let observer = new IntersectionObserver((entries, self) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       loadImage(entry.target);
//     }
//   });
// }, config);

document.body.classList.add("js-active");
