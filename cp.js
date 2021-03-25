
// Copie src.txt vers dst.txt.
// Gestion d'erreur si pas le bon nombre d'arguments.
// Gestion d'erreur si src.txt n'existe pas.

const fs = require('fs')
const readlineSync = require('readline-sync')
const chalk = require('chalk')

//check si le bon nombre d argument
if (process.argv.length !==4) {
  console.log(`usage: please enter one argument xxx.txt`)
  process.exit(1)
}

// Check if Directory existe 
if (!fs.existsSync(process.argv[2])) { // Verification Direcotry si il existe
  console.log(`Error: ${process.argv[2]} does not exist`)
  const op = readlineSync.question(chalk.yellow(`you want create file in new file ?`))
}
fs.writeFileSync('./src.txt', 'dst.txt')

fs.readFileSync(process.argv[2], 'utf-8')



fs.copyFileSync(process.argv[2], process.argv[3])

