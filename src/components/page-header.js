
import React from "react"
import PropTypes from 'prop-types'

import c from "classnames"
// import styles from "../components/page-header.module.scss"
const styles = {}

const PageHeader = ({ title, date, featureImage, fancyHeaderStyle }) => {
  const isFancy = !!(featureImage || fancyHeaderStyle)
  
  return (
    <header className={`mb-8`}>
      <div className={c([
        `dd-ph-inset flex flex-column items-center justify-center w-100 z-2`, 
        (isFancy && `absolute white top-1 bottom-2 pt5`)
      ])}>
        <h1 className="ma0 dd-f-title">{title}</h1>
        {date && <p className="mt3 dd-f-micro">September 9, 2019</p>}
      </div>
      {featureImage && <figure className={c(styles.featureImage, `pa0 ma0 z-0`)}>
        <img src={featureImage} />
      </figure>}
    </header>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default PageHeader