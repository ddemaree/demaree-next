import React from 'react'
import heroImg from '../assets/romain-vignes-53940-unsplash.jpg'

const HeroImage = ({ src, overlayColor, textColor, ...props }) => {
  let cssBgs = [`url(${src})`]
  let styles = {
    backgroundPosition: "45% 55%"
  }
  
  if(overlayColor) {
    cssBgs.unshift(`linear-gradient(to bottom, #0006, #0006)`)
  }

  if(textColor) styles.color = textColor;
  styles.backgroundImage = cssBgs.join(', ')

  return (
    <div className="hero-image" style={styles} {...props}></div>
  )
}

export default class extends React.Component {
  render() {
    return (<>
      <div className="hero-section-content">
        <p><b>Hi, I'm David. <em>👋</em></b></p>
        <p>I lead product teams that build amazing things. Sometimes I also build things. But mostly I <a className="activity">write</a>, <a className="activity">take pictures <em>📸</em></a>, and drink coffee.</p>
        <p>This is my web site. <em>💥</em></p>
      </div>
  </>)
  }
}

