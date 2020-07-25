module.exports = () => {

  return {
    date: '2020-12-01T00:00:00Z',
    eleventyComputed: {
      date: d => {
        console.log(d)
        return '2020-12-01T00:00:00Z' 
      }
    }
  }
}