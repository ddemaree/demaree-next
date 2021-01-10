---
date: '2010-09-09T14:00:05.000Z'
tumblr_type: link
tumblr_url: >-
  https://ddemaree.tumblr.com/post/1091716747/amazon-now-offering-ec2-micro-instances
aliases:
  - /post/1091716747/amazon-now-offering-ec2-micro-instances
link_url: >-
  http://aws.amazon.com/about-aws/whats-new/2010/09/09/announcing-micro-instances-for-amazon-ec2/
slug: amazon-now-offering-ec2-micro-instances
tags: []
summary: Amazon Now Offering EC2 "Micro" Instances
title: Amazon Now Offering EC2 "Micro" Instances
publisher: aws.amazon.com
---

Less than 1/4th the cost of a standard "small" instance, but there are catches: the CPU is "burstable" but defaults to less than one full core, and you get _no_ local storage—your server's filesystem has to live in Amazon's Elastic Block Storage (EBS) system, which costs extra.

But that last one can be seen as a feature. One of EC2's most annoying drawbacks is that while each instance can have hundreds of gigabytes of local storage, anything stored there disappears when you turn it off unless you've backed it up somewhere else, like EBS or S3. (For example, if you have a Rails app hosted on Amazon's cloud and you accept or serve uploaded files, it's pretty much assumed those files need to live on S3 to prevent massive data loss should anything happen to your EC2 instance.)

EBS storage is cheap, it doesn't go away when your instance does, and an EBS volume can be attached to multiple EC2 instances at the same time. Which sounds pretty great. Anyone else think that one of Amazon's goals for these micro-instances is to get more customers using EBS?