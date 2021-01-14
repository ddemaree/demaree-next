// import "alpinejs"

import Vue from "vue/dist/vue.esm";

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

const scrollWidth = getScrollbarWidth();
console.log("Scroll width is ", scrollWidth);

function setBodyScroll(isScrollable = true) {
  console.log("Scroll width is ", scrollWidth);

  if (isScrollable) {
    document.body.style.paddingRight = "0px";
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.style.paddingRight = `${scrollWidth}px`;
    document.body.classList.add("overflow-hidden");
  }
}

const menuVm = new Vue({
  el: "#tha-menu",
  data: {
    open: false,
    menuItems: window.__menus || [],
  },
  created() {
    if (this.open) {
      setBodyScroll(false);
    } else {
      setBodyScroll(true);
    }
  },
});

menuVm.$watch("open", (newVal) => {
  setBodyScroll(!newVal);
});

const config = {
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
};

function loadImage(img) {
  const wrapper = img.closest(".lazy-img-container");
  const fullSrc = img.dataset.src;

  const fullImg = new Image();

  const imgClasses = ["lazy-img-full", ...img.classList].filter(
    (c) => c !== "lazy-img-preview"
  );
  fullImg.classList.add(...imgClasses);

  fullImg.src = fullSrc;
  fullImg.width = img.attributes["width"]
    ? img.attributes["width"].value
    : img.width;

  fullImg.height = img.attributes["height"]
    ? img.attributes["height"].value
    : img.height;
  if (img.alt) fullImg.alt = img.alt || "";
  if (img.dataset.srcset) fullImg.srcset = img.dataset.srcset;

  const addImage = () => {
    wrapper.appendChild(fullImg).addEventListener("animationend", (e) => {
      const preview = wrapper.querySelector(".lazy-img-preview");
      if (preview) wrapper.removeChild(preview);
      e.target.classList.remove("lazy-img-full");
    });
  };

  if (fullImg.complete) addImage();
  else fullImg.onload = addImage;
}

let observer = new IntersectionObserver((entries, self) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      loadImage(entry.target);
    }
  });
}, config);

const img = document.querySelectorAll("[data-src]");
img.forEach((img) => {
  img.classList.add("lazy-img-preview");
  let padding;

  if (img.dataset.padding) {
    padding = img.dataset.padding;
    console.log("img has padding data attr", padding);
  }

  let wrapper = img.closest(".lazy-img-container");
  if (!wrapper) {
    wrapper = document.createElement("div");
    wrapper.classList.add("lazy-img-container");

    // if(img.dataset.padding) {
    //   wrapper.style.paddingTop = `${padding}%`
    //   img.classList.add('absolute')
    // }

    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);
  }

  observer.observe(img);
});

document.body.classList.add("js-active");
