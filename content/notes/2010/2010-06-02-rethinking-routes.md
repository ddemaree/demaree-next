---
date: "2010-06-02T19:52:00.000Z"
tumblr_type: link
tumblr_url: https://ddemaree.tumblr.com/post/657471104/rethinking-routes
aliases:
  - /post/657471104/rethinking-routes
link_url: http://blog.peepcode.com/tutorials/2010/rethinking-rails-3-routes
slug: rethinking-routes
tags:
  - Ruby on Rails
  - Web Development
summary: Rethinking Routes
title: Rethinking Routes
publisher: blog.peepcode.com
---

Geoffrey Grosenbach is wondering how to bring the URL back into Rails:

> This epiphany came while writing a few Sinatra applications. The exact URL for a handler sits right in front of my eyes as I write the code for it. I can’t ignore it. &hellip; In contrast, you can write an entire Rails application without ever looking at a URL. The design of URLs is delegated to the framework, out of sight and out of mind.

I don't know if I agree with his proposed solutions, but Geoffrey's right that the Rails routes file is in desperate need of some fresh thinking.

Rails core committer Carl Lerche's started experimenting with an interesting approach—combining Sinatra-style URL handlers with Rails-style controllers—in his [astaire](http://github.com/carllerche/astaire) plugin for Rails 3.

_Update:_ Oh snap it's on. [DHH responds to Geoffrey's post on Hacker News](http://news.ycombinator.com/item?id=1398903):

> What an awesome way to advocate for code change. Very pretty. Unfortunately, I also think it's faulty. First, it doesn't actually advocate anything concrete. There's some hand-waving to Sinatra and other Rails features, but nothing concrete. If you're going to make such a pretty proposal, it should come with a call to specific action that people can get behind.

There is no strawman more annoying than criticising an argument while praising the presentation. Sure, there isn't a lot of meat in Grosenbach's post but that doesn't mean he isn't onto something. The point of the post was that routes are a painful, excessive abstraction that URLs are too important to be hidden behind. That DHH doesn't see it that way tells you a lot about why Rails is the way it is.
