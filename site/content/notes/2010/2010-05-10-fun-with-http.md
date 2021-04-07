---
date: "2010-05-10T16:08:55.000Z"
tumblr_type: text
tumblr_url: https://ddemaree.tumblr.com/post/587101254/fun-with-http
aliases:
  - /post/587101254/fun-with-http
slug: fun-with-http
tags:
  - Web Development
title: Fun with HTTP
---

Following a series of events I won't recap here, this morning I launched Echofon for Mac to discover my password had been cleared out and instead of tweets Twitter was sending back a 401 Unauthorized response code.

I clicked on the error message, expecting Echofon to give me some way of fixing it, but instead was taken to the [HTTP Response Codes and Errors][twerrors] page of Twitter's developer documentation. On that page I learned that rate limit errors are handled with the following code:

> **420 Enhance Your Calm:** Returned by the Search and Trends API when you are being rate limited.

The 420 error, as far as I know, is not part of the official HTTP spec, though error [418 I'm A Teapot][teapot] is. And this isn't the only case of a software company coloring outside the lines of HTTP: Apple uses the 402 Payment Required code (defined in the spec as "reserved for future use") to indicate when a MobileMe account is past due, while Microsoft added its own 450 Blocked by Windows Parental Controls status, I guess because none of the 6 or 7 existing error codes concerning controlling access to resources were specific enough.

[twerrors]: http://apiwiki.twitter.com/HTTP-Response-Codes-and-Errors
[teapot]: http://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_Error
