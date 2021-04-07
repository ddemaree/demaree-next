---
date: '2012-08-03T17:36:00.000Z'
tumblr_type: link
tumblr_url: >-
  https://ddemaree.tumblr.com/post/28637678500/steve-klabnik-on-ruby-testing-with-factories
aliases:
  - /post/28637678500/steve-klabnik-on-ruby-testing-with-factories
link_url: http://blog.steveklabnik.com/posts/2012-07-14-why-i-don-t-like-factory_girl
slug: steve-klabnik-on-ruby-testing-with-factories
tags: []
summary: Steve Klabnik on Ruby testing with factories
title: Steve Klabnik on Ruby testing with factories
publisher: blog.steveklabnik.com
---

Steve Klabnik writes about how the popular pattern of using object factories (via a library such as FactoryGirl or Fabrication) to build and save objects in tests has, in his opinion, set Ruby testing practices back two years or more.

I wholeheartedly agree with Steve that there's a problem, but I'm not sure if it's more correct to lay the blame on FactoryGirl, for making it so damned easy to construct whole graphs of co-dependent objects, or on ActiveRecord, for making it easy to make all your object co-dependent on each other, or on _us_, for letting all that ease of use guide us into making poor design decisions. On that basis, it's easy to see factories as just an elegant way of managing a really stupid approach to data modeling. (Which isn't to say I haven't made all of these mistakes, or that I don't continue to make them all the time, because Rails just makes it _so damned easy_.)

Anyway, I really liked this paragraph in Steve's post (emphasis mine):

> A big feature of tests is to give you feedback on your code. Tests and code have a symbiotic relationship. Your tests inform your code. If a test is complicated, your code is complicated. Ultimately, because *tests are a client of your code*, you can see how easy or hard your code's interfaces are.

_Yes._ This is why I, as a non-computer science person, like TDD: it forces one to look at and actually _use_ one's own code. It's a lot harder to design shitty interfaces if you also have to use them.