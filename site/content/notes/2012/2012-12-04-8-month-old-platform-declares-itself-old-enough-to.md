---
date: "2012-12-04T14:41:10.000Z"
tumblr_type: link
tumblr_url: >-
  https://ddemaree.tumblr.com/post/37187701590/8-month-old-platform-declares-itself-old-enough-to
aliases:
  - /post/37187701590/8-month-old-platform-declares-itself-old-enough-to
link_url: >-
  http://blog.rubymotion.com/post/37183308463/announcing-inspect-2013-the-rubymotion-conference
slug: 8-month-old-platform-declares-itself-old-enough-to
tags:
  - Ruby
  - iOS
summary: 8-Month-Old Platform Declares Itself Old Enough To Have A Conference
title: 8-Month-Old Platform Declares Itself Old Enough To Have A Conference
publisher: blog.rubymotion.com
private: true
---

<p><a class="tumblr_blog" href="http://blog.rubymotion.com/post/37183308463/announcing-inspect-2013-the-rubymotion-conference">rubymotion</a>:</p>&#13;
<blockquote>&#13;
<p>We are super excited to announce the first official <a href="http://www.rubymotion.com/conference">RubyMotion conference</a> to be held in Brussels, Belgium on the 28th and 29th March, 2013.</p>&#13;
<p>Two days. Single track. 100% RubyMotion. A limited number of <a href="http://myupcoming.com/en/event/37754/rubymotion-inspect-2013/info">early birds tickets</a> are now on sale with a 20% discount!</p>&#13;
</blockquote>&#13;
<p>My initial reaction to this was: <em>seriously? </em>(Though, in the interest of full disclosure, after I tweeted "seriously?" I did price airfare from Chicago to Belgium.)</p>&#13;
<p>One thing about this conference, and RubyMotion in general, that strikes me as weird is how it's evolving as a parallel or even orthogonal platform to Cocoa itself. Even though RubyMotion code <em>is </em>Cocoa code, running on LLVM and the Objective-C runtime, a lot of the work and conversation around RubyMotion seems focused on burying Cocoa in Ruby-like DSLs. While some of these new syntaxes may be interesting or valuable, others have the flavor of developers simply coming to an unfamiliar platform and rearranging the furniture to be more like their living room at home. (To be fair, I'd offer the same criticism of most DSLs on mainstream Ruby. It took me four years to accept that RSpec isn't evil.)</p>&#13;
<p>The danger of any new abstract language is in sacrificing shared understanding and clarity for what's essentially slang. Except that if I go around calling things "totally tubular", I'm fairly likely to be understood through context clues, so the danger is not that I'll be misunderstood but that I'll date myself or look like an idiot. In code, using inappropriate DSL "slang" runs the risk of making your code opaque or hard to understand by someone who isn't familiar with the DSL. It also adds a dependency on whatever external library implements the DSL, which seems like a high cost just to avoid typing <code>UILabel.alloc.initWithFrame(CGRectMake)</code> a few times, or to keep some nibs or Core Data models around.</p>&#13;
<p>The bottom line point is not that RubyMotion, or its community of DSL-loving Rubyists, or its first conference are evil or doing it wrong, but that I think they may be letting their enthusiasm for Ruby's simplicity and dynamism blind them to some of the really wonderful, pragmatic qualities of the Foundation and Cocoa frameworks — in short, that this community is primed to see "verbose" and think "bad" when it ain't necessarily so — and my worry is that a RubyMotion conference will reinforce some of that without necessarily reconciling the tension and disruption RubyMotion brings to the table.</p>&#13;
<p>But then again, I may not know what the fuck I'm talking about. In either case this conference ought to start some very interesting conversations, making it one to watch.</p>&#13;
<p>Speaking of being a RubyMotion curmudgeon: <a href="http://www.meetup.com/ChicagoRuby/events/81615162/">I'm speaking at ChicagoRuby's downtown meetup on Tuesday, January 8 on <em>this very topic</em></a>.</p>
