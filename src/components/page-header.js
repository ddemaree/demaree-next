
import React from "react"
import PropTypes from 'prop-types'

import c from "classnames"
import styles from "../components/page-header.module.scss"

const PageHeader = ({ title, date, featureImage, fancyHeaderStyle }) => {
  // const hasFeatureImage = !!featureImage
  // const isFancyHeader = (!!featureImage || !!fancyHeaderStyle)

  return (
    <header className={c([
      styles.header,
      (featureImage && styles.hasFeatureImage),
      (fancyHeaderStyle && styles.fancyHeader)
    ])}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>{title}</h1>
        {date && <p className={styles.date}>September 9, 2019</p>}
      </div>
      {featureImage && <figure className={styles.featureImage}>
        <img src={featureImage} />
      </figure>}
    </header>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default PageHeader