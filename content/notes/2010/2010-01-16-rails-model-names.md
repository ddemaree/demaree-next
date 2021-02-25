---
date: "2010-01-16T15:57:00.000Z"
tumblr_type: text
tumblr_url: https://ddemaree.tumblr.com/post/337554241/rails-model-names
aliases:
  - /post/337554241/rails-model-names
slug: rails-model-names
tags:
  - Web Development
  - Ruby on Rails
  - MongoDB
summary: Pleased to Meet You, Won't You Guess My Name?
title: Pleased to Meet You, Won't You Guess My Name?
---

While working on a little Rails project this week, I discovered something very interesting (and little-documented) in ActiveSupport: [`Module.model_name`][asmn]. It's a core extension to support Rails's handling of models as RESTful resources, as in the examples below:

```rb
# BlogPost is a subclass of ActiveRecord::Base
@blog_post = BlogPost.find(108)
 
# Same as render "blog_posts/blog_post", :object => @blog_post
render @blog_post
 
# Will call blog_post_url(@blog_post.id)
url_for @blog_post #=> "/blog_posts/108"
 
# Lots of Rails's tag/form helpers use this
dom_id @blog_post #=> "blog_post_108"
```

The `model_name` method (which gets inherited by pretty much everything, because it's in the `Module` class) returns a special `ActiveSupport::ModelName` object. `ModelName` is just a subclass of reg'lar old `String`, that gets initialized using the class name, then uses that name to pre-bake certain name components used by the record identifier:

```rb
Ando::BlogPost.model_name #=> "blog_post"
 
# Look at all these useful variations!
Ando::BlogPost.model_name.singular #=> "ando_blog_post"
Ando::BlogPost.model_name.plural #=> "ando_blog_posts"
Ando::BlogPost.model_name.collection #=> "ando/blog_posts"
Ando::BlogPost.model_name.element #=> "blog_post"
Ando::BlogPost.model_name.partial_path #=> "blog_posts/blog_post"
```

What's interesting here is that since this one object is responsible for 90% of Rails's resource-mapping magic, this makes it extremely simple to override part or all of that magic. Of course, it's generally a bad idea to override a default (and very widely used) bit of Rails's behavior, which is why it's especially good that this can be done on a class-by-class basis.

Right now I'm working on a little CMS project where I'm using single collection inheritance in [MongoMapper](http://github.com/jnunemaker/mongomapper) to distinguish between several subclasses of my main `Item` class. Ordinarily, unless you _want_ to have separate routes, controllers and views for each subclass, it would be a pain in the ass to even try doing it this way, as these days so much of Rails's syntactic sugar is based around the record identifier.

So in my base class, I did a little `instance_eval`'ing on the `model_name` object:

```rb
class Ando::Item
  include MongoMapper::Document
  set_collection_name "items"
 
  def self.model_name
    model_name = super
    
    model_name.instance_eval do
      @singular     = "ando_items".freeze
      @plural       = "ando_item".freeze
      @collection   = "items".freeze
 
      # Note that I'm setting my own @collection, but NOT @element
      @partial_path = "#\{@collection}/#\{@element}".freeze
    end
    
    model_name
  end
 
end
```

To explain a bit what I'm doing here:

- I'm hard-coding the singular, plural and collection forms, which are primarily used in routing, so Rails's URL helpers will always point back to `Ando::ItemsController` even if the object in question is a subclass.

- I'm leaving the `@element` alone; it'll have been pre-populated with the name of the current subclass. For example, in a subclass called `Ando::Photo`, the collection will be `items` but the element will be `photo`.

- Which leads me to the partial_path: because collection has been hard-coded but element has not, the partial path for my `Ando::Photo` subclass will be `ando/items/photo`, not `ando/items/item` or `ando/photos/photo`.

Hopefully you can imagine how this would be useful on a project where there are ten or more subclasses of the same model.

Curiously, I didn't know this module even existed until I went looking at how Rails knew how to map MongoMapper documents this week. The original implementation of the record identifier in Rails 2.0 was a lot less flexible, and there's been so little discussion of ever needing to override this behavior that I assumed it hadn't been touched since then.

[asmn]: http://github.com/rails/rails/blob/2-3-stable/activesupport/lib/active_support/core_ext/module/model_naming.rb
