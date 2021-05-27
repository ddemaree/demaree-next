// const glob = require('glob')
const fs = require('fs/promises')
const _ = require('lodash')
const path = require('path')
const findInFiles = require('find-in-files')
const axios = require('axios')

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: './link-check.csv',
    header: [
        {id: 'path', title: 'PATH'},
        {id: 'linkUrl', title: 'LINK_URL'},
        {id: 'status', title: 'STATUS'},
        {id: 'message', title: 'MESSAGE'}
    ]
});

const notesDir = path.resolve(__dirname + '/../content/notes') 
// const URL = require('url')

const GOOD_HOSTS = [
  'www.fivethirtyeight.com',
  'www.nytimes.com',
  'www.wsj.com',
  'daringfireball.net',
  'www.marco.org',
  'en.wikipedia.org',
  'www.theonion.com',
]

findInFiles.find({term: 'link_url\: (https?\:\/\/.+)', flags: 'ig'}, notesDir, '.md')
  .then(async results => {
    const rows = _.entries(results).map(async ([pathname, matches]) => {
      let status = ''
      let message = ''
      const linkUrl = matches.matches[0].replace(/link_url\: /, '')
      const linkUrlInfo = new URL(linkUrl)

      if(_.includes(GOOD_HOSTS, linkUrlInfo.hostname)) {
        status = 200;
      }
      else {
        [status, message] = await axios.head(linkUrl, {timeout: 3000}).then(res => {
          // console.log(res.status)
          return [res.status, '']
        }).catch(err => {
          if(err.response) {
            return [err.response.status, err.message]
          }
          else {
            return ['🚫', err.message]
          }
        })
      }

      process.stdout.write(`${status === 200 ? '👍' : status} `)
      // if(status !== 200) {
      //   console.log([path.basename(pathname), linkUrl, status, message])
      // }

      return {path: path.basename(pathname), linkUrl, status, message}
    })

    return Promise.all(rows)
  })
  .then(resultsOut => {
    // console.log(resultsOut)
    csvWriter.writeRecords(resultsOut)
  })
  .catch(err => console.error(err))