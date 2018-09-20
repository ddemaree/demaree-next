import React, { Fragment } from 'react'
import Head from 'next/head'
import heroImg from '../assets/romain-vignes-53940-unsplash.jpg'

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
  </Fragment>)
  }
}

