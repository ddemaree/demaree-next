---
title: A test Markdown page, for testing formatting in Markdown
dek: An example of all the things one can do with Markdown
slug: markdown-test
date: 2019-06-12
private: true
featuredImageUrl: https://images.unsplash.com/photo-1576089388754-68c54a863b60
---

This is a test markdown page. Here I'm experimenting with moving my CMS out of WordPress and straight into Gatsby. How is this developer experience?

Main problem I see is that hot reloading causes tweets not to render right. But I can see content hot reload, which is great!

https://twitter.com/ddemaree/status/1271201601693384707

Here is some code:

```
{
  title: "Test markdown page is a page full of markdown content with a long string"
}
```

And here is an Instagram embed:

https://www.instagram.com/p/CBQvFtupIZR/

A big question for tomorrow: how do images work?

![An image](../assets/images/posts/markdown-test/IMG_3479.jpeg)

![Another fine image](./cookie-break.jpg)

## Testing inline assets

Does Gatsby/Sharp process the following? Or do I need to do it?

<figure>
<img src="./cookie-break.jpg" />
<figcaption>Time for another cookie break!</figcaption>
</figure>