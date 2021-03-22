module.exports = {
  ci: {
    // collect: {
    //   url: [
    //     "http://localhost/index.html",
    //     "http://localhost/__style-guide/index.html",
    //     "http://localhost/p/2020-in-review/index.html"
    //   ],
    // },
    collect: {
      url: ["http://localhost/index.html"]
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      "preset": "lighthouse:no-pwa",
    }
  },
};