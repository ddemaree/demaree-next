---
title: No More Masters
date: 2020-07-02
slug: no-more-git-masters
collection: Git for Humans
description: Why and how to change your Git repo's default branch.
---

<figure>
  <img src="images/image3.jpg" alt="Photo of a river">
  <figcaption>
    Photo by <a href="https://unsplash.com/@jack_anstey">Jack Anstey</a> on <a href="https://unsplash.com/s/photos/river">Unsplash</a>
  </figcaption>
</figure>

In my book [Git for Humans](https://abookapart.com/products/git-for-humans), published in 2016, I made copious references to `master` — naturally, as it's the longtime default branch name in Git. In computer contexts, the word “master” can refer to a "master copy," meaning the original or canonical version of something, from which other copies are made. Like many people, I  simply accepted that meaning and didn't look at it too closely.

But now it's 2020, things are changing, and there are other, better names for our primary Git branches that don't invoke slavery.

My colleague Una Kravets summarized the practical argument for renaming to `main` (which the community seems to have rallied around) in [a tweet](https://twitter.com/Una/status/1271181775130279936?s=20):

https://twitter.com/Una/status/1271181775130279936?s=20

For me, having a branch named `master` is like realizing a cute geometric pattern on some old wallpaper in my house has actually been swastikas all these years, or that the old statue outside the main library in my hometown is actually [a Confederate monument that had stood there for 115 years](https://www.nytimes.com/2020/06/02/us/george-floyd-birmingham-confederate-statue.html). Removing symbols of racism isn't nearly enough, but that doesn't mean don't remove them.

I'm writing this post for the same reason why I wrote _Git for Humans_: people have to live in a Git-based world, and Git does not make that easy. Folks are talking about renaming branches like there's just a box you can check. For new projects, it's almost that easy — in fact, [GitHub has announced they will change the default for everyone later this year](https://www.zdnet.com/article/github-to-replace-master-with-alternative-term-to-avoid-slavery-references/). But existing projects need a bit more work, as I'll explain further on.

For now let's start with what you need to do to start new projects out on a `main` branch if your tools don't yet treat that as a default.

## Naming your first branch `main` instead of `master`

While `master` is a long-standing convention, one of the great things about Git is that it doesn't really require your main branch to be named `master` (or anything else). You can choose any name you want, and you can change names at any time, so long as you're willing to do some work.

When you start a new Git repo (with `git init`), as of July 2020 Git is hard-coded to set the initial branch name to `master`. But until you make your first commit, that branch doesn't technically exist. So here's what you do to set your preferred name on a new repo—make sure you do this _before_ your first commit. (If you forget and commit something first, that's fine, you'll just need to follow the "renaming" process described below.)

```
git init
git checkout -b main
```

To make your initial push to GitHub, make sure you pass in the `-u` argument (which is short for "set upstream"), which tells Git what remote branch should receive pushes from this local branch.

```
git push -u origin main
```

Until GitHub finishes changing the default primary branch name, you'll need to go into your repo settings there to tell it that `main` is your primary branch; you'll find instructions later in the post for how to do this.

## "Renaming" an existing branch

The most important thing to know about how Git works under the hood is that everything in a Git repo is immutable. When you make commits, it only _looks_ like you're changing files and directories in your project — really, you're just adding new versions of things on top of the old ones, which is one way Git keeps your data safe.

I mention this to let you in on a secret: you can't actually rename a branch in Git. But you can create a new one, and get rid of the old one, which is basically the same thing.

Here we'll replace a `master` branch with a new one called `main`, pointing to the current head commit:

```
git checkout master # if you're not already there
git checkout -b main
```

Alternatively, you can use `git branch` to ask Git to create a new branch pointing at the same commit `master` is on:

```
git branch main master
```

Whichever way you do it, your `master` branch will be left intact, you'll have a new `main` branch that's identical to `master`.

To make this new main branch available to your collaborators, push it to GitHub or whatever remote server you use (and don't forget the `-u`):

```
git push -u origin main
```

Next, let's tell GitHub and your other tools that there's a new primary branch in town.

## Updating your primary branch in GitHub and other tools

Before we go on, this is a good place to ask you to consider your team and infrastructure needs before diving blindly into changing the name of your primary branch.

Moving _to_ `main` signals a desire for inclusion, a nice signpost for any underrepresented folks who we may collaborate with now or in the future. But moving away _from_ `master` can break things, as illustrated in this tweet by Bryan Liles:

https://twitter.com/bryanl/status/1278343673672011776?s=20

The `master` branch name is what I call a “load-bearing” technical design decision. Many other systems and workflows depend on it, and the more things like build tools, package managers, or deployment pipelines you have hooked into your repo, the more work you can expect to do to switch over to new nomenclature without ruining someone's day.

This isn't to say you should keep calling it `master` just because changing it is hard. But you should change it _thoughtfully_, and if necessary, make a plan to adopt a new name eventually or gradually, as opposed to right now.

For now, let's assume you've done the work to make sure you're ready to change to `main`, and update the primary/production branch in some popular tools.

### GitHub

Open your repo page on GitHub while signed in, and click on the Settings tab.

![GitHub repo header navigation, showing 'Settings' option last](images/image4.png)

In the Settings page, click Branches in the left-hand navigation. Then, on the right-hand side, you'll see a drop-down that lets you change the name of your default branch. (Remember, though here you see me changing it to `main`, you could set it to `stable` or whatever name you chose.)

![GitHub repo settings page, showing default branch option](images/image2.png)

Once this is done, new pull requests will automatically be set up to merge into `main`, and `git clone`s from GitHub will also check out `main` by default.


### Netlify

A whole lot of people use Netlify to publish and host static web sites, and a lot of those people use Netlify's Git/GitHub integration to automatically publish changes when you push to your default branch.

If you (like me) are one of those folks, you'll need to go into your Netlify site settings to select a new production branch. This is under _Build & deploy > Deploy contexts_.

![Netlify Build & Deploy settings page showing default production branch setting](images/image1.png)

### Other integrations

If you have complex integrations with your Git projects, such as continuous integration or deployment systems, before making these changes — and certainly before you delete or disable the old `master` branch — you should talk with your team and make a plan for how to update everything to use a new name.

Depending on the size and scale of your project, this may require changing some files in your repo or some settings in your hosting or other service providers, but may also require some dev-ops type work to plan and roll out a change. In my opinion, this work is worth doing, and the sooner the better, but you should balance the urgency of adopting more inclusive terminology with ensuring a stable experience for your users.


## The hard part: getting rid of the old branch

Sadly, Git doesn't have any such thing as "branch redirects." If all you do is create a new branch named `main`, your teammates may keep pushing changes into `master`, and systems that hook into your repo will keep treating `master` as the main branch.

Hopefully getting collaborators to change names should be as simple as talking to them, telling them you think `main` (or whatever) should be the main branch name going forward, and that they should treat it as such.

Of course, muscle memory can be very strong. Even on a team that agrees to use `main` instead of `master`, someone might push changes to `master` out of habit. If you want to make pushes to `master` trigger an error, one simple thing you can do is to replace the content on your `master` branch with a commit that's disconnected from the rest of your repo. 

Not to be a broken record on this, but before you follow any of the instructions below, make sure you’ve taken a thoughtful look at all the ways people interact with your repo. If you have CI systems or build rules that expect your primary branch to be called `master` — or, for that matter, expect that all your branches contain runnable code — you may need to do extra work to create a placeholder branch like the one I describe here without breaking things. (Otherwise, you’ll end up doing extra work to fix things, which is less fun.)

First, you'll want to create an "orphan" branch, which (as the name implies) is a branch/commit with no parent. Ultimately, this will be a mostly-empty branch that will replace the current `master` branch. We’ll name this new orphan branch no-masters.


```
git checkout --orphan no-masters
```


Then remove all the content from the repo while in this branch. Using `git rm` (as opposed to regular 'ol `rm`) will only delete files and folders that are checked into Git, leaving behind ignored content.


```
git rm -fr .
```

Depending on the technology stack you use, this may leave behind some content that had previously been hidden by `.gitignore`, which will now show up when you run `git status`. You can restore the `gitignore` file to make sure these files are not committed or deleted:

```
git checkout main .gitignore
```

Lastly, you may want to leave a note explaining why this branch is empty. We'll add and commit a `README.md` Markdown file with the following text:

```
# This branch is deprecated
This project's primary branch is now called `main`.
You should `git checkout main` and `git pull origin main` from now on.
```

Then you can commit these changes:

```
git add .gitignore README.md
# … output deleted …
git commit -m "Deprecation message for `master` branch"
```


Because this is an orphaned branch, if you run `git log` you'll only see this commit, none of the history before it:


```
git log --oneline
> cd2b2c2 (HEAD -> no-masters) Deprecation message for `master` branch
```


OK, now for the scary part — replacing `master` with this content. Which means deleting your old `master` branch:

```
git branch -D master
```

This will delete `master` locally, allowing you to create a new `master` branch that points to this new, empty-except-for-deprecation-message commit.

```
git branch master no-masters
```

If you were to then `git checkout master`, you'll see the deprecation message.

```
git checkout master
git log --oneline
> cd2b2c2 (HEAD -> master) Deprecation message for `master` branch
```

Whew. Okay. One last step: pushing this `master` branch to GitHub. Because this is a new, orphaned branch, you will need to force-push. This may (hell, probably will) break any integrations you have hooked up to `master`, so you may want to wait until your team and infrastructure are fully migrated over to `main` until you do this.

```
git push -f origin master
```

Ahhhhhhhhh, so nice to have that done. Here's the deprecation message as shown on one of my GitHub repos:

![Screenshot of master branch deprecation message on GitHub web interface](images/image5.png)

Because `master` now points to this orphaned commit, whenever you or someone on your team tries to pull from it Git will raise an error:


```
git pull origin master
From <your-repo-url-here>
 * branch            master     -> FETCH_HEAD
fatal: refusing to merge unrelated histories
```

If only it was this easy to break free from history in real life.

## One more thing…

Like I said, I wrote a book about Git, which mentions `master` a lot. (Like, *a lot* a lot.) I am talking to the awesome team at A Book Apart about updating <cite>Git for Humans</cite>' text and examples to favor `main` as the default branch name. They’re pretty busy, and there’s still a pandemic happening, so no ETA on when a book update might ship.

I am also going to donate all of my proceeds from the book through summer 2021 to organizations fighting racism in the tech industry, and will get my employer to match those donations.