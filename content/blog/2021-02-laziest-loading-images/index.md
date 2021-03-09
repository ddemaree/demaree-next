---
title: Lazier-Loading Images
tags: ["Web Development"]
date: 2021-03-05
---

{{< img unsplash="XXs0zyG9Crk" width=540 />}}

I'm old enough to remember when the `<img>` tag was such a new addition to HTML that browsers were actively touting support for it. Can you imagine the web without pictures?

but ever since then loading images on a web page has been pretty easy — just put the image file on a web server, ideally optimized in some way, then reference it in a tag. 

That still works, of course, and it's still pretty easy. What's changed is that our images have gotten bigger, and we're often looking at them on small (yet absurdly high-res) phone screens connected to relatively expensive cellular networks. 

If you're publishing on a platform like WordPress or Medium, you can probably expect image loading to be taken care of for you.

## Where do images live?

## The state of web standards

## Fast, fancy image loading

## Next level laziness

* Using APIs to construct image tags
* I don't mind hard-coding the aspect ratio or intrinsic size of an image, but that also seems like something that can be automated, especially given that most of my images are on services that have APIs.
* On my blog, I can embed `cloudinary` or `unsplash` images
* Intrinsic sizes, srcset, and such generated on server side and pulled in at build time
* For Unsplash images, which should be attributed, my API endpoint also generates a caption that links to the original photo and credits the photographer
* As a final performance optimization, this little app also returns a base64-encoded JPEG of the image which can be inlined — the preview version of the image requires no network request at all, and has a natural blurriness because it's tiny.