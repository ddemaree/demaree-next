
import React from "react"
import PropTypes from 'prop-types'

import c from "classnames"
import headerStyles from "../components/page-header.module.scss"

const PageHeader = ({ title, date, featureImage, fancyHeaderStyle }) => {
  // const hasFeatureImage = !!featureImage
  // const isFancyHeader = (!!featureImage || !!fancyHeaderStyle)

  return (
    <header className={c([
      headerStyles.header,
      (featureImage && headerStyles.hasFeatureImage),
      (fancyHeaderStyle && headerStyles.fancyHeader)
    ])}>
      <div className={headerStyles.headerContent}>
        <h1 className={headerStyles.title}>{title}</h1>
        {date && <p className={headerStyles.date}>September 9, 2019</p>}
      </div>
      {featureImage && <figure className={headerStyles.featureImage}>
        <img src={featureImage} />
      </figure>}
    </header>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default PageHeader