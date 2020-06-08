import React from 'react'
import c from 'classnames'

export const DDOriginalIcon = ({ className }) => (
  <div className={c(`dd-icon`, className)}>
    <svg className="h-12" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="170 170 60 60" enable-background="new 170 170 60 60">
      <g class="dd-seal">
        <g class="circle" style={{fill: 'red'}}>
          <path d="M200,170c-16.5,0-30,13.5-30,30s13.5,30,30,30c16.5,0,30-13.5,30-30S216.5,170,200,170z"></path>
        </g>
        <g class="lines fill-current stroke-current">
          <line stroke-width="2" stroke-miterlimit="10" x1="205.2" y1="190.6" x2="215.6" y2="180.3"></line>
          <line stroke-width="2" stroke-miterlimit="10" x1="208.3" y1="193.7" x2="218.7" y2="183.4"></line>
          <line stroke-width="2" stroke-miterlimit="10" x1="180.9" y1="215" x2="191.2" y2="204.7"></line>
          <line stroke-width="2" stroke-miterlimit="10" x1="184" y1="218.1" x2="194.3" y2="207.8"></line>
        </g>
        <g class="letters fill-current">
          <path d="M200.7,214.5h2.6v-12.1h-2.6v-1.5h6.5c5.7,0,8.6,3,8.6,7.3c0,4.2-2.6,7.8-8.3,7.8h-6.7V214.5z
            M207.4,214.5c3.9,0,5.6-1.7,5.6-6.3c0-4-1.7-5.8-5.8-5.8h-1.6v12.1H207.4z"></path>
          <path d="M184.7,198.5h2.6v-12.1h-2.6v-1.5h6.5c5.7,0,8.6,3,8.6,7.3c0,4.2-2.6,7.8-8.3,7.8h-6.7V198.5z
            M191.4,198.5c3.9,0,5.6-1.7,5.6-6.3c0-4-1.7-5.8-5.8-5.8h-1.6v12.1H191.4z"></path>
        </g>
      </g>
      </svg>
    </div>
)

export const DDNewIcon = ({ className }) => (
  <div className={c(`dd-icon`, className)}>
    <svg viewBox="0 0 99 96" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <path d="M56.2222222,0 L56.2232667,0.308190068 C80.2959651,3.02293882 99,23.3397565 99,48 C99,72.6602435 80.2959651,92.9770612 56.2232667,95.6918099 L56.2222222,96 L0,96 L0,0 L56.2222222,0 Z M49,24 C35.745166,24 25,34.745166 25,48 C25,61.254834 35.745166,72 49,72 C62.254834,72 73,61.254834 73,48 C73,34.745166 62.254834,24 49,24 Z" id="Shape"></path>
        </g>
      </g>
    </svg>
  </div>
)

export const DDIcon = ({ className }) => (
  <div className={c(`dd-icon`, className)}>
    <svg viewBox="0 0 501.26 385.18" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor" fillRule="evenodd">
        <path d="M456.08 191.46a116 116 0 0 0-27.84-36.24A134.86 134.86 0 0 0 387 130.81a133.37 133.37 0 0 0-19.22-5.72 98.65 98.65 0 0 0-8.72-26.63 116 116 0 0 0-27.84-36.24A134.86 134.86 0 0 0 290 37.81a140.88 140.88 0 0 0-50.7-9H32.78v33h65v163h-65v32h162v61h-65v32h206.54a140.87 140.87 0 0 0 50.7-9 134.86 134.86 0 0 0 41.22-24.41 116.46 116.46 0 0 0 27.84-36.09 98.35 98.35 0 0 0 10.26-44.32 99.39 99.40 0 0 0-10.26-44.53zM129.78 61.78H237a111.73 111.73 0 0 1 38 6.39 103.52 103.52 0 0 1 31.17 17.46 81.6 81.6 0 0 1 21 26 70.91 70.91 0 0 1 4.22 10.13H129.78zm204.17 93a67.69 67.69 0 0 1-6.73 20.29 82 82 0 0 1-21 25.87A103.52 103.52 0 0 1 275 218.4a111.48 111.48 0 0 1-38 6.38h-10.22v-70zm-204.17 70v-70h65v70zm294.44 43.29a82 82 0 0 1-21 25.87A103.52 103.52 0 0 1 372 311.4a111.48 111.48 0 0 1-38 6.38H226.78v-61h12.54a140.87 140.87 0 0 0 50.7-9 134.86 134.86 0 0 0 41.22-23.41 116.46 116.46 0 0 0 27.84-36.09 97.41 97.41 0 0 0 8.92-27.46c1.36.43 2.71.87 4 1.35a103.52 103.52 0 0 1 31.17 17.46 81.6 81.6 0 0 1 21 26 69 69 0 0 1 7.64 31.79 68 68 0 0 1-7.59 31.65z"/>
      </g>
    </svg>
  </div>
) 

export default DDNewIcon