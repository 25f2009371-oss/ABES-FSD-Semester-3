const fs = require('fs').promises;

async function writeFile(){

try{
await fs.writeFile("promise.txt","Hello students");

console.log("File created and data written succeffully")
}

catch(error){
    console.log("Error: ",error)
}

}

writeFile();


async function readFile() {
    try{
const data=await fs.readFile("promise.txt","utf-8")
console.log("file content: ",data)

    }

catch (error){
    console.log("Error",error);
}




}
readFile()






async function renamefile(params) {
    
try{
await fs.rename('promise.txt','promise_new.txt');
console.log("file renamed succefully")

}

catch(err){
    console.log("Error: ",err)
}



}

renamefile()

