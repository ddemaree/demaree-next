// const { JSDOM } = require('jsdom')
const { ApolloClient, InMemoryCache, HttpLink, gql } = require('@apollo/client/core')
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const striptags = require('striptags')
const { decode } = require('html-entities')
const fetch = require('cross-fetch');
const { DateTime } = require('luxon');
const axios = require('axios');
const yaml = require('js-yaml');

const postsQuery = gql`
  query PostsQuery {
    posts(first: 15) {
      nodes {
        title
        slug
        content
        unencodedExcerpt
        dateGmt
        linkFields {
          linkUrl
        }
        postFields {
          subtitle
        }
        categories {
          nodes {
            slug
            name
          }
        }
        tags {
          nodes {
            slug
            name
          }
        }
        featuredImage {
          node {
            altText
            caption
            sourceUrl
            mediaItemUrl
            description
          }
        }
      }
    }  
  }
`

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://demaree.space/graphql/', fetch }),
  cache: new InMemoryCache()
});

const applyRegexps = (listOfReggies, inputString) => {
  return listOfReggies.reduce((output, [regexp, replaceVal]) => {
    if(typeof regexp === 'function') {
      return regexp(output)
    }
    return output.replaceAll(regexp, replaceVal)  
  }, inputString)
}

const processQuotes = html => {
  return html.split(/\n{2,}/).map(line => {
    if(!line.match(/^<blockquote/)) return line

    // Line is a blockquote
    return applyRegexps([
      [/<blockquote(?: class="([^"]+)")*>(.+)<\/blockquote>/g, '$2\n{.$1}'],
      [/(?:<p>)/g, '\n> '],
      [/<\/p>(?=\n>)/g, '\n> '],
      [/^\n/g, ''],
      [/<\/*p>/g, ''],
      // [html => { console.log(html); return html }]
    ], line)

  }).join('\n\n')
}

const processContent = html => {
  return applyRegexps([
    [html => decode(html)],
    [/[\r\n]{2,}/g, '\n\n'],
    [/(?<=\n)<\/*p>/g, ''],
    [/<\/*p>(?=\n)/g, ''],
    [/<\/*em>/g, '_'],
    [/<a href="([^"]+)">([^<]+)<\/a>/g, "[$2]($1)"],
    [/(?<! )—(?! )/g, " — "],
    [html => processQuotes(html)]
  ], html)
}

const saveImage = async (url, path) => {
  return await axios({
    method: 'get',
    url: url,
    responseType: 'stream'
  })
  .then(function (response) {
    response.data.pipe(fs.createWriteStream(path))
  })
  .then(_ => path);
}

const getPosts = async () => {
  const { data } = await client.query({ query: postsQuery })
  const { posts: { nodes } } = data

  let tags = []

  nodes.forEach(({ dateGmt, title, slug, content, unencodedExcerpt: excerpt, linkFields: { linkUrl }, postFields: { subtitle }, categories, tags, featuredImage  }) => {

    let postCategories = []
    let postTags = []

    const catNames = categories.nodes.map(c => c.name)
    const section = _.includes(catNames, 'Articles')
                      ? 'blog'
                      : 'notes';

    const markdownText = processContent(content)
    let fileBody = markdownText
    const dateTime = DateTime.fromISO(dateGmt)
    const formattedDate = dateTime.toISODate()


    let featuredImageUrl, featuredImageCaption, featuredImageAltText, featuredImageDescription, featuredImageSlug, featuredImagePath;
    if(featuredImage) {
      featuredImageUrl = featuredImage.node.mediaItemUrl;
      featuredImageCaption = featuredImage.node.caption;
      featuredImageAltText = featuredImage.node.altText;
      featuredImageDescription = featuredImage.node.description;

      var featuredImageExt = ".jpeg"
      if(!featuredImageUrl.match(/images\.unsplash/)) featuredImageExt = path.extname(featuredImageUrl)
      featuredImageSlug = `cover__${slug}${featuredImageExt}`
    }
    
    const imageTags = markdownText.matchAll(/<img([^>]+)>/g)

    const images = (Array.from(imageTags).map(t => {
      var attrs = t[1].trim().split(/ (?=[a-z]+=)/).reduce((obj, a) => {
        var aMatch = a.match(/([a-z]+)="([^"]+)*"/)
        var [aString, name, value] = Array.from(aMatch)
        return {...obj, [name]: value}
      }, {})

      return {...attrs, tag: t[0], fullSrc: attrs.src.replace(/-\d{3,4}x\d{3,4}(\.[a-z]+)$/, '$1')}
    }))

    const filePath = path.resolve(__dirname + `/../content/${section}/${formattedDate}-${slug}${(featuredImage || images.length > 0) ? '/index.md' : '.md'}`)
    const postDirectory = path.dirname(filePath)

    // whew ok now let's try saving data
    fs.mkdirSync(postDirectory, { recursive: true })

    if(featuredImageSlug) {
      saveImage(featuredImageUrl, path.join(postDirectory, featuredImageSlug));
    }

    images.forEach(image => {
      const { tag, fullSrc, src, srcset, sizes, ...attrs } = image
      const imgPath = path.join(postDirectory, path.basename(fullSrc))
      saveImage(fullSrc, imgPath)

      const newAttrs = _.entries({...attrs, src: path.basename(fullSrc)}).map(([k, v]) => `${k}="${v ? v : ''}"`).join(' ')
      // console.log({attrs, newAttrs})
      const newTag = `<img ${newAttrs} />`;
      fileBody = fileBody.replaceAll(tag, newTag)
    })

    const frontmatter = yaml.dump({
      title,
      date: dateGmt,
      slug,
      tags: tags.nodes.map(t => t.name)
    })
    
    fs.writeFileSync(filePath, `---\n${frontmatter}---\n${fileBody}`);
    console.log({ title, filePath })
  });
}

getPosts();