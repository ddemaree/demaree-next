import Vue from "vue/dist/vue.esm";
window.Vue = Vue;

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
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);
  }

  observer.observe(img);
});

const deorphans = document.querySelectorAll(".deorphan");
deorphans.forEach((elem) => {
  let titleContent;
  if (elem.dataset.content) {
    titleContent = elem.dataset.content;
  } else {
    titleContent = elem.innerText;
  }
  console.log(titleContent);

  let fakeElem = document.createElement("div");
  fakeElem.setAttribute("class", elem.attributes["class"].textContent);
  fakeElem.style.position = "fixed";
  fakeElem.style.left = "-9999px";
  fakeElem.style.top = "0px";
  fakeElem.style.width = "max-content";
  document.body.appendChild(fakeElem);
  console.log(fakeElem);

  let words = titleContent.split(" ");
  let wordTags = words.map((w, x) => {
    var wordElem = document.createElement("span");
    wordElem.classList.add("word");
    wordElem.innerHTML = w;
    if (x > 0) fakeElem.appendChild(document.createTextNode(" "));
    fakeElem.appendChild(wordElem);
    console.log(x, wordElem.offsetWidth);
  });

  console.log(elem.offsetWidth, fakeElem.offsetWidth);

  // const elemText = elem.innerText;
  // const words = elemText.split(" ");
  // const newString = words.slice(0, -2).join(" ");
  // const secondString = words.slice(-2).join("&nbsp;");
  // elem.innerHTML = newString + " " + secondString;
});

document.body.classList.add("js-active");
