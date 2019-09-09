
import React from "react"
import c from "classnames"
import headerStyles from "../components/page-header.module.scss"

const PageHeader = ({ title, date, featureImage }) => {
  const hasFeatureImage = !!featureImage

  return (
    <header className={c([
      headerStyles.header,
      (hasFeatureImage && headerStyles.hasFeatureImage)
    ])}>
      <div className={headerStyles.headerContent}>
        <h1 className={headerStyles.title}>{title}</h1>
        <p className={headerStyles.date}>September 9, 2019</p>
      </div>
      {featureImage && <figure className={headerStyles.featureImage}>
        <img src={featureImage} />
      </figure>}
    </header>
  )
}

export default PageHeader