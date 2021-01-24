module.exports = function() {
  return {
    permalink: "/p/{{ slug }}/index.html",
    tags: ["posts"],
    layout: "single-post",
    eleventyComputed: {
      pageTitle: (data) => {
        return `${data.title} • David Demaree`
      }
    }
  }
}