// Affiche le contenu de file.txt sur l'écran Gestion d'erreur si pas le bon nombre d'arguments.
// Gestion d'erreur si file.txt n'existe pas.

// Améliorer l'exercice cat.js précédent en ajoutant la possibilité d'afficher plusieurs fichiers.

// 



const fs = require('fs')




if (process.argv.length !== 5) {
  console.log(`usage: please enter one argument xxx.txt`)
  process.exit(1)
}

// //check verif file exist
// if (!fs.existsSync(process.argv[2])) {
//   console.log(`Error : ${process.argv[2]} does not exist`)
//   process.exit(1)
// }
let stats = fs.statSync(process.argv[2])

if (!stats.isFile()) {
  console.log('babamal')
process.exit(1)
}


let txt1 = fs.readFileSync('./file1.txt', 'utf-8')                               //sechage complet
let txt2 = fs.readFileSync('./file2.txt', 'utf-8')
let txt3 = fs.readFileSync('./file3.txt', 'utf-8')
console.log(txt1, txt2, txt3)