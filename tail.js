// node tail.js file.txt
// Affiche les 10 dernières lignes du fichier file.txt.
// Gestion de l'erreur si pas le bon nombre d'arguments.
// Gestion de l'erreur si file.txt n'existe pas.

const fs = require('fs')

if (process.argv.length !== 3) {
  console.log('please enter one argument !')
  process.exit(1)
}

// if (process.argv[2] === file.txt) {
//   console.log('please enter .txt !')
//   process.exit(1)
// }

txt = fs.readFileSync('./file.txt', 'utf-8')


console.log(txt)         