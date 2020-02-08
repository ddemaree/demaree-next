
import React from "react"
import PropTypes from 'prop-types'

import PostInfo from "./post-info"

const PageHeader = ({ title, date, words, featureImage }) => {
  return (
    <header>
      <div className={`text-center mb-8`}>
        <h1 className="text-3xl font-light">{title}</h1>
        {date && <p className="text-sm text-gray-600 mt-1">
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