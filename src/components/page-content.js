import PropTypes from "prop-types"
import React from "react"

import c from 'classnames'
import styles from './page-content.module.scss'

const PageContent = ({ content, className }) => (
  <div 
    className={c(styles.pageContent, className)}
    dangerouslySetInnerHTML={{__html: content}}
    />
)

PageContent.propTypes = {
  content: PropTypes.string,
}

PageContent.defaultProps = {
  content: ``,
}

export default PageContent