---
date: '2013-02-12T04:44:18.000Z'
tumblr_type: text
tumblr_url: >-
  https://ddemaree.tumblr.com/post/42903220754/the-coming-reader-pocalypse-and-what-we-can-do
aliases:
  - /post/42903220754/the-coming-reader-pocalypse-and-what-we-can-do
slug: the-coming-reader-pocalypse-and-what-we-can-do
tags: []
summary: The Coming Reader-pocalypse, and What We Can Do About It
title: The Coming Reader-pocalypse, and What We Can Do About It
---

<p>Apparently <a href="http://techcrunch.com/2013/02/11/the-googlereaderpocalypse-is-upon-us-googles-feed-reading-service-unusable-since-sunday/">Google Reader is having some issues</a>? I managed not to notice this weekend, but it’s not that surprising. As <a href="http://inessential.com/2013/02/11/rss_sync_apocalypse_preview">Brent Simmons reminds us</a>, Reader’s API is undocumented and unsupported, and the new, more focused Google doesn’t seem as into keeping interesting but inessential services going. Overall this is a good thing, it just means we can’t count on apps like <a href="http://reederapp.com/">Reeder</a> to work forever.</p>

<p><em>Unless.</em></p>

<!-- more -->

<p>The latest version of Reeder for iPhone added support for syncing with Shaun Inman’s Fever, a self-hosted RSS reader that’s been around but hasn’t been substantively updated in a while. Like Reader, Fever has a syncing API. Also like Reader, Fever’s API is semi-undocumented and not the most robust thing in the world. But you host it yourself on your own web server, so even if Inman never updates it again, even if Reader is “sunsetted”, you’ll still be able to sync your feeds and articles so long as you have a webserver.</p>

<p>I’m trying to get out of the habit of keeping a full PHP-MySQL server running, but the great thing about APIs is that if you can teach another piece of software how to speak them, they can live on forever.</p>

<p>Therefore, I want to see three things happen:</p>

<ul><li><p>We, the community, should document the “undocumented” Reader and/or Fever APIs somewhere, so that they’ll live on even if Google or Shaun Inman pull the plug. Ideally these docs would go beyond just a list of URIs, payloads, and responses to include practical examples of how common syncing tasks are performed. These undocumented vendor APIs have become <em>de facto</em> standard protocols for syncing RSS feed data between devices; we should take steps to make them less <em>de facto</em> and more real.</p></li>
<li><p>Someone (and by “someone” I really mean “I, if I had more time”) should write a server-side RSS fetcher and reader in a modern web platform, e.g. Node or Sinatra or Rails, and make the code available as open source. This app could run anywhere, but in particular should be runnable on Heroku’s free plan. It would implement the Reader or Fever syncing protocols (as described above), along with some reasonable security or authentication protocol(s) like OAuth2. A native app client should be able to set up syncing with your personal “Feeder” install given just a URL.</p></li>
<li><p>Finally, even though Fever API support would make it possible for clients such as Reeder for iPhone to connect to this syncing app <em>today</em>, in the future I’d like to see these protocols become enough of a standard that new feed-reading apps support them out of the box, perhaps even by default.</p></li>
</ul><p>I want to say: I have no problem with commercial services. (<a href="https://typekit.com">I work for one, after all.</a>) And I’d have no problem if someone wanted to offer fully hosted Feeder accounts, or some new RSS syncing service that implemented this proposed Feeder API/protocol. Having this be a documented standard with at least one open source implementation means that the entire feed reading ecosystem would not be dependent on a single service with an unstable, unsupported API. Self-hosted and vendor-hosted sync services could coexist in relative harmony, and if some startup wanted to go above and beyond the functionality included in the spec, well, that’s how innovation works.</p>

<p>For now, I really want to see the first couple of things happen. I can’t do all of it myself, but I’ll gladly set up a GitHub project and help out where I can.</p>

<p>If you’re interested in helping this project in any way, including moral support but also code, design, or other practical help, please email david at demaree dot me.</p>

<p>Let’s do this thing.</p>