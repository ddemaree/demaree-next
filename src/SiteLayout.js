import React from 'react'
import Link from 'next/link'
// import DDIcon from '../src/DDIcon'

const SiteHeader = (props) => (
  <header id="site-header" className="site-header">
    <Link href="/">
      <a className="header-logo">
        <h1>David Demaree</h1>
      </a>
    </Link>
    {false && (<nav className="site-nav">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/writing">
        <a>Writing</a>
      </Link>
      <Link href="/photography">
        <a>Photography</a>
      </Link>
    </nav>)}
  </header>
)

import Router from 'next/router'

export default class SiteLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      nightMode: (props.nightMode || false)
    }
  }

  componentDidMount() {
    console.log("SiteLayout did mount")
    // console.log(Router)
    // Router.events.on('routeChangeStart', (url) => this.setState({loading: true}))
    // Router.events.on('routeChangeComplete', (url) => this.setState({loading: false}))
    // Router.events.on('routeChangeError', (url) => this.setState({loading: false}))
  }

  getClassNames() {
    let classNames = ['site-layout']

    if( this.props.pageName )
      classNames.push(`page--${this.props.pageName}`)

    return classNames.join(' ')
  }

  render () {
    const { children } = this.props
    return <div id="dd-main" className={this.getClassNames()}>
      <SiteHeader />
      
      <main id="site-main" className="site-main">
        {children}
      </main>
      
      <footer id="site-footer" className="site-footer">
        <p>&ldquo;Have courage, and be kind&rdquo;</p>
      </footer>
    </div>
  }
}