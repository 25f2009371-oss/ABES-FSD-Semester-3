const fs = require('fs')
fs.writeFileSync('secastudent.txt','This is the experiment1','utf-8')
console.log('file is wrriten succefuly')



const data=fs.readFileSync("secastudent.txt","utf-8")
console.log("File content is given as: ",data);





fs.appendFileSync('secastudent.txt','\n This ther new line addesss')
console.log('File is appended')

/*
fs.read

fs.unlinkSync



fs.mkdirSync('sample folder')
console.log('new folder')
*/

fs.rmdirSync('sample folder')
console.log('deleted folder')