---
title: Simpler Web Hacking with Parcel
slug: simpler-web-hacking-with-parcel
date: 2021-01-18T13:29:54-05:00
excerpt: Recapturing the magic of early web development with modern tools
description: Recapturing the magic of early web development with modern tools
tags:
  - Web Development
  - JavaScript
  - React
  - Coding
featured_image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66"
aliases:
  - /p/simpler-web-hacking
---

<figure class="wide-width dd-block-image">
<img src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=1800&h=1200" width="900" height="600" />
</figure>

I dunno about you, but I’ve been missing the old days when we could try out some new web technique or think through some code by just opening up an editor, making a fresh `index.html`, and getting to work.

I’m generally a fan of frameworks that let you get to work with a bare minimum of boilerplate code or setup, and I’m particularly fond of tools that leverage the filesystem and/or the native syntax of the web, so that web development feels like it did back when uploading PHP scripts to a FTP site felt magical. 

This is a rare feeling these days; in order to give developers the power to make powerful, scalable web apps, it feels like we've neglected or even forgotten how to make web _pages_. I miss the simplicity and immediacy — the feeling of _magic_ — that made web development so fun when I was starting out.

[Next.js](nextjs.org) has some of this magic. It’s a React-based app framework that uses file and directory names to set up URL routes; given a file named `about/index.js`, Next will create a web page whose URL is `/about`. This isn’t _quite_ the old web I loved in the 2000s, because React is involved. That file isn’t a web page, it’s a JavaScript file that exports a component, and there are things that are stupidly hard to do without layering on ever more libraries and boilerplate. But what’s nice about Next is that once you install it and its dependencies, you can just create a couple of files, run `next dev`, and you’re off to the races.

---- 

This weekend I wanted to play around with [Chroma.js](https://gka.github.io/chroma.js/), a library for manipulating colors and scales. I started out trying it in CodePen and Glitch — both great tools for trying things out — but found myself wanting to write code in [my favorite editor](https://nova.app), not a browser. 

[Parcel](parceljs.org) made it possible for me to have my cake and eat it too — to write code like I was building a totally local, static web page, but enjoy all the benefits of modern build tools.

Parcel’s website describes it as “a compiler for all your code, regardless of the language or toolchain…  (it) takes all of your files and dependencies, transforms them, and merges them together into a smaller set of output files that can be used to run your code.” All of which is true, but I think obscures the most important part: Parcel does all of this with little or no setup, configuration, or boilerplate code.

This may seem remarkable in different ways depending on your experience with the modern JavaScript world.

If you’re familiar with compiled languages or frameworks, or other bundler tools like Webpack, Parcel’s big pitch is that it can simplify your life. Whenever I use Webpack it usually takes me _dozens_ of minutes to write (or rather copy-paste) a configuration file and install packages to make my code run. Even for an experienced JS programmer who’s used to this pain, Parcel is a valuable time-saver.

But what’s _really_ great about Parcel is that it’s a Webpack-like tool that can be used without prior knowledge of Webpack-like tools, that uses _your own code_ to configure itself.

Take an HTML document like this:

```html {hl_lines=[5,10]}
<!-- index.html -->
<html>
  <head>
    <title>A throwaway web page experiment</title>
    <link href="./styles.css" rel="stylesheet" />
  </head>
  <body>
    <h1>Time to code!</h1>
    <div id="vue-app"></div>
    <script src="./app.js"></script>
  </body>
</html>
```

In a bygone era, with all your HTML, JavaScript, and CSS code hand-crafted as static files, you could just load this into a browser and go. In fact, let me tell you a secret: that way of making web pages _still works_. The modern web platform still supports simple ways of working, it just doesn’t allow or make it easy for you to use preprocessors if you want to.

**But Parcel does!** Once it’s installed, just run this command:

```bash
parcel index.html
```

Reading your HTML, Parcel will see that it depends on two other assets — `styles.css` and `main.js` — and build those, preprocessing them according to the file extensions. It’ll (re-)build your HTML too, replacing references to these source code files to the built asset files it generates.

What’s more, these don’t have to be plain CSS or JS files. If you want to use (say) Sass and TypeScript, you could do this and it will Just Work:

```html {hl_lines=[5,10]}
<!-- index.html -->
<html>
  <head>
    <title>A throwaway web page experiment</title>
    <link href="./styles.scss" rel="stylesheet" />
  </head>
  <body>
    <h1>Time to code!</h1>
    <div id="vue-app"></div>
    <script src="./app.ts"></script>
  </body>
</html>
```

Beyond that, Parcel brings a web server and hot reloading to the party—you give it some files, it gives you a local development URL, and that URL will auto-magically refresh as you edit code. Hot reloading has been a revolution in how I approach web design — beyond just reloading pages, seeing code or style changes applied seamlessly in the browser makes designing in the browser responsive and delightful. Hot reloading with Webpack usually requires a framework or complicated setup; in Parcel that too Just Works.

---- 

**So what's the catch?** Well, Parcel may make the JS ecosystem much simpler and easier to use, but it is still part of that ecosystem. Simple things tend to work very simply, but if you push the limits of what Parcel is good at it can require some know-how to get back on track.

For my color theming experiment I wanted to use a couple of my favorite libraries: Tailwind CSS to apply styles to a web page, and Vue to set up data-driven templates. But it turns out the current release of Tailwind, v2.0, requires PostCSS 8. Parcel 1.x doesn't work with PostCSS 8, so I needed to switch to a nightly build of Parcel 2, which isn't out yet.

Parcel 2, meanwhile, doesn't support single-file components with the current version of Vue — for those I had to upgrade to the beta of Vue 3. For my "simple" web page to hack on, I had to use pre-release, bleeding-edge versions of two JavaScript tools just to get things to work.

BTW, this is the NPM incantation to install the stack I ended up using:

```bash
npm install --save parcel@nightly vue@next \
  tailwindcss@latest postcss@latest
```

Now, I did have another option, to stick with versions of these libraries that work together, and to only use features that work with those versions. Tailwind 1.x is nice, as are non-single-file Vue views. _I'm_ the one who chose to live dangerously. 

And even with the JS dependency whack-a-mole, it was and is nice to set up a project by just writing code and having it work. It's nice because I don't feel like I wasted an hour setting up a throwaway project, and the steps to get going with some code are simple enough to keep in my head.

