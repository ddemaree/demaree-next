const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster')

module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy("assets");

  // const cacheBusterOptions = {
  //   createResourceHash(outputDir, url, target) {
  //       return Date.now();
  //   }
  // }
  // eleventyConfig.addPlugin(cacheBuster(cacheBusterOptions));

  return {
      passthroughFileCopy: true
  };
}