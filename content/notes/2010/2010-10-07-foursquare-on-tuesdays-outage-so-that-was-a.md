---
date: '2010-10-08T02:52:05.000Z'
tumblr_type: link
tumblr_url: >-
  https://ddemaree.tumblr.com/post/1269638185/foursquare-on-tuesdays-outage-so-that-was-a
aliases:
  - /post/1269638185/foursquare-on-tuesdays-outage-so-that-was-a
link_url: http://blog.foursquare.com/2010/10/05/so-that-was-a-bummer/
slug: foursquare-on-tuesdays-outage-so-that-was-a
tags: []
summary: 'Foursquare on Tuesday''s Outage: "So, That Was A Bummer…'
title: 'Foursquare on Tuesday''s Outage: "So, That Was A Bummer…'
publisher: blog.foursquare.com
---

In a nutshell, they'd tried to shard their database by user ID on the assumption that both halves of their database would grow at a similar rate, i.e., that each shard had a similar mix of light and heavy users. But as it turned out, "shard 0"'s users were way, way more active and that server's dataset grew too large, too fast.

And yes: Foursquare's primary databases are powered by MongoDB. But while Mongo's memory-mapped storage model added some kinks, and probably some hours, to the process of getting the site back online, it sounds like there was no data loss and both Foursquare and 10gen have learned a lot from the incident. 10gen CTO Eliot Horowitz posted [a detailed post-mortem of the Foursquare outage](http://groups.google.com/group/mongodb-user/browse_thread/thread/528a94f287e9d77e) to the Mongo mailing list explaining the whole disaster.