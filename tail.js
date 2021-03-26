// node tail.js file.txt
// Affiche les 10 dernières lignes du fichier file.txt.
// Gestion de l'erreur si pas le bon nombre d'arguments.
// Gestion de l'erreur si file.txt n'existe pas.

const fs = require('fs')

if (process.argv.length !== 3) {
  console.log('please enter one argument !')
  process.exit(1)
}
 // Check if fichier existe 2em argument 
if (!fs.existsSync(process.argv[2])) { 
  console.log(`Error: ${process.argv[2]} does not exist`)
  const op = readlineSync.question(chalk.yellow(`do you want create new file ?`))
  fs.writeFileSync(process.argv[2], ' ', 'utf-8')
}


const fl = process.argv[2]
txt = fs.readFileSync(process.argv[2], 'utf-8')

console.log(txt)





