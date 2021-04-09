import React, { useEffect, useRef } from "react"
import { Helmet } from "react-helmet"
// import { useRouter } from "next/router"

function PostContent({ html }) {
  const containerRef = useRef(null)
  // const router = useRouter()
  // console.log(html)

  // Strip any embed JS tags
  const cleanHtml = html.replace(/<script .*><\/script>/g, '')

  // Detect embeds
  const hasTweets = cleanHtml.match('twitter-tweet')
  // const hasGrams  = cleanHtml.match('instagram-media')
  
  // // Make local links behave as next/links
  // useEffect(() => {
  //   const container = containerRef.current
    
  //   const siteUrlHref = location.href
  //   const siteUrl = new URL(siteUrlHref)
  //   const siteUrlPrefix = `${siteUrl.protocol}//${siteUrl.host}`

  //   container.querySelectorAll('a[href]').forEach(link => {
  //     const linkHref = link.href
  //     const linkWithoutPrefix = linkHref.replace(siteUrlPrefix, "")
  //     if(linkWithoutPrefix.match(/^\//)) {
  //       link.addEventListener('click', e => {
  //         console.log({siteUrlHref, siteUrlPrefix, link, linkHref})
  //         e.preventDefault()
  //         router.push(linkWithoutPrefix)
  //       })
  //     }
  //   })
  // })

  // Fix image aspect ratios in gallery cards
  useEffect(() => {
    const container = containerRef.current
    var images = container.querySelectorAll('.kg-gallery-image img');
    images.forEach(function (image) {
        var container = image.closest('.kg-gallery-image');
        var width = image.attributes.width.value;
        var height = image.attributes.height.value;
        var ratio = width / height;
        container.style.flex = ratio + ' 1 0%';
    });
  })

  // Video cards - Calculate aspect ratios and make videos responsive
  useEffect(() => {
    const container = containerRef.current
    const videoSelectors = [
      'iframe[src*="player.vimeo.com"]',
      'iframe[src*="youtube.com"]',
      'iframe[src*="youtube-nocookie.com"]',
      'iframe[src*="kickstarter.com"][src*="video.html"]',
      'object',
      'embed'
    ];

    let videoElems = container.querySelectorAll(videoSelectors.map(s => `.kg-embed-card > ${s}`).join(', '))
    videoElems.forEach(video => {
      let wrapper = video.closest('.dd-video-container')
      if(!wrapper) {
        let wrapper = document.createElement('div')
        wrapper.classList.add('dd-video-container')
        video.parentNode.insertBefore(wrapper, video)
        wrapper.appendChild(video)
      }

      // Get video's aspect ratio
      let height, width, aspectRatio;
      if(wrapper && video.getAttribute('width') && video.getAttribute('height')) {
        height = parseFloat(video.getAttribute('height')) 
        width  = parseFloat(video.getAttribute('width'))
        aspectRatio = (height / width)
        wrapper.style.paddingTop = `${aspectRatio * 100}%`
      }
    })
  });

  // Handle tweets
  useEffect(() => {
    if(!hasTweets) return;
    const container = containerRef.current

    window.twittr = function(d, s, id) {
      let js;
      let t = window.twttr || {};
      const fjs = d.getElementsByTagName(s)[0];

      if (d.getElementById(id)) return t;

      js = d.createElement(s)
      js.id = id
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs)

      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };

      return t;
    }(document, "script", "twitter-wjs")

    const tweets = container.querySelectorAll('.twitter-tweet')
    const isDarkMode = (window && window.matchMedia('(prefers-color-scheme: dark)').matches)
    tweets.forEach(t => {
      t.dataset.theme = isDarkMode ? 'dark' : 'light'
      t.dataset.dnt   = true
      t.dataset.cards = true
      t.dataset.width = 480
    })

    if(window.twttr) window.twttr.widgets.load(container)
  });

  // Handle instagram
  useEffect(() => {
    const loadInstgrmScript = function(d, s, id) {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s)
      js.id = id
      js.src = "//www.instagram.com/embed.js";
      fjs.parentNode.insertBefore(js, fjs)
    }
    loadInstgrmScript(document, "script", "instagram-wjs");

    if(window.instgrm) window.instgrm.Embeds.process();
  })

  return <>
    <Helmet>
      <link rel='dns-prefetch' href='//c0.wp.com' />
      <link rel='stylesheet' id='wp-block-library-css'  href='https://c0.wp.com/c/5.7/wp-includes/css/dist/block-library/style.min.css' media='all' />
    </Helmet>

    <div
      ref={containerRef}
      className="prose contents"
      dangerouslySetInnerHTML={{__html: cleanHtml}} />
  </>
}

export default PostContent