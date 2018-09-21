import React from 'react'
import SiteHeader from './SiteHeader'
import { withRouter } from 'next/router'

import Router from 'next/router'
const { router } = Router

class SiteLayout extends React.Component {
  constructor(props) {
    super(props)
    
    this.startLoading = this.startLoading.bind(this)
    this.stopLoading  = this.stopLoading.bind(this)
    this.toggleTheme = this.toggleTheme.bind(this)

    this.state = {
      loading: false,
      showThemeSwitch: false,
      nightMode: (props.nightMode || true)
    }
  }

  componentDidMount(){
    this.setState({showThemeSwitch: true})

    if(router) {
      console.log("Adding route observers")
      router.events.on('routeChangeStart', this.startLoading)
      router.events.on('routeChangeComplete', this.stopLoading)
    }
  }
  
  componentWillUnmount() {
    if(router) {
      console.log("Removing route observers")
      router.events.off('routeChangeStart', this.startLoading)
      router.events.off('routeChangeComplete', this.stopLoading)
    }
  }
  
  startLoading(url) {
    console.log("Starting to navigate to ", url)
    this.setState({ loading: true })
  }
  
  stopLoading(url) {
    console.log("Done navigating to ", url)
    this.setState({ loading: false })
  }

  toggleTheme() {
    const { nightMode } = this.state
    this.setState({ nightMode: !nightMode })
  }

  getClassNames() {
    let classNames = ['site-layout']

    if( this.props.pageName )
      classNames.push(`page--${this.props.pageName}`)
    
    if( this.state.loading )
      classNames.push(`route-loading`)
    
    if( this.state.nightMode )
      classNames.push('dark-mode')

    return classNames.join(' ')
  }

  render () {
    const { children } = this.props
    const { showThemeSwitch, nightMode } = this.state

    return <div id="dd-main" className={this.getClassNames()}>
      <SiteHeader 
        toggleTheme={this.toggleTheme}
        showThemeSwitch={showThemeSwitch}
        nightMode={nightMode} />
      
      <main id="site-main" className="site-main">
        {children}
      </main>
      
      <footer id="site-footer" className="site-footer">
        <p>&ldquo;Have courage, and be kind&rdquo;</p>
      </footer>
    </div>
  }
}

export default withRouter(SiteLayout)