export const HeroImage = ({ src, overlayColor, textColor, className, backgroundPosition, ...props }) => {
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

export default HeroImage