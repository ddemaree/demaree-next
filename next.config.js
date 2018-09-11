const staticFileMatch = /\.(png|jpe?g|gif|eot|otf|ttf|woff2?)$/
const staticsUrlLoaderRule = {
  test: staticFileMatch,
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: 'static/media/[name].[hash:8].[ext]',
  },
}



const withSass = require('@zeit/next-sass')
module.exports = withSass({
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {

    const staticsFileLoaderRule = {
      test: staticFileMatch,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: `/_next/static/assets/`,
            outputPath: `${isServer ? "../" : ""}static/assets/`
          }
        }
      ]
    }
    // config.module.rules.push(staticsUrlLoaderRule)
    config.module.rules.push(staticsFileLoaderRule)

    // Important: return the modified config
    return config
  },
})