import React, { useEffect } from "react"
import c from 'classnames'

export const PageWrapper = ({ children, className }) => (
  <div className={c("max-w-lg mx-auto box-content", className)}>
    {children}
  </div>
)

export default PageWrapper