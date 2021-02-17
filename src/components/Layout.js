import React from 'react'
import cn from 'classnames'

import '../../assets/css/main-gatsby.css';

function Layout({ pageClasses, children }) {
  return <div className={cn("dd-page text-ink", pageClasses)}>
    <h1>Hello!</h1>
    {children}
  </div>
}

export default Layout