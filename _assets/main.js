const html = document.documentElement
html.classList.add('js-loaded')

import { library, dom } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faTwitter, faMedium, faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faPaperPlane, faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
library.add(faTwitter, faMedium, faLinkedin, faInstagram, faGithub, faPaperPlane, faBars, faTimes)
dom.watch()

// drawer

import React from 'react'
import ReactDOM from 'react-dom'

const parent = document.querySelector('.site-container')
const navBarElem = document.querySelector('.site-header')

class NavBarPortal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.classList.add('nav-toggle')
  }

  componentDidMount() {
    navBarElem.prepend(this.el)
    navBarElem.classList.add('site-nav--toggle-enabled')
  }

  componentWillUnmount() {
    navBarElem.removeChild(this.el);
    navBarElem.classList.remove('site-nav--toggle-enabled')
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}

class NavDrawer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: false
    }
  }

  componentDidMount() {
    parent.classList.remove('nav-drawer-open')
  }

  toggleDrawer() {
    parent.classList.toggle('nav-drawer-open')
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  render() {
    return <div className="nav-drawer__content">
      <p className="nav-drawer__placeholder">
      I like hamburgers and don't have navigation yet
      </p>
      <NavBarPortal>
        <button className="nav-toggle__button" onClick={e => this.toggleDrawer()}>
          <Icon icon={this.state.drawerOpen ? faTimes : faBars } />
        </button>
      </NavBarPortal>
    </div>
  }
}

const el = document.createElement('nav')
el.classList.add('nav-drawer')
parent.prepend(el)
ReactDOM.render(<NavDrawer />, el);