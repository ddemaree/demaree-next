---
date: '2014-07-23T16:40:55.000Z'
tumblr_type: text
tumblr_url: https://ddemaree.tumblr.com/post/92642649919/notes-from-yosemite
aliases:
  - /post/92642649919/notes-from-yosemite
slug: notes-from-yosemite
tags: []
summary: Notes from Yosemite
title: Notes from Yosemite
---

<p>About a week ago, I broke one of my own rules and installed an early developer preview of OS X Yosemite on my regular, day-to-day, work-issued Mac laptop. I had previously promised myself I&#8217;d at least wait until the public beta, on the theory that no matter how many caveats Apple gives the million or so beta participants, enough everyday users are likely to start using the new OS that at the very least it shouldn&#8217;t totally hose one&#8217;s computer.</p>
<p>Well, it turns out my timing was almost perfect: Yosemite was installed for less than 4 days before Preview 4 came out, and it seems that the Preview 4 build will be the first public beta release, coming out tomorrow.</p>
<p>If you&#8217;re among the lucky million-or-so who&#8217;ll receive a beta channel code from Apple tomorrow, some things to know, based on a week or so using the OS day to day:</p>
<h3>Old iCloud vs New iCloud</h3>
<p>The most recent iOS and Yosemite betas have added UI that supports both the &#8220;old&#8221; iCloud document syncing (called &#8220;Documents &amp; Data&#8221;) and the new iCloud Drive. What you need to know is: <em>these two things are not compatible</em>, and moving from Docs &amp; Data to iCloud Drive is a one-way move on each device.</p>
<p>What this means in practice is that Macs or iOS devices that have made the switch to Drive can still talk to each other, but only if they&#8217;re <em>both</em> running beta software and <em>both</em> have enabled New iCloud. Otherwise, your apps will still work, but they&#8217;ll be talking to different iCloud backends and therefore will lose the ability to sync with each other. AFAIK, Apple plans to migrate any data stored in Old iCloud into folders on iCloud Drive when the service launches this fall, so nobody&#8217;s data will be lost—it&#8217;ll just be inconvenient to access it.</p>
<p>In theory, if you enable iCloud Drive but all your iCloud-enabled apps still expect the old Docs &amp; Data syncing to work, everything <em>should</em> still work. Behind the scenes, Apple is simply directing apps&#8217; requests for Docs &amp; Data resources over to iCloud Drive, where your files will appear as special managed folders in OS X and (eventually) the new iOS document picker.</p>
<p>In practice, there are probably plenty of bugs that will mean iCloud will be even flakier than usual until everything shakes out.</p>
<p>If in doubt, follow Apple&#8217;s advice and just don&#8217;t enable iCloud Drive until it ships. I have it enabled on my Mac, and can tell you it&#8217;s pretty neat, but if you use Dropbox or anything similar it&#8217;s nothing you haven&#8217;t seen before.</p>
<p>Dropbox, by the way, generally works great on Yosemite. I did see some issues on Preview 3 where the Desktop app will hang and need to be relaunched, but upon relaunch everything was back to good, and I haven&#8217;t had to do that again since installing Preview 4.</p>
<h3>Dark Mode = meh</h3>
<p>Maybe there&#8217;s some third-party support that&#8217;ll make it more compelling, but so far, not only is the dark UI theme for the title bar and Dock unimpressive, because menu extras and other apps are designed to assume a light background, switching into dark mode tends to make things look bad. Unless there&#8217;s some master plan I&#8217;m not aware of, it&#8217;s superfluous enough to make me wonder if Apple won&#8217;t just yank the feature before Yosemite ships.</p>
<h3>How&#8217;s Helvetica Neue as a system font?</h3>
<p>I&#8217;ve gotten this question from a fellow type nerd at work, and my answer is: it&#8217;s a mixed bag.</p>
<p>First, the good: Helvetica Neue is a much more versatile font than Lucida Grande, giving app designers a much broader range of typographic expression. Of course, most people will abuse the weight I fondly call Helvetica Neue Extra Stupid Light, but generally I think it&#8217;ll be great for the system font to support more than 2 weights (and to have italics!).</p>
<p>On the other hand, Lucida Grande is a true screen type workhorse, and Helvetica Neue is not nearly as good, legible, or crisp, especially at tiny point sizes or on non-Retina displays. Having used Yosemite for a few days on both a retina MacBook Pro and a non-retina Thunderbolt Display, I&#8217;ve stopped noticing the difference, and my current opinion is that trading off optimum legibility for a more expressive range of type styles and weights is worth it. But this will probably remain controversial, especially for people whose only Mac screen is a tiny, non-retina MacBook Air that will now be full of (relatively) smeary Helvetica type.</p>