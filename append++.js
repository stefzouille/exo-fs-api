const fs = require('fs') 
// les const
let srcPath = ''
const tgtPath = `./${process.argv[process.argv.length-1]}`
let txt =''
let srcList =''
let position =''

// les test 
if(process.argv.length < 4){
  console.log(`Error: srcFile and(or) targetFile exepted`)
  process.exit(1)
}
for(let i = 2 ; i < process.argv.length-1 ; ++i){
  srcPath = `./${process.argv[i]}`
  console.log(srcPath)
   if(!fs.existsSync(srcPath)){
    console.log(`Error: srcFile does not exist`)
    process.exit(1)
  }
  if(srcPath === tgtPath){
    console.log(`src and target files have the same name`)
    process.exit(1)
  }
  
  let srcTest = fs.statSync(srcPath)
  if(!srcTest.isFile()){
    console.log(`Error: ${process.argv[i]} is not a file`)
    process.exit(1)
  }

  srcList += srcPath[i]
  position += srcTest.size
  txt += `${fs.readFileSync(srcPath,'utf-8')}\n`
}


fs.writeFileSync(tgtPath,txt)

console.log(`${srcPath} copied to ${tgtPath}`)
console.log(`-----------`)
console.log(txt)