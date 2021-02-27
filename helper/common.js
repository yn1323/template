const fs = require('fs')

const getInfo = () => {
  let rawdata = fs.readFileSync('info.json');
  return JSON.parse(rawdata)
}

const convertOptions = (arr) => {
  const options = {}
  let optionName = ''
  arr.forEach((v) => {
    if(optionName){
      options[optionName] = v
      optionName = ''
    }
    if(v.startsWith('--')){
      options[v.replace('--', '')] = ''
      optionName = v.replace('--', '')
    }
  })
  return options
}

module.exports = {
  getInfo,
  convertOptions
}
