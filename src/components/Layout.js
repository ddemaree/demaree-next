import React from 'react'
import cn from 'classnames'

import '../../assets/css/main-gatsby.css';
import { Helmet } from 'react-helmet';

function Layout({ pageClasses, children }) {
  return <>
    <Helmet 
      titleTemplate="%s • David Demaree" 
      defaultTitle="David Demaree">
      {["soehne", "soehne-breit", "ivar-text", "roslindale"].map(set => <link key={set} data-dd-fontset={set} rel="stylesheet" href={`https://cdn.demaree.net/fonts/${set}/index.css`} type="text/css" />)} 
      <script src="https://kit.fontawesome.com/f0afb61fe2.js" crossorigin="anonymous"></script>
    </Helmet>
    <div className={cn("dd-page text-ink", pageClasses)}>
      <h1>Hello!</h1>
      {children}
    </div>
  </>
}

export default Layout