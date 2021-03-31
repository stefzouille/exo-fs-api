const fs = require('fs') 
let nbLine = Number(process.argv[2])
let path = `./${process.argv[3]}`


// les test 
if((process.argv.length > 5)){
  console.log(`Error: this command exepts 3 two arg max`)
  process.exit(1)
}
//cas de l'option -n
if(process.argv.length === 5){

  nbLine = Number(process.argv[3])
  path = `./${process.argv[4]}`

  if(process.argv[2] !== '-n'){
    console.log(`Error: if you choose the option the first argument exepts only -n `)
    process.exit(1)
  }

}

if(isNaN(nbLine)){
  console.log(`Error: this command exepts only a number`)
  process.exit(1)
}


if(!fs.existsSync(path)){
  console.log(`Error: srcFile does not exist`)
  process.exit(1)
}

const txt = fs.readFileSync('file.txt','utf-8')
const lineT = txt.split(`\n`)

if(process.argv[2] === '-n'){
  console.log(`nb lines: ${lineT.slice((lineT.length)-20).length}`)
}else{
  console.log(`the 10 last lines of the ${path}:`)
  console.log(lineT.slice((lineT.length)-20).join(`\n`))
}