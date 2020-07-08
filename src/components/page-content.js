import PropTypes from "prop-types"
import React, { useEffect } from "react"
import Helmet from 'react-helmet'

import c from 'classnames'

const PageContent = ({ content, className }) => {
  console.log(content)

  const containsTweets = !!content.match(/twitter-tweet/)
  const constainsInsta = !!content.match(/data-instgrm/)

  let sanitizedContent = content.replace(/(<script.+\/script>)/g, '<!-- $1 -->');
  let pageContentRef = React.createRef()

  useEffect(() => {
    if(window.instgrm)
      window.instgrm.Embeds.process()

    let pageContentElem = pageContentRef.current

    // Gallery cards - Calculate flex values for masonry grid
    var images = pageContentElem.querySelectorAll('.kg-gallery-image img');
    images.forEach(function (image) {
        var container = image.closest('.kg-gallery-image');
        var width = image.attributes.width.value;
        var height = image.attributes.height.value;
        var ratio = width / height;
        container.style.flex = ratio + ' 1 0%';
    })

    // Video cards - Calculate aspect ratios and make videos responsive
    const videoSelectors = [
      'iframe[src*="player.vimeo.com"]',
      'iframe[src*="youtube.com"]',
      'iframe[src*="youtube-nocookie.com"]',
      'iframe[src*="kickstarter.com"][src*="video.html"]',
      'object',
      'embed'
    ];

    let videoElems = pageContentElem.querySelectorAll(videoSelectors.join(', '))
    videoElems.forEach(video => {
      let wrapper = video.closest('.video-container')
      if(!wrapper) {
        let wrapper = document.createElement('div')
        wrapper.classList.add('video-container')
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

  return  (
    <>
      <Helmet>
        {containsTweets && <script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>}
        {constainsInsta && <script async="" src="//www.instagram.com/embed.js"></script>}
      </Helmet>
      <div 
        className={c(className, 'wp-content max-w-lg px-6 mx-auto')}
        dangerouslySetInnerHTML={{__html: sanitizedContent}}
        ref={pageContentRef}
        />
    </>
  )
}

PageContent.propTypes = {
  content: PropTypes.string,
}

PageContent.defaultProps = {
  content: ``,
}

export default PageContent