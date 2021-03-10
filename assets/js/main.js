import _ from 'lodash';
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


// const menuVm = new Vue({
//   el: "#tha-menu",
//   data: {
//     open: false,
//     menuItems: window.__menus || [],
//   },
//   created() {
//     if (this.open) {
//       setBodyScroll(false);
//     } else {
//       setBodyScroll(true);
//     }
//   },
// });

// menuVm.$watch("open", (newVal) => {
//   setBodyScroll(!newVal);
// });

const lazyloadEvent = new Event('lazyload');

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
      entry.target.dispatchEvent(lazyloadEvent)
    }
  });
}, config);

document.querySelectorAll('.la-z_vue-img').forEach(elem => {
  let attrs = {}
  let attrNames = ['width', 'height', 'alt', 'title']
  attrNames.reduce(function(attrs, thisName) {
    attrs[thisName] = elem.getAttribute(thisName)
    return attrs
  }, attrs)  

  const data = {
    loaded: false,
    visible: false,
    previewSrc: elem.getAttribute('src'),
    ...attrs,
    ...elem.dataset
  }

  return new Vue({
    el: elem,
    template: '#la-z-vue-tpl',
    data,
    mounted: function() {
      const vue = this
      this.$el.addEventListener('lazyload', function(e){
        vue.visible = true
      })
      observer.observe(this.$el)
    }
  })

})


const laZLoad = imgElem => {
  const imgBlock = imgElem.closest('.la-z')

  if(!imgBlock) return null;

  const fullImg = imgBlock.querySelector('.la-z_full') || document.createElement('img');
  fullImg.classList.add('la-z_full');

  fullImg.onload = (e) => {
    fullImg.classList.add('la-z_loaded')
  }

  const { src, srcset, sizes } = imgElem.dataset
  fullImg.src = src
  fullImg.srcset = srcset
  if(sizes) fullImg.sizes = sizes

  imgBlock.appendChild(fullImg)
  fullImg.addEventListener('animationend', e => {
    img.classList.add('invisible')
  })
}

document.querySelectorAll(".la-z_img").forEach(img => {
  img.addEventListener('lazyload', function(e) {
    laZLoad(this)
  })
  observer.observe(img)
})

const img = document.querySelectorAll(".old-lazyload");
img.forEach((img) => {
  img.classList.add("lazy-img-preview");

  let wrapper = img.closest(".lazy-img-container");
  if (!wrapper) {
    wrapper = document.createElement("div");
    wrapper.classList.add("lazy-img-container");
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);
  }

  observer.observe(img);
});

document.querySelectorAll('.dd-block-gallery-NEW').forEach(galleryBlock => {
  const images = galleryBlock.querySelectorAll('img, .gallery-img')
  const imageData = []
  images.forEach(img => {
    imageData.push({
      elem: img,
      data: img.dataset,
      src: img.src,
      srcset: img.srcset
    })
  })
  console.log({images, imageData})

  new Vue({
    el: galleryBlock,
    template: '#gallery-tpl',
    data: {
      images: imageData
    },
    computed: {
      imageRows: function() {
        return _.chunk(this.images, 2)
      }
    }
  })
})

// const deorphans = document.querySelectorAll(".deorphan");
// deorphans.forEach((elem) => {
//   let titleContent;
//   if (elem.dataset.content) {
//     titleContent = elem.dataset.content;
//   } else {
//     titleContent = elem.innerText;
//   }

//   let fakeElem = document.createElement("div");
//   fakeElem.setAttribute("class", elem.attributes["class"].textContent);
//   fakeElem.style.position = "fixed";
//   fakeElem.style.left = "-9999px";
//   fakeElem.style.top = "0px";
//   fakeElem.style.width = "max-content";
//   document.body.appendChild(fakeElem);

//   let words = titleContent.split(" ");
//   let wordTags = words.map((w, x) => {
//     var wordElem = document.createElement("span");
//     wordElem.classList.add("word");
//     wordElem.innerHTML = w;
//     if (x > 0) fakeElem.appendChild(document.createTextNode(" "));
//     fakeElem.appendChild(wordElem);
//     console.log(x, wordElem.offsetWidth);
//   });
// });

document.body.classList.add("js-active");
