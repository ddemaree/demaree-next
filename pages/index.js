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
      <HeroImage
        className="hero-photo" 
        backgroundPosition="65% 25%"
        src="https://res.cloudinary.com/demaree/image/fetch/http://images.demaree.me/imgix/dd-photo.jpg" />
      <div className="hero-section-content">
        <p><b>Hi, I'm David. <em>👋</em></b></p>
        <p>I lead product teams that build amazing things. Sometimes I also build things. But mostly I <a className="activity">write</a>, <a className="activity">take pictures <em>📸</em></a>, and drink coffee.</p>
        <p>This is my web site. <em>💥</em></p>
      </div>
  </Fragment>)
  }
}

