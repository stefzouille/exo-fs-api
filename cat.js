// Affiche le contenu de file.txt sur l'écran Gestion d'erreur si pas le bon nombre d'arguments.
// Gestion d'erreur si file.txt n'existe pas.


const fs = require('fs')




if (process.argv.length !==3) {
  console.log(`usage: please enter one argument xxx.txt`)
  process.exit(1)
}

// //check verif file exist
if (!fs.existsSync(process.argv[2])) {
  console.log(`Error : ${process.argv[2]} does not exist`)
  process.exit(1)
}
let stats = fs.statSync(process.argv[2])

if (!stats.isFile()) {
  console.log('babamal')
process.exit(1)
}

let txt = fs.readFileSync(process.argv[2], 'utf-8')
console.log(txt)