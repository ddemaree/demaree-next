---
date: '2011-11-05T15:24:00.000Z'
tumblr_type: text
tumblr_url: https://ddemaree.tumblr.com/post/12371316501/on-categories-and-shit-work
aliases:
  - /post/12371316501/on-categories-and-shit-work
slug: on-categories-and-shit-work
tags: []
summary: On Categories and "Shit Work"
title: On Categories and "Shit Work"
---

As a developer I spend a lot of time thinking about names, categories, and relationships.  And as a product person, I also spend a lot of time trying to look at products from the perspective of someone who (unlike me) _isn't_ steeped in technology, or intimately familiar with every detail of the thing I'm working on.  These things are related: if you want a non-technical person to understand and engage with your product, they need to be able to relate to it in the context of their lives.  So in order to reach a non-technical audience, product designers must be able to describe their product in terms of something from everyday life.

Most of the internet — well, the product-designing, software-developing internet, anyway — has linked to Zach Holman's latest blog post about [Google+, Twitter lists, and the self-organization that Zach calls "shit work"](http://zachholman.com/posts/shit-work/).  In a nutshell: Google+ and Twitter offer you the freedom to subdivide your social circle (or, in Twitter's case, your circle of friends, major pop stars, minor famous television personalities…) into arbitrary, named groups:

> The idea behind Twitter Lists was that users would carefully cultivate lists on Twitter of different accounts they’re following (or not following). These could be divided into lists like Family, Friends, Coworkers, People I Find Mildly Attractive, People To Murder, People I Find Mildly Attractive And Want To Murder, and so on.

People do spend a lot of time thinking about their relationships to other people, and implicitly categorizing them. 

_James is definitely a friend._  
_Nah, Ben's more of an acquaintance._    
_Oh, I know John because we worked at Metromix._    
_I went to college with Justin._

So on paper, Lists and Circles should be amazingly successful.  They're simple, easy to understand, and most importantly they give _you_ — the _user_ — the ability to define your own social space, on your own terms.  You can drag James into the 'Friends' circle, or add John to an 'Ex-Coworkers' list.  You're in control.

So why is it no one uses Lists?  Why are Circles the most annoying part of Google+ for non-technical users?  I think it's because for most people, actually having to describe these intuitive relationships is tiresome, and doesn't really accomplish anything.

<!-- more -->

That's the "shit work" Holman's referring to: tiresome, repetitive work that you have to do just to make your product make sense.  After you've organized everyone you know into Circles, you still haven't shared anything or learned anything from your friends.  You still have to decide which circles you want to pay attention to, and you still have to check some privacy-settings boxes to control who can see your own stuff.  The circle-organizing process is just setup, not real work. (And if most of your posts are public, as seems to be common on Google+, it's wasted work.)

Facebook and Flickr are successful where Google+ and Twitter haven't been because their models of categorization are much more _natural_, and (mostly) automatic.  Their software does the same work Google and Twitter are asking users to do.

Natural categorization means simply that the categories map to things in the everyday world.  You don't have to create a natural category — it's already there, in nature.  "Friends" and "family" are natural categories.  A company or college is one too.  Facebook knows what "Adobe Systems" is, and it knows that I work there, and if I want to read or post something specific to my company I know where to look without having to teach the software something that (to my mind) should be obvious.

Of course, some users want more than just the natural groups.  They want to make specific lists of users, like "Close Friends" or "Local Sandwich Shops That Post Specials On Twitter". That's why a lists feature is valuable for power users.  But for most people the natural categories are more than enough, which is why it's a sensible default for Facebook.  As you may know if you saw that Facebook movie, the beauty of Facebook's model is that it tries to represent actual social networks online rather than synthesize new kinds of networks.

Nerds like me call this concept _domain modeling_. The _domain_ is the abstract space inhabited, if not embodied, by an application.  Facebook's domain is your social life, Gmail's is your email inbox, Basecamp's is a company with one or more projects.  The _domain model_ is how the domain (in all its parts and nuances) is described.  Generally, the simpler and more natural a domain model can be without sacrificing clarity, the more usable the product.

My all-time favorite domain model is iPhoto's.  It's one of two programs I use to manage my growing collection of digital photos.  The other is Adobe Lightroom, which is designed around the needs of professional users, offering a host of options for filing, tagging, categorizing, and sub-categorizing your photos.  But it doesn't offer any default model to file your photos into—you have to build your own.  That's probably great for professional photographers, for whom organization is naturally part of the work, but terrible for me.  I have a categorization system set up in Lightroom, but it's not very trustworthy or satisfying.  In fact, I'm convinced there are hundreds or thousands of photos I thought I had deleted all jumbled into my "All Photos" library.

iPhoto and (to a lesser extent) its professional-grade sibling Aperture handle this so much better because, unlike Lightroom, iPhoto does try to give your photo library some structure.  An iPhoto library is automatically organized into four kinds of categories:

* *Events*: Photos grouped together by when they were taken. Not just by dates and times, but organized into specific _events_, like "Ada's 2nd Birthday Party" or "Berlin Honeymoon Trip".
* *Places*: All the photos (or events) taken at a particular place, as determined by geocode, shown to you as pins on a map. 
* *Faces*: All the photos with a particular person in them, as determined by magical, mostly accurate face detection (or, when that fails, by manual tagging).
* *Albums*: Which are user-defined collections, for everything else.

_When._ _What._ _Where._ _Who._ Simple, natural, easy to understand, and perfectly suited to the content.  iPhoto is far, _far_ from perfect, especially if you want to keep some of your photos on another hard drive or need more powerful editing tools.  But what's great about its categorization model is that I don't have to think very hard before I can start using it.  Most of the organization I'll need when I want to find something later on is done for me automatically when I import photos, taking advantage of timestamp and geocode information from my camera. To group photos into events, iPhoto makes a few simple assumptions — all photos in an event are being imported at the same time, all were probably taken on the same day — and when it's wrong, it's very simple to fix, split, or merge events to correct them.

Apple's done a masterful job of setting expectations about the software's limitations, so when auto-categorization fails it doesn't feel like the software has failed to deliver on a promise, or that I'm stupid or lazy for not using it correctly.  Most of the time, relying on iPhoto's default, natural categorization is good enough, no "shit work" required.

After Zach's blog post made the rounds, [my friend Dave Chartier posted a long, negative response on his blog](http://windonaleaf.net/post/12298687022/shit-work-and-technocentrism), mostly defending Twitter lists and rebuking the suggestion that just  because one developer doesn't like them they don't have any value.  Zach's post was reductive, but I agree with his core idea which is that over the long term, self-categorization feels more productive than it is.  At least in the context of our everyday lives, it _is_ shit work.  It's flipping switches and moving bits around between buckets, the result of which is a model of the world that inevitably will get stale, and require more switch-flipping and bucket-sorting to be viable again.  Our brains are more than capable of filtering streams of information into different contexts.  They're also easily confused, but dealing with that confusion seems to demand _simpler_ models, _fewer_ buckets, not more complexity.

One of my favorite paintings is the (ridiculously) famous Magritte one showing a picture of a pipe, with the phrase _C'eci n'est pas une pipe_ — "this is not a pipe." That's right, it's not a pipe, it's a representation of a pipe.  A Twitter list or Google+ circle is not a group of your friends, just as in iPhoto event isn't an actual event, and a bank account in Mint isn't the same thing as your real bank account.  These are all representations, all abstractions.  Software is most successful when it successfully represents things in the real world, and in the real world categorization isn't a setup task. It just happens.