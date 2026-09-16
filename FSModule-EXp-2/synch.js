const fs = require('fs')
fs.writeFileSync('secastudent.txt','This is the experiment1','utf-8')
console.log('file is wrriten succefuly')


const data=fs.readFileSync("secastudent.txt","utf-8")