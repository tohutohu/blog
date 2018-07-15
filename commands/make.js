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
  print('Prease input category:  ')
  return await waitInput()
}

const init = async () => {
  const date = await inputDate()
  const title = await inputTitle()
  const category = await inputCategory()
  const dirPath = './src/' + date.format('YYYY/MM/DD/') + title
  const yearListPath = './src/' + date.format('YYYY') + '/index.md'
  const monthListPath = './src/' + date.format('YYYY/MM')+ '/index.md'
  const filePath = dirPath + '/index.md'
  mkdirp.sync(dirPath, 0755)

  const listTemplate = fs.readFileSync('./commands/list-template.md').toString('utf-8')
  fs.writeFileSync(yearListPath, listTemplate.replace(/{{time}}/g, date.format('YYYY') + '年'))
  fs.writeFileSync(monthListPath, listTemplate.replace(/{{time}}/g, date.format('M') + '月'))

  const template = fs.readFileSync('./commands/index-template.md').toString('utf-8')

  const index = template.replace(/{{title}}/g, title).replace(/{{}}/g, category)
  fs.writeFileSync(filePath, index)
  console.log('file maked')
  process.exit(0)
}
init()
