
// Copie src.txt vers dst.txt.
// Gestion d'erreur si pas le bon nombre d'arguments.
// Gestion d'erreur si src.txt n'existe pas.

const fs = require('fs')
const readlineSync = require('readline-sync')
const chalk = require('chalk')

//check si le bon nombre d argument
if (process.argv.length !== 4 ) {
  console.log(`usage: please enter one argument xxx.txt`)
  process.exit(1)
}

// Check if fichier existe 2em argument 
if (!fs.existsSync(process.argv[2])) { 
  console.log(`Error: ${process.argv[2]} does not exist`)
  const op = readlineSync.question(chalk.yellow(`do you want create new file ?`))
  fs.writeFileSync(process.argv[2], ' ', 'utf-8')
}


//  let coco = 'src.txt'

// if (fs.existsSync(coco)) { // Verification Directory si il existe
//   console.log(`Error: ${process.argv[2]} file exist`)
//   process.exit(1)
// }

// //creer le xx.txt et copie le new txt

// fs.writeFileSync(coco, 'dst.txt') 
if (fs.existsSync(process.argv[3])) {
  console.log(`erreur ce fichier existe deja`)
  process.exit(1)
}


//lis le 2eme arg de la ligne de cmd node
fs.readFileSync(process.argv[2], 'utf-8')


//copie le argv2 vers argv3
fs.copyFileSync(process.argv[2], process.argv[3])

