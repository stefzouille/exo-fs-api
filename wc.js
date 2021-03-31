const fs = require('fs') 
const path = `./${process.argv[2]}`
let fileName = process.argv[2]

//les test 
if(process.argv.length !== 3){
  console.log(`Error: this command exepts only one argument`)
  process.exit(1)
}

if(!fs.existsSync(path)){
  console.log(`Error: srcFile does not exist`)
  process.exit(1)
}

const txt = fs.readFileSync('file.txt','utf-8')

console.log(`${txt.split(`\n`).length} ${txt.split(` `).length} ${txt.length} ${fileName}`)
© 2021 GitHub, Inc.