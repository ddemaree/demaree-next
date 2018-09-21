import React, { Fragment } from 'react'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeroImage = ({ src, overlayColor, textColor, className, backgroundPosition, ...props }) => {
  let classNames = ['hero-image', className]
  let cssBgs = [`url(${src})`]
  let styles = {
    backgroundPosition,
    backgroundSize: 'cover',
  }
  
  if(overlayColor) {
    cssBgs.unshift(`linear-gradient(to bottom, #0006, #0006)`)
  }

  if(textColor) styles.color = textColor;
  styles.backgroundImage = cssBgs.join(', ')

  return (
    <div 
      className={classNames.join(' ')} 
      style={styles}
      {...props} />
  )
}

function getIconName(icon) {
  if (typeof icon === 'string') {
    return ['fab', icon]
  } else {
    return icon
  }
}

const SocialLink = ({ label, icon, href, title, children }) =>
  <li className="dd-social-link">
    <a target="_blank" href={href} title={title} rel="me">
      {icon && <FontAwesomeIcon icon={getIconName(icon)} />}
      {children && <span>{children}</span>}
      {!children && label && <span>{label}</span>}
      {!children && !label && title && <span>{title}</span>}
    </a>
  </li>

export default class extends React.Component {
 render() {
    return (<Fragment>
      <Head>
        <title>David Demaree's web site</title>
      </Head>
      <div className="hero-section">
        <p className="hero-section__hed"><b>Hi, I'm David. <span>👋</span></b></p>
        <p>I lead product teams that build amazing things on the internet.</p><p>This is my web&nbsp;site.&nbsp;<span>💥</span></p>
      </div>
      <nav className="socials">
        <ul>
          <SocialLink title="@ddemaree on Twitter" icon="twitter" href="https://twitter.com/ddemaree" label="Twitter" />
          <SocialLink title="@ddemaree on Instagram" icon="instagram" href="https://instagram.com/ddemaree" label="Instagram" />
          <SocialLink title="@ddemaree on Medium" icon="medium" href="https://medium.com/@ddemaree" label="Medium" />
          <SocialLink title="@ddemaree on GitHub" icon="github" href="https://github.com/ddemaree" label="GitHub" />
          <SocialLink title="@ddemaree on LinkedIn" icon="linkedin" href="https://linkedin.com/in/ddemaree" label="LinkedIn" />
          <SocialLink title="Send email to David" icon={['fas', 'paper-plane']} href="mailto:david@demaree.me" label="Email me" />
        </ul>
      </nav>
  </Fragment>)
  }
}

