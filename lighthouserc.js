module.exports = {
  ci: {
    // collect: {
    //   url: [
    //     "http://localhost/index.html",
    //     "http://localhost/__style-guide/index.html",
    //     "http://localhost/p/2020-in-review/index.html"
    //   ],
    // },
    // assert: {
    //   "preset": "lighthouse:no-pwa",
    // }
    upload: {
      target: 'temporary-public-storage',
    },
  },
};