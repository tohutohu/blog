const request = require('request')
const fs = require('fs')
const path = require('path')

const formsUrl = `https://api.netlify.com/api/v1/forms?access_token=${process.env.API_AUTH}`;
request(formsUrl, (err, res, data) => {
  const id = JSON.parse(data).find(e => e.name === 'suspendedComments').id
  const url = `https://api.netlify.com/api/v1/forms/${id}/submissions/?access_token=${process.env.API_AUTH}`;

  request(url, (err, res, data) => {
    if (err) {
      console.log(err)
      return
    }
    const jsonData = JSON.parse(data)
    const writeData = {}
    jsonData.forEach(e => {
      if (!Array.isArray(writeData[e.data.pageKey])) {
        writeData[e.data.pageKey] = []
      }
      writeData[e.data.pageKey].push( {
        name: e.data.name,
        content: e.data.content, 
        date: e.created_at, 
      })
    })

    fs.writeFileSync(path.resolve(__dirname, '../src/.vuepress/_data/comments.json'), JSON.stringify(writeData))
  })
})


