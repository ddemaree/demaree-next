---
date: '2011-12-30T00:44:13.000Z'
tumblr_type: text
tumblr_url: https://ddemaree.tumblr.com/post/14996591419/heroku-supports-php-yay-yes-yay
aliases:
  - /post/14996591419/heroku-supports-php-yay-yes-yay
slug: heroku-supports-php-yay-yes-yay
tags: []
summary: Heroku Supports PHP! Yay! (Yes, Yay!)
title: Heroku Supports PHP! Yay! (Yes, Yay!)
---


This week I (re-)discovered that Heroku's polyglot [Cedar stack](http://devcenter.heroku.com/articles/cedar) supports PHP. The PHP support was launched a while back in partnership with Facebook, to attract developers of Facebook apps to Heroku's cloud. While it's not listed on their website as a fully supported, featured language alongside Ruby, Python, Node.js, and Java (not to mention JVM languages Scala and Clojure), it works amazingly well for really basic stuff. You can try it out for yourself by just creating a new project folder (i.e. Git repo) with an `index.php` file in it, then creating a Heroku project. When you push to Heroku, they'll automatically identify it as PHP and compile/install Apache and PHP into your slug.

PHP on Heroku could be more accurately described as "Apache+PHP on Heroku" — PHP apps are Apache web server instances, including support for `.htaccess` directives. I haven't run everyone's favorite security hole, `phpinfo()`, to determine what modules are compiled into Heroku's PHP, but it seems like support for PostgreSQL and MySQL are both present, which means PHP apps can use either Heroku's Postgres-based shared DB storage or a cloud-hosted MySQL like Amazon RDS.

I'm excited about this because it allows me to stop maintaining a fully fledged Apache server on a VPS just to publish the occasional semi-static web site. Need to publish one or two pages? Before I'd have needed to configure a virtual host in Apache, then create some directories, then figure out a publishing thingamabob, which was different for every project…now I can just `git push heroku master` and it's done. Boom.

[My wife's yoga site](http://yogaisawesome.com) is mostly plain HTML with some PHP. It's not at all demanding in terms of server horsepower, and while Coda makes it fairly easy to track and publish changes over SFTP, Heroku's Git-based deployments are just _so_ much nicer, and I like being able to run all of my small, personal projects on a single app platform.