---
date: '2011-05-13T15:00:05.000Z'
tumblr_type: text
tumblr_url: https://ddemaree.tumblr.com/post/5450945824/programming-style-guides
aliases:
  - /post/5450945824/programming-style-guides
slug: programming-style-guides
tags: []
summary: Programming style guides
title: Programming style guides
---

On [this week's Build & Analyze](http://5by5.tv/buildanalyze/24) Marco Arment talks about good and bad programming languages, and building on that, how a good, consistent coding style helps programmers write good, consistent, maintainable code.

This is very true, and Marco is absolutely right that PHP is a decent-ish language that's mostly suffered from lots of people abusing the hell out of it. The Java-influenced coding style he talks about is nasty whether the language is "crufty" like PHP or Perl, or "beautiful" like Ruby or Python. One day a bad programmer will find a way to write horrible code in CoffeeScript — the programming community's current beautiful-code poster child — and hopefully then it'll click for at least one person that _languages_ don't make beautiful code, _good coders do_.

I just wish Marco would codify and publish (or at the very least blog about) his personal style guide for PHP & Objective-C, which he describes as "K&R C" — i.e., proper ANSI C style as presented in Brian Kernighan and Dennis Ritchie's [_The C Programming Language_](http://en.wikipedia.org/wiki/The_C_Programming_Language), literally _the_ book on arguably _the_ programming language — "applied to modern languages". Marco has said he has little interest in writing about code — at least, way less interest than he has in writing about [coffee](http://www.marco.org/2010/06/16/the-coffee-setup-2010-i-own-a-lot-of-ways-to) or [headphones](http://www.marco.org/2010/11/30/not-being-that-guy-whose-music-you-hear-on-the-subway) — but in this area I think he could help a lot of people and help stop the next "PHP is crap" argument before it starts.

For programming in Ruby, I was recently introduced to [this style guide by Christian Neukirchen, who wrote Rack](https://github.com/chneukirchen/styleguide/blob/master/RUBY-STYLE) and like it quite a bit. It's clear, concise, and all of its rules are simple and practical.

One of these days I want to get around to codifying some style rules for writing good tests, particularly in RSpec. It's an area where different programmers can have very different styles, and while those differences aren't quite as problematic as the underlying coding style — naming an important variable `theVar` is much worse than disagreeing whether an example should say "it should do" or "it does"  — they can still be frustrating and lead to inconsistent, hard-to-maintain test suites. (I favor "should".)