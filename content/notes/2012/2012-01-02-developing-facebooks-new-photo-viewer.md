---
date: '2012-01-02T18:01:10.000Z'
tumblr_type: link
tumblr_url: >-
  https://ddemaree.tumblr.com/post/15190407980/developing-facebooks-new-photo-viewer
aliases:
  - /post/15190407980/developing-facebooks-new-photo-viewer
link_url: >-
  http://www.facebook.com/notes/facebook-engineering/developing-facebooks-new-photo-viewer/499447633919
slug: developing-facebooks-new-photo-viewer
tags: []
summary: Developing Facebook's New Photo Viewer
title: Developing Facebook's New Photo Viewer
publisher: facebook.com
---

Yesterday I spent a few hours building an elaborate web photo gallery for our wedding photos before my wife and I realized we're more interested in seeing everyone's likes and comments than in building yet another elaborate web thing for our wedding. (That's to say we _do_ value building nice web things, we just value getting Facebook love from our friends more.)

The photo gallery I made is modeled after Facebook's newest lightbox UI for browsing and viewing photos, which has some nice details that I love, such as pushState support so browsing between photos doesn't break your browser's back button. But the best one is how they handle scrolling: you can scroll the contents of a photo lightbox (which can include comments, likes, and other metadata that can make the viewer taller than your browser window) while preserving your scroll position on the photo grid underneath.

I was afraid I wouldn't be able to figure out whatever strange web magic they used to create this effect. But it turns out Facebook's own frontend dev team posted a detailed explanation of how it all works, and it's beautifully simple. In fact, almost all the important layout and scrolling magic is handled with just CSS. Really cool.