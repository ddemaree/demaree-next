---
date: '2010-10-31T16:00:56.000Z'
tumblr_type: text
tumblr_url: >-
  https://ddemaree.tumblr.com/post/1447004995/in-which-i-cut-my-hosting-costs-by-89-by
aliases:
  - /post/1447004995/in-which-i-cut-my-hosting-costs-by-89-by
slug: in-which-i-cut-my-hosting-costs-by-89-by
tags: []
summary: In Which I Cut My Hosting Costs by 89% By Switching to Heroku
title: In Which I Cut My Hosting Costs by 89% By Switching to Heroku
---

This morning/afternoon, I needed to make a long, long, _long_ overdue change to my dear friend [Lucy Knisley's web site](http://lucyknisley.com/). It was a simple change, literally just adding two images to a static HTML file.

But I'm me, and that's not heroic enough.

Lucy's site is powered by a Rails app that I wrote while waiting for a friend at the train station in 2006, which makes it (easily) the oldest standing Rails app I'm still responsible for maintaining. The app hasn't changed much functionally; usually when I'm in the code I'm either making some minor text or design changes, or upgrading something to keep it up to date. The last time I touched it, a year ago, was to update it to Rails 2.3.

Before yesterday the app was on what a year ago I'd have called the simplest, cheapest, easiest Ruby stack imaginable: a $40 Slicehost node running [Phusion Passenger](http://phusion.nl), with the source code living on GitHub and some Capistrano build scripts tying everything together. But things have changed since then. Ruby apps have become even easier to host than they were before, and I've learned a lot at work about the value of keeping apps simple and current so that I never have to say no when the client (or friend) calls asking for a change to their site.

So here's what I _actually_ did:

* Updated the app to use Bundler, and wrote a Gemfile to cover its dependencies. I also bumped the Rails version to 2.3.10. (Moving it forward to Rails 3 is on the books for the coming month.)

* Once that was working, I installed RSpec (no, I hadn't been testing this app before) and quickly wrote some specs covering all my image handling code, from the upload request cycle to some helpers for rendering the actual `img` tags. (Ends up I'd had the foresight to abstract a lot of the presentation logic for images into helpers, which came in handy in the next step.)

* Using my new specs as a guide, then I switched from AttachmentFu to Paperclip for all my image handling. AttachmentFu is fine, but all my other projects use Paperclip, and I like keeping things consistent.

* Next I uploaded all of Lucy's images to Amazon S3 and switched Paperclip over to use that in production instead of the hard drive.

* Finally, having no further need for a writeable filesystem, set up a free Heroku account for the site and pushed the code and data to its new production environment.

* After confirming the Heroku-ified version of the site worked well, updated the DNS to make the switch official and permanent.

All of this took maybe three hours, during which I was also doing some work on an iPhone app.

The first obvious benefit is cost savings. At Slicehost (the site's now-former host) we were spending about $40/month, mostly on the bandwidth used for serving up lots of image files. The site's database is (amazingly) smaller than 1 MB, and the Rails app runs well even on a single low-memory instance, provided it doesn't have to share resources with anything else (like MySQL). These very light resource needs qualify us for Heroku's free plan (a single 300 MB instance and a 5 MB database). As for bandwidth, Heroku enforces a 2TB/month soft cap and as far as I know don't charge anything for network transfer in or out. And because Heroku's servers are also hosted on Amazon's cloud, data transfer into S3 from my app is free of charge.

As a result of all of that, the base monthly cost to host the site has gone from $40.00 to $4.44.

While that by itself was a great reason to make the switch, the site is also noticeably faster (thanks to Heroku's super-fast web-serving architecture), is much easier to deploy via Git, and now has all the benefits of living on Amazon's cloud, like access to services such as MongoHQ.

The moral of this story isn't _just_ that Heroku is awesome and cheap. It's that being able to make a switchover like this, and save all that money, is what you get for keeping your apps up to date. If I hadn't moved Lucy's site to Rails 2.3 and Passenger last year, migrating to Heroku would have been harder and I wouldn't have had time to do it. Making the move to Rails 2.3 last year, and to Heroku this year, wasn't part of a planned upgrade path. I just like my code neat and tidy, and took the initiative to keep it so. 

Moving your app from Rails 2.1 to 2.3, or from 2.3 to 3.0, may seem like stupid busywork. I say just grit your teeth and do it. Not for the features you get today, but so that tomorrow, when your client or friend calls needing a simple change and you only have a few minutes, you don't have to say no. 