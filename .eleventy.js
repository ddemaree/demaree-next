module.exports = function(eleventyConfig) {
	let markdownIt = require('markdown-it');
	let markdownItAttrs = require('markdown-it-attrs');
	let markdownItContainer = require('markdown-it-container');
	let options = {
		html: true,
	};
	let markdownLib = markdownIt(options)
		.use(markdownItAttrs)
		.use(markdownItContainer);
	eleventyConfig.setLibrary('md', markdownLib);

	return {
		dir: {
			input: 'src',
		},
	};
};
