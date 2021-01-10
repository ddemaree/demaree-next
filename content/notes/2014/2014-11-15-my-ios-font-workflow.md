---
date: '2014-11-15T21:23:14.000Z'
tumblr_type: text
tumblr_url: https://ddemaree.tumblr.com/post/102721217904/my-ios-font-workflow
aliases:
  - /post/102721217904/my-ios-font-workflow
slug: my-ios-font-workflow
tags: []
summary: My iOS font workflow
title: My iOS font workflow
---

Something a lot of people don't know about iOS is that, since the release of iOS 7 last year, [it's finally possible to install third-party fonts](http://www.macstories.net/news/installing-custom-fonts-on-ios/) and use them in apps.

The catch is that fonts can only be installed via a configuration profile, a janky bit of XML designed to allow companies to load settings onto their employees' devices, like VPN credentials or secret Wi-Fi settings. But no matter how janky it is, installing fonts onto an iPhone is one of those things that seems miraculous that it's possible at all. 

My most common font need is probably exactly what whoever designed this feature had in mind: Adobe has a custom typeface, Adobe Clean, that we use for all in-house communications, and I need it installed in order to make Keynote presentations or other documents. Loading Adobe Clean is on my checklist of things to do when setting up a fresh iOS install, right after downloading Dropbox and 1Password.

At this point, I've had to install enough fonts onto enough new (or restored) iOS devices to have developed a decent workflow around it:

I'm not an enterprise, so I use [an app called AnyFont](http://www.macrumors.com/2014/03/31/anyfont-install-custom-fonts/) to automate making and installing profiles from OpenType font files.

AnyFont sets itself as an *Open In…* handler for most font formats, such as TTF, OTF, and even collection file types like OTC. It also handles zip files: if you pass it an archive file that contains one or more fonts, it'll automatically extract the fonts, copy them into itself, and discard everything else. This is handy because doing *Open In…* on each font in a family is really annoying.

I have a Dropbox folder full of zip files each containing a typeface I want to install on my iOS devices. Some of these I've edited down to just the basic four styles: regular, italic, bold, and bold italic. Others, like Adobe Clean, are expansive families consisting of over a dozen fonts. Then there are humongous super-families like [Input](http://input.fontbureau.com), that not only have multiple weights, but also come in a variety of widths (narrow, condensed, extended) or styles (serif, sans, mono). These I like to split up into multiple, smaller zip packages, not all of which I'll install. But I'll often make a zip of any new fonts I acquire in case I should want to install them.

From the Dropbox app, I can open my font zip files in AnyFont. Once that's done, I select all the fonts from a family, click *Install*, and follow the steps to install them as a device profile. I'll do this for every font family I use a lot, on every device I have.

### A word about licensing

Depending on the foundry/vendor and the license you bought, you may be able to install fonts on all of your devices for your own use, or you may need to buy a license for every computer, phone, or tablet where the font is to be used. For purposes of font licensing, unless the foundry says otherwise, a phone should be considered the same thing as a laptop.

One example of a foundry that does otherwise: [Hoefler & Co](http://typography.com) not only allow unlimited installs onto iOS devices, you can even install any purchased H&Co fonts onto your device directly from their website.

Another example: the font vendor MyFonts (part of the Monotype family of type businesses) [also offers direct iOS installs.](http://meta.myfonts.com/post/80802984786/install-fonts-from-myfonts-on-ios-7-devices) It's implied you can use their fonts on unlimited mobile devices within the same license you already bought, but when in doubt, check the license agreement you accepted when you bought the fonts.

Some foundries offer "mobile app licenses"; these refer to publishing a font in an app you're making, a process known as *embedding* the fonts. Embedding fonts is not the same thing as using them. Embedding allows app makers to make fonts available for *their* users, whereas normal licenses cover you making a font available for yourself.