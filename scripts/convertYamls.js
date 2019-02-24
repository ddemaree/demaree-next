const matter = require('gray-matter')
const fs = require('fs')
const glob = require('glob')
const _ = require('lodash')

let datas = {}

const types = ['talks', 'publications']

function getDataForType(type) {
  return new Promise(resolve => {
    glob(`_${type}/*.md`, function (er, files) {
      let datas = []

      _.forEach(files, file => {
        let rawdata = fs.readFileSync(file)
        let data = matter(rawdata)
        datas.push(data)
      })

      resolve(datas)
    })
  })
}

function decorateObjectWithTypeData(object, type) {
  return getDataForType(type).then(data => {
    let obj = {}
    obj[type] = data
    return obj
  })
}

Promise.all([
  decorateObjectWithTypeData({}, 'publications'),
  decorateObjectWithTypeData({}, 'talks')
]).then(_datas => {
  let bigobj = {}
  _.forEach(_datas, _data => {
    Object.assign(bigobj, _data)
  })
  console.log(JSON.stringify(bigobj))
})
