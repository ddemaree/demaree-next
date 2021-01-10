---
date: '2010-03-16T16:35:25.000Z'
tumblr_type: text
tumblr_url: https://ddemaree.tumblr.com/post/452469789/no-more-computers
aliases:
  - /post/452469789/no-more-computers
slug: no-more-computers
tags:
  - nerdery
  - iPad
  - iPhone
summary: No more computers.
title: No more computers.
---

Most people wouldn't even think of file management as a _feature_ of traditional computers; files are just always _there_, like grass or rocks, part of the landscape. 

It's not just that filesystems are ubiquitous. From a technical standpoint, especially in Unix-like systems like OS X, the filesystem really _is_ the computer, or at least a user or developer's first, best way to interact with the system. And for ordinary folks, their whole mental model for distinguishing computers from other kinds of gadgets (like game consoles or phones) revolves around hierarchical file systems.

Which isn't to say people really understand filesystems, [as Rob Foster pointed out on his blog recently][nd]:

> These days, tech support calls involve questions of how to do stuff these folks like to do. Because they can now actually use their computers instead of simply restarting them, I’m able to better see how they use them. And the one commonality I’ve seen is that no one knows how to use the file system.

> Unfortunately for the average person, the file system is so complex that everything outside of the desktop and the documents folder appears to be a vast labyrinth which most likely hides booby traps and minotaurs.

I've had to deal with friends-and-family support calls too, and there's only one thing in Foster's post I disagree with: a lot of the friends I've had to help _also_ don't understand the desktop or documents folders. One very bright person I know saved _everything_ to her desktop because that was the only place she knew she could find it, except that after a while she had so many files she couldn't really find anything there either. So she started keeping windows open for weeks. When she needed a file, she skipped the desktop and went looking for its minimized window in the Dock.

When my friend had to restart her computer, it was like she was losing weeks of data _every single time_.

The genius of Apple's approach to file management in iPhone OS is to make this workflow — ignoring the filesystem and looking at apps or windows instead — not just the default, but the only way for users to work with files. The iPhone and iPad still have a filesystem, of course, and there are several new frameworks in iPhone OS 3.2 for working with files and documents.

But, to quote Apple's _iPad Programming Guide_,

> [&hellip;]it is important to remember that although you can manipulate files in your iPad applications, files should never be a focal part of your application. There are no open and save panels in iPhone OS for a very good reason. The save panel in particular implies that it is the user’s responsibility to save all data, but this is not the model that iPhone applications should ever use. Instead, applications should save data incrementally to prevent the loss of that data when the application quits or is interrupted by the system. To do this, your application must take responsibility for managing the creation and saving the user’s content at appropriate times.

In other words, except in cases when you're sending or receiving a document to another user (i.e. via e-mail), files and folders are as much developers' concern as the Cocoa framework or the processor architecture. And even in the e-mail case, users are not to be exposed to arbitrary _files_ so much as meaningful _documents_.

This approach seems obvious on the iPhone, but a little bit radical on the iPad. I think that's because of a weird semantic fixation we have about iPhones _as phones_.

Palm tried for years to sell general-purpose pocket computers, but only really found a wide audience when they started integrating the Palm OS into smartphones.[^1] Windows Mobile is a similar story: its predecessor OS, Windows CE, was mostly used on nerdy niche products like PDAs and 'palmtop PCs' until there were Windows-powered phones. And I shouldn't have to tell you what happened with the Newton.

It's been rumored that when Apple was first developing the iPhone, they were _really_ working on what is now the iPad but decided it would be a good idea to release a phone first while they perfected the multi-touch user interface.

People just react differently to phones, portable game consoles and music players than they did to PDAs. A pocket computer that manages your e-mail, calendars is a nerdy indulgence. A cell phone that does those things, on the other hand, is luxurious, convenient, and cool. Even the iPod touch, today Apple's top-selling product and the driving force behind the iPhone OS's dominance in mobile software, seemed a little bit weird when it first came out, because it seemed more like a PDA than an iPod. Apple even intentionally removed apps like Mail from the OS for the first iPod touches, because they didn't think anyone would want to use them on a device that wasn't a phone.

The iPad has an even bigger hill to climb. It's definitely not a phone. Arguably it's not even portable. Several people I've talked to about the iPad believe it's supposed to be carried around and used outside the home, even though in their ads and marketing photos Apple usually shows people using it at home, sitting on the couch.

It seems appropriate to call iPads computers, because like laptops they're multi-purpose devices that run a variety of apps and aren't pocketable. Definitely I feel like the iPhone OS approach — where the default input method is touch, and computery bits like file systems are abstracted away behind windows and apps — is the future of GUI computing, and the iPad is merely the first mainstream device to go there.

Obviously an iPad is not a phone, bit nor is it just a game console or e-book reader. It's a multi-purpose device, like a computer, but it doesn't have a desktop, windows, or an exposed filesystem. It handles many of the jobs we use computers for, and has similar technology at its core.

But I wouldn't say the iPad is just a friendly computer that hides the filesystem. I would say that without a visible filesystem, an iPad is not a computer.

So, what is it? That's the thing: we can easily describe what the iPad is not, but we don't yet have a category for what it is. Maybe that explains why everyone is so perplexed by it.

The iPhone is just a phone and the iPod touch is just a music player, but despite being just a larger, more powerful version of those same devices, the iPad is something completely new.

[^1]: Technically, it was Palm's archrivals Handspring who made the first Treo smartphone. Palm chose to acquire Handspring (who were founded by the inventors of the original PalmPilot) and take over the Treo brand rather than develop their own competing product.

[nd]:http://nimbledesign.com/post/441423115/the-path-of-most-resistance