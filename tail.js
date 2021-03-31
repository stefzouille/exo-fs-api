// node tail.js file.txt
// Affiche les 10 dernières lignes du fichier file.txt.
// Gestion de l'erreur si pas le bon nombre d'arguments.
// Gestion de l'erreur si file.txt n'existe pas.

const fs = require('fs') 
const path = `./${process.argv[2]}`

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
const lineT = txt.split(`\n`)
console.log(lineT.slice((lineT.length)-20))






