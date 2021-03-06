---
date: "2015-06-21T20:03:15.000Z"
tumblr_type: text
tumblr_url: >-
  https://ddemaree.tumblr.com/post/122103803584/ive-been-playing-around-with-react-native-an
aliases:
  - /post/122103803584/ive-been-playing-around-with-react-native-an
slug: ive-been-playing-around-with-react-native-an
tags:
  - Coding
  - Mobile Development
  - Facebook
  - React
summary: "I’ve been playing around with React Native,\_an offshoot of Facebook’s React JS framework for native iOS development. It’s nice...."
---

<p>I’ve been playing around with <a href="https://facebook.github.io/react-native/">React Native</a>,&nbsp;an offshoot of Facebook’s React JS framework for native iOS development. It’s nice. React has its own HTML-like syntax for defining UI view hierarchies, and if you change your application state it takes care of redrawing the UI to reflect the change. And because the whole view hierarchy <i>and</i>&nbsp;the state it’s presenting are managed by the React framework, these changes happen <i>extremely</i> fast.</p>

<p>I’ve had limited patience for keeping up with the fast-moving world of JavaScript frameworks. It seems like there’s a new one every week, and they all require knowledge of fifty other things from the ragged, confusing modern JavaScript ecosystem. React, though, seems worth paying attention to. Facebook and Instagram develop and maintain it, and use it heavily internally. React’s tooling and documentation are very, very good; if you run into something confusing, there’s a decent chance Facebook has had an actual technical writer write something that explains the concept. React and React Native may not cover every single need you might have, but the things it does it does very well.</p>

<p>I’m still not sure if it’s worth using React Native, or any abstraction layer, rather than Apple’s own tools and APIs.</p>

<p>React <i>is</i> fantastic for creating complex view hierarchies, and if you’re more used to working with online data via Ajax than Apple classes like NSURLRequest, then voila—you can just use Ajax.</p>

<p>On the other hand, React prefers its own web-like abstractions for doing flexible UI layout to Apple concepts like Auto Layout or size classes. There are ways of bridging Objective-C (but not Swift) code to React’s JavaScript, but for the most part React is its own, JavaScripty world. Oddly enough, though React groks (something very much like) flexbox for creating flexible layout, it doesn’t have anything like media queries built in for responsive design. You can add conditionals to swap different view components in on larger or smaller screens, but those have to be based on pixel breakpoints—something Apple, for one, would rather you didn’t use in native apps.</p>
