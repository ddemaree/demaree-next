---
title: Panic Discontinues ‘Code Editor’ for iOS
date: '2021-05-17T13:06:03'
slug: panic-discontinues-code-editor-for-ios
tags:
  - iPad
link_url: https://panic.com/blog/the-future-of-code-editor/
---

This is sad — after nine years, [Panic has discontinued Code Editor, the iOS version of their web development app](https://panic.com/blog/the-future-of-code-editor/) combining a text editor, file transfer client, and terminal. They attribute the decision to poor sales — the app wasn’t selling enough copies to fund its continued development, which was also the case for Panic’s now-discontinued [Transmit iOS](https://panic.com/blog/the-future-of-transmit-ios/) and [Status Board](https://panic.com/blog/the-future-of-status-board/) apps.

But they also talk about the work they’d have had to do to make a code editor that might be viable for today’s developers, and how that kind of product is basically impossible on iOS:

> The biggest technical hurdle is the inability to run external processes on iOS and iPadOS. There’s just no way around it: this is required for modern web development. For example, the TypeScript extension is one of the most popular Nova extensions right now, and it launches and runs the TypeScript compiler. While we could attempt to build the TypeScript compiler into Nova, we can’t possibly anticipate and include every such tool that might be needed by a developer. We’d need to bundle compilers, interpreters, and language servers for just about every programming language in existence, not to mention tools like linters, JavaScript transpilers, and bundlers. The scope would quickly become unmanageable, and we’d always be lagging behind the latest versions of these tools.
> 
> Even if it were viable, we’d likely run afoul of App Store policy as well. Apps on iOS and iPadOS must use Apple’s Javascript interpreter, JavaScriptCore. Although JavaScriptCore is excellent, many developer tools rely on features or behaviors only present in Google’s V8 JavaScript interpreter. Similarly, WebKit is the only allowed web rendering engine on iOS. 
> 
> And still, even if we could find some clever technical way around all of these limitations, we wouldn’t know if our approaches would be allowed on the App Store until we’d fully built and submitted them for review. So, we’d be facing a huge investment of time with the possibility that it would all ultimately get rejected.
{.wp-block-quote}

It is ironic that this app, which made it _barely_ possible to manage a static or PHP web site from an iPad, is getting pulled from sale the same week that Apple ships their fastest iPad Pro models to date, running the same processors as their newest, fastest Macs. 

My idea of what makes a good computer is anchored in what I need as a web coder and product manager, but I’m not aware of _any_ pro use case where an iPad Pro is able to replace a laptop or desktop. In fact, I can’t really call out any essential apps or use cases that will fully utilize an M1 processor — Microsoft and Adobe’s iPad apps are stripped-down versions of the desktop ones, for instance, which were already quite fast on last year’s A16X. Code editing on iPad already required any real computing to happen on a server somewhere else — you could use Code Editor to edit your WordPress site, but you could never, ever run a local WordPress environment on an iPad.

And, regarding the economics, Code Editor is yet another casualty of how poorly Apple has supported pro software sales on iOS and iPadOS, pushing many businesses toward subscription models whether they like it or not. <a href="http://nova.app" data-type="URL" data-id="nova.app">Nova</a>, Panic’s newest macOS code editing app, costs $99 for a perpetual license plus the first year of updates, with license renewals for $49/year. Even at that price point, they couldn’t afford to also develop and maintain an iOS app, especially one that couldn’t match Nova’s full feature set.

If Panic _could_ ship a fully-fledged web IDE for iPad, I personally think it’d be worth _at least_ $100/year, but they’d be unlikely to find enough takers to make it viable, and (of course) they’d be at Apple’s mercy to keep the app approved for sale.

So, as always, the question is: what exactly is _pro_ about the iPad Pro, if pro software creators have no incentive to develop the kinds of apps that would make the hardware sing?
