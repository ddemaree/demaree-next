
import React from "react"
import PropTypes from 'prop-types'

import PostInfo from "./post-info"

const PageHeader = ({ title, date, words, featureImage }) => {
  return (
    <header>
      <div className={`text-center mb-10 px-6`}>
        <h1 className="text-4xl leading-none font-display-serif font-medium mb-3">{title}</h1>
        {date && <p className="text-sm text-ink-medium">
          <PostInfo date={date} words={words} />
        </p>}
      </div>
      {featureImage && <figure className={`mb-8`}>
        <img src={featureImage.source_url} alt={featureImage.alt_text} />
        {featureImage.caption && <figcaption>{featureImage.caption}</figcaption>}
      </figure>}
    </header>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default PageHeader