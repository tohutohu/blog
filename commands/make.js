const moment = require('moment')
const chalk = require('chalk')
const mkdirp = require('mkdirp')
const fs = require('fs')
const readline = require('readline-sync')
const print = text => {
  process.stdout.write(text)
}
const println = console.log

const lines=[];

const waitInput =  () => {
  return readline.question()
}

const inputDate = async () => {
  let date = moment()
  let OK = false
  while (!OK){
    print(`Prease input date(${date.format('YYYY/MM/DD')})    `)
    try {
      const tmp = await waitInput()
      if (tmp === '') {
        OK = true
        break
      }
      date = moment(tmp, 'M/D')
      OK = date.isValid()
    } catch (e) {

    }
  }
  return date
  
}

const inputTitle = async () => {
  print('Prease input article title:  ')
  return await waitInput()
}

const inputCategory = async () => {
  categories = []
  while(true) {
    print('Prease input category (if empty, end input.):  ')
    const input = await waitInput()
    if (input === '') {
      break
    }
    categories.push('  - ' + input)
  }
  return categories.join('\n')
}

const init = async () => {
  const date = await inputDate()
  const title = await inputTitle()
  const categories = await inputCategory()
  const dirPath = './src/_posts/' + date.format('YYYYMMDD/')
  const filePath = dirPath + `${title}.md`
  mkdirp.sync(dirPath, 0755)

  const template = fs.readFileSync('./commands/index-template.md').toString('utf-8')

  const index = template.replace(/{{title}}/g, title).replace(/{{categories}}/g, categories).replace(/{{date}}/, date.format('YYYY-MM-DD'))
  fs.writeFileSync(filePath, index)
  console.log('file maked')
  process.exit(0)
}
init()
