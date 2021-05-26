---
title: Glitch Adds Support for Generated Sites
date: '2021-04-28T20:45:00'
slug: glitch-adds-support-for-generated-sites
tags:
  - Glitch
  - JAMstack
  - JavaScript
  - Web Development
link_url: https://blog.glitch.com/post/remix-a-whole-new-glitch
---

I’m a big fan of [Glitch](http://glitch.com) for quickly and easily spinning up a website or little toy app. Right now I have a little API for generating image tags for assets in my Cloudinary account, and a number of Next.js apps for things like generating tonal color palettes or telling me how many days I’ve been in Covid “quarantine.”

Today, the team rolled out some new starter projects with [new and improved support for generated static sites](https://blog.glitch.com/post/remix-a-whole-new-glitch). Up to now, you could host fully static, hand-crafted HTML sites for free, but any kind of code (including a build step for the HTML) would require running a server, which would either go to sleep periodically or cost money. With these changes, Glitch will let you run build tools like [Eleventy](https://www.11ty.dev/) (for blogs and websites) or [Vite](https://vitejs.dev/) (for JS & CSS assets) to generate your site, but will still host it 24-7 for free.
