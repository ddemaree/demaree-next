
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export const socials = Object.entries({
  twitter: {
    url: "https://twitter.com/ddemaree",
    icon: faTwitter
  },
  instagram: {
    url: "https://instagram.com/ddemaree",
    icon: faInstagram
  },
  linkedin: {
    url: "https://linkedin.com/in/ddemaree",
    icon: faLinkedin
  },
  email: {
    url: "mailto:demaree@hey.com?subject=Holla",
    icon: faPaperPlane
  }
})

export function SocialLinkItem({url, icon}) {
  return <a 
    href={url}
    className="transition-all mr-3 last:mr-0 inline-block h-12 w-12 rounded-full text-inkMedium border border-inkLight hover:border-inkBold hover:text-inkBold flex items-center justify-center">
    <FontAwesomeIcon icon={icon} className="w-6" />
  </a>
}

function SocialLinks() {
  return <div className="flex items-center justify-center">
    {socials.map(([key, social]) => <SocialLinkItem key={key} url={social.url} icon={social.icon} />)}
  </div>
}

export default SocialLinks