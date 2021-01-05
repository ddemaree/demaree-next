import "alpinejs"

const config = {
  rootMargin: '0px 0px 0px 0px',
  threshold: 0
};

function loadImage(img) {
  const wrapper = img.closest('.lazy-img-container')
  const fullSrc = img.dataset.src;

  const fullImg = new Image()
  fullImg.src = fullSrc
  fullImg.className = "lazy-img-full"
  fullImg.width = img.width
  fullImg.height = img.height
  fullImg.alt = img.alt || ""

  const addImage = () => {
    wrapper.appendChild(fullImg).addEventListener('animationend', e => {
      const preview = wrapper.querySelector('.lazy-img-preview')
      wrapper.removeChild(preview)
      e.target.classList.remove('lazy-img-full')
    })
  }

  if(fullImg.complete) addImage();
  else fullImg.onload = addImage
}

let observer = new IntersectionObserver((entries, self) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      loadImage(entry.target)
    }
  })
}, config)

const img = document.querySelectorAll('[data-src]')
img.forEach(img => {
  if(!img.closest('.lazy-img-container')) {
    const wrapper = document.createElement('div')
    wrapper.classList.add('lazy-img-container')
    img.parentNode.insertBefore(wrapper, img)
    wrapper.appendChild(img)
  }
  observer.observe(img)
})

document.body.classList.add('js-active')