---
date: '2012-02-26T16:11:00.000Z'
tumblr_type: text
tumblr_url: https://ddemaree.tumblr.com/post/18318250240/how-i-work-part-1-ruby
aliases:
  - /post/18318250240/how-i-work-part-1-ruby
slug: how-i-work-part-1-ruby
tags: []
summary: 'How I Work, Part 1: Ruby'
title: 'How I Work, Part 1: Ruby'
---

Since the first of the year I've been trying to write one of that sort of post where the blogger describes the tools they use. Obviously, I haven't succeeded yet.  And what's more, it's taken me until now to precisely identify why it's been so hard. 

It's not that I find these "setup" posts to be a form of pornography. They are, and I do, but in this scenario I would be the porn star, which (when you look at it that way) doesn't seem that bad. And it's not that my setup isn't interesting. It's not _that_ mind-blowing or innovative, honestly, but over the years I've learned a lot about what I need to do my job and that knowledge feels worth sharing.

What I've concluded, rather, is that in trying to talk about my tools in a single post, I was going about it totally the wrong way. Tools and best practices are things I care deeply about, and trying to cram everything into a single, 5,000-word monster post would be exhausting for me to write, at least as tiresome for you to read, and would still do no justice to the subject.

So I've decided to write about my tools in a series of posts, starting with this one about my Ruby environment on OS X. Future posts in this series will cover other aspects of my day-to-day workflow, such as how I use Git, how I've configured Apache and Pow to work together as a team, and a whole post on what text editor I use.

For now, let's talk about Ruby. In addition to describing my personal Ruby setup, I'll also explain how to get it up and running on a new Mac. This is as good at time as any to mention that I use _only_ Apple computers running the latest public/stable release of OS X (currently "Lion", version 10.7.3). A future post in this series may explain a bit about my hardware choices, or how I've configured my Mac system for maximum awesomeness, but to be clear: while what follows is largely in tutorial format, the information here is only intended to be relevant on OS X.

<!-- more -->

### A brief word about the system Ruby

As you may or may not know, every copy of the operating system formerly known as Mac OS X comes with Ruby preinstalled. This bundled copy of Ruby is usually referred to as "the system Ruby", and it comes installed at `/usr/bin/ruby`. Open up a Terminal window and see for yourself:

	$ /usr/bin/ruby -v
	ruby 1.8.7 (2010-01-10 patchlevel 249) [universal-darwin11.0]

The system Ruby is perfectly usable, but I almost _never_ use it. One big reason why is there in that version string – Lion, the latest OS X, comes with a _two year old_ copy of Ruby 1.8.7. As if its age weren't enough reason not to use it, I also know from experience that that particular build, patchlevel 249, has some annoying crashing bugs with some vitally important gems, including the `mysql` gem. The system Ruby is fine for casual scripting, but I wouldn't want to rely on it for serious development.

Fortunately, it's easy to install your own newer, better Ruby. In fact, most Ruby programmers today use tools such as RVM or rbenv that let them install multiple copies of Ruby on the same computer, and switch between them per project or on the fly.

Next I'm going to walk you through the process of installing my Ruby version manager of choice, rbenv, as well as some vital related tools. From here onward, this tutorial assumes you're using a modern, Intel-powered Mac running OS X Lion (10.7.x).

### Installing a compiler

By default OS X does not come with standard Unix developer tools already installed – you have to install them yourself. Until recently the only way to do that was to install Xcode, Apple's massive IDE (integrated development environment) for building Mac and iOS apps, which just happened to also include a compiler and other build tools for Unix programs.  But with the (very) recent release of Xcode 4.3, Apple has very wisely de-coupled the command-line build tools from the rest of Xcode. On [Apple's developer downloads page](https://developer.apple.com/downloads) (Apple ID required) there's now a 171 MB "Command Line Tools for Xcode" package that comes with a compiler and other stuff you need to build Unix software (such as Ruby) on your Mac.

This is great, and I'm happy Apple has made this package available on its own. Unfortunately, only Ruby 1.9.3-p125 — the very newest version of the mainstream MRI Ruby, released earlier this month — can be built using it. Apple's `llvm-gcc` compiler is _supposed_ to work with most Unix software, and is (as of Lion) the only way to build Mac or iOS apps. [According to Sam Stephenson](https://twitter.com/sstephenson/statuses/173858951392280576), Rubies older than 1.9.3-p125 either fail to compile, or will compile but not run properly, under `llvm-gcc`. 

The Apple developer tools package is still valuable for building software requiring access to particular Apple header files, but to build Ruby you'll need to install [this open-source OS X GCC package](https://github.com/kennethreitz/osx-gcc-installer/downloads) maintained by Kenneth Reitz. It contains a similar set of build tools, but uses an older, non-LLVM compiler that can build Ruby successfully. Lion users should download the file on that page labeled _10.7v2.dmg_, open the disk image when it finishes loading, and install the package.

### Homebrew

Once that's finished, the next thing you need is [Homebrew](http://mxcl.github.com/homebrew).  Homebrew is a _package manager_, that is, a program that takes care of installing, updating, and uninstalling other programs. Think of it as a really ugly, nerdy version of the App Store, except all the software is free, and there is (as yet) no Homebrew version of Angry Birds. Just about anything you'll need to work on web software — webservers, databases, ImageMagick, ack — can be installed using Homebrew.

Open up a Terminal window and type (or paste) the following command to download and install Homebrew:

	/usr/bin/ruby -e "$(curl -fsSL https://raw.github.com/gist/323731)"

The Homebrew installer script will ask you for your administrator password exactly once, to make your `/usr/local` directory writeable without the use of `sudo`. (Homebrew's [Installation page](https://github.com/mxcl/homebrew/wiki/installation) explains why this is a good idea.)

### ruby-build and rbenv

With all that, it's now time to install Ruby. _But which Ruby?_ There are _five_ major Ruby interpreters (plus a couple of minor ones), each one available in perhaps a dozen versions or patch levels. Some of those are still in beta, some are experimental, some are obsolete. 

I'll come back to this topic in a minute, but for now let's say the answer to the question of "which Ruby" is: _all of them!_. Or some of them, or just two — more than one, at any rate. The next thing to install is a _virtual environment manager_, a tool that manages and switches between multiple Ruby interpreters.

At the time of writing (February 2012), there are two Ruby environment managers worth considering, the frustratingly-similarly-named [RVM](http://rvm.beginrescueend.com) and [rbenv](http://github.com/sstephenson/rbenv).  (The frustration comes when you pronounce the names out loud, especially several times in a row in an engineering meeting. I hope you like tongue twisters.)

RVM has been around longer and has more features. It also can be slower, and its code is more complex. rbenv is smaller, faster, and simpler, but (at least by default) it does less. For example, unlike RVM a stock copy of rbenv can't install Rubies, only switch between them. But rbenv makes up for its smaller feature set through extensibility. It has a rich and growing ecosystem of plugins, making it easy to choose just the features you want. Though RVM is also an excellent tool, I prefer rbenv for its speed and simplicity.

To build Rubies for rbenv to manage, we'll install [ruby-build](http://github.com/sstephenson/ruby-build), which comes with a rbenv plugin so the two tools work better together.

The simplest way to install rbenv and ruby-build is using Homebrew:

	brew install rbenv
	brew install ruby-build
	
You can make sure it's working, and see a list of all the _dozens_ of available Rubies, by running the `rbenv install` command:

	› rbenv install
	usage: rbenv install VERSION
	       rbenv install /path/to/definition

	Available versions:
  	1.8.6-p383
  	1.8.6-p420
  	1.8.7-p249
  	1.8.7-p302
  	1.8.7-p334
  	1.8.7-p352
  	1.8.7-p357
  	...

### So many Rubies

"_Whoa!_", you may be thinking. "_That's a lot of Rubies!_" And it is.

As I mentioned, there are five major Ruby interpreters, also called _virtual machines_, which are different variants or versions of the Ruby program itself:

* **Ruby 1.8.x**, aka **MRI**, which stands for "Matz's Ruby interpreter." This is the latest (also final) version of the original Ruby developed by Yukihiro Matsumoto ("Matz"). This is probably the most widely distributed Ruby, which isn't to say it's the best one. For one thing, it's relatively slow and memory-hungry compared to other Rubies.
* **Ruby 1.9.x**, which is (confusingly) also called **MRI** to denote it as the current "official" Ruby. It's also sometimes called **YARV** ("Yet another Ruby virtualmachine") Ruby 1.9 is faster, has some nice new syntax changes (especially for multi-threaded programs), and handles Unicode text much better.
* **Ruby Enterprise Edition**, aka **REE**, is a fork of Ruby 1.8.7 developed and maintained by the developers at [Phusion](http://phusion.nl/), who also make the popular Passenger application server for Ruby apps. REE offers some performance fixes and improvements over MRI Ruby 1.8, particularly around memory usage and garbage collection. REE also seems to get security fixes more often. Most Ruby developers who still work with Ruby 1.8 code tend to use REE over the original. (Despite the "enterprisey" name, REE is free and open source, just like original Ruby.)
* **JRuby** is basically "Java Ruby" — it's Ruby 1.9 ported to/running on the Java Virtual Machine (JVM). In addition to being able to run in Java servlet containers and being deployable with Java tools, JRuby apps can also make use of Java code, which makes it an awesome way for developers to start using Ruby in organizations (like big enterprises) that otherwise only use Java.
* Finally, there's **Rubinius** (aka RBX), which is less major than the other three — it seems to be more of interest to serious Ruby hackers. The elevator pitch is that it's "Ruby written in Ruby" — its core interpreter/VM is very minimal, and many standard classes/types (like Arrays) are implemented in Ruby itself rather than in native C code.

And in addition to those, there's **MagLev** (a Ruby based on VMWare's GemStone technology), **IronRuby** (a Ruby ported to Microsoft's .NET runtime), and **MacRuby**(a Ruby ported to Apple's Objective-C runtime). Lastly, just in time for your head to explode, **Ruby 2.0** is now in development, though I _think_ the plan is for it to be a successor to Ruby 1.9 rather than its own, separate thing.

All of that to say this: the Ruby ecosystem is really complicated, and we haven't even gotten into gems or Rails yet.

#### The two Rubies I use

To keep things simple, I maintain just two Ruby stacks:

For Typekit work and a couple of older personal apps, I use **REE**. Virtually all of Typekit's Ruby applications are still based on Ruby 1.8, so this is probably the Ruby I use most. We generally aim for our development setups to match production wherever possible, so this remains locked to a REE build from last year until we can upgrade the production servers to a newer one.

For all other personal projects, I use **Ruby 1.9.3**. At the moment I'm on the 1.9.3-p0 build; since it's just my laptop's dev environment I have no pressing need to upgrade. In addition to a nice speed boost, because most of these apps are hosted on Heroku's Cedar stack (which is based on Ruby 1.9) I can feel free to take advantage of new stuff, like cleaner Hash syntax and Fibers.

Of these Ruby 1.9.3 is the default, overriding the system Ruby. I use rbenv's project-level `.rbenv-version` file to specify a particular Ruby for projects that need it; in practice this is used to distinguish Typekit projects (on REE) from everything else.

### The rest of it

Individual projects' gems and dependencies are managed with [Bundler](http://gembundler.com/). I use Bundler 1.1 rc7 in my Ruby 1.9 stack, the more stable 1.0.x version in my REE/Typekit stack. Bundler is great for specifying dependencies for big, long-running projects, but I tend to also use it even for little sites or experiments. Since I started using Bundler I've stopped keeping track of what gems I have installed. Instead I just make a list of the gems and versions I need in my Gemfile, and Bundler will make sure they're installed. Very easy.

In [my dotfiles](http://github.com/ddemaree/dotfiles) I keep a `~/.irbrc` file to configure IRB (the Ruby REPL/console tool). Mine is mostly standard (that is, ripped off from [Ryan Tomayko](http://github.com/rtomayko/dotfiles) or [Zach Holman](http://github.com/holman/dotfiles)). One thing I've added: my IRB automatically looks for and loads project-level `.irbrc` files if they're present, so individual projects can define their own special console helpers.

Without getting into a whole post's worth of detail about Ruby testing, I can tell you my preferred testing tool is [RSpec](http://rspec.info/). I don't mind regular old Test::Unit; I just like RSpec more, partly for its prettier syntax but mostly for its more powerful feature set. For example, RSpec lets you refer to individual tests within a file by their line number, which is much easier to type than passing the test name as an argument to a Test::Unit script.

To run my web apps locally I use yet another Sam Stephenson project, [Pow](http://pow.cx), an application server written in Node.js that provides a handy local DNS server that automagically routes any request for `projectname.dev` to `~/.pow/projectname`, which is a symlink to wherever `projectname` ordinarily lives on disk. Before switching to Pow I used Apache and Phusion Passenger to do more or less the same thing, but Pow's zero-configuration design makes it _much_ easier to get new projects up and running.

Pow's not without problems, however. In the next post in this series, I'll explain my local webserver setup, and how I've tamed Apache and Pow so I can work with PHP and Ruby apps side by side.

### Updates

*Feb 25 1:58pm CST:* [Sam Stephenson let me know on Twitter](https://twitter.com/sstephenson/statuses/173858756982095873) that ruby-build's non-support for Apple's Command Line Tools package is a Ruby limitation, not specific to ruby-build. I've updated the section about compilers to mention that, and remove references to it being a ruby-build limitation. (And it's worth noting that [ruby-build will let you use Apple's llvm-gcc when building Ruby 1.9.3-p125, which supports it](https://github.com/sstephenson/ruby-build/commit/45d4277b1c2733aae2b8f097317f1b6b48a89923).)