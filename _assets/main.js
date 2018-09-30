const html = document.documentElement
html.classList.add('js-loaded')

import { library, dom } from "@fortawesome/fontawesome-svg-core"
import { faTwitter, faMedium, faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
library.add(faTwitter, faMedium, faLinkedin, faInstagram, faGithub, faPaperPlane)
dom.watch()