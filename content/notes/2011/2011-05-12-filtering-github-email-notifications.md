---
date: "2011-05-12T14:40:05.000Z"
tumblr_type: text
tumblr_url: >-
  https://ddemaree.tumblr.com/post/5421411121/filtering-github-email-notifications
aliases:
  - /post/5421411121/filtering-github-email-notifications
slug: filtering-github-email-notifications
tags:
  - "Tips & Tricks"
  - GitHub
  - Email
summary: Filtering GitHub email notifications
title: Filtering GitHub email notifications
---

_Problem:_ My GitHub account is associated with one of my personal email addresses, but I use it (_a lot_) for work. A pull request notification on [that JavaScript route mapper I wrote](https://github.com/ddemaree/bjorn) isn't that important, but an issue or pull request on the Typekit web app or one of our gems is fairly important. Those emails need to end up in my work e-mail box — that's the context I want them in, so I can be more free to ignore whatever is going on outside of work when I'm working.

37signals solves this problem in Basecamp by letting you select a particular email address to use for each account you have access to. GitHub doesn't offer much control over email notifications yet, unfortunately, but they _do_ include some very useful headers in their emails that make effective filtering way easier:

    List-Archive: https://github.com/typekit/webfontloader
    List-Id: <webfontloader.typekit.github.com>

`List-Id` headers are always of the form `reponame.accountname.github.com`. My aforementioned Björn project would be `bjorn.ddemaree.github.com`.

In Gmail you can find (and therefore filter) all emails from a given account by setting up wildcard queries on the `List-Id` header, which Gmail helpfully lets you search on via the `list:` search operator.

Obviously this will work best if all of the repos whose emails you want to filter are owned by a single account, or at least a small, known list of accounts. (In that case you'd change your query to `list:"*.(account1|account2).github.com"`.)

You _could_ also just search on the subject lines, which always include the repo or project name in square brackets. But whenever we added a new project to our account, or someone issued a pull request for a repo I hadn't filtered yet, those emails would end up in the wrong place until I corrected the problem. This way _all_ GitHub notifications related to the `typekit` account go to my Typekit email box, with no further action needed from me.
