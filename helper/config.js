const fs = require('fs')
const xml2js = require('xml2js')

const parser = new xml2js.Parser()
const xmlBuilder = new xml2js.Builder()

const { getInfo, convertOptions } = require('./common')

const configFile = './config.xml'

const appInfo = getInfo()
const { lang } = convertOptions(process.argv)

const appName = appInfo.name[lang]
const description = appInfo.description[lang]

fs.readFile(configFile, (err, data) => {
  parser.parseString(data, (err, result) => {
    result.widget.name = [appName]
    result.widget.description = [description]
    var xml = xmlBuilder.buildObject(result)
    fs.writeFileSync(configFile, xml)
  })
})
