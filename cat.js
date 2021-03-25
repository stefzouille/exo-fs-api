// Affiche le contenu de file.txt sur l'écran Gestion d'erreur si pas le bon nombre d'arguments.
// Gestion d'erreur si file.txt n'existe pas.


const fs = require('fs')


let txt = fs.readFileSync('./file.txt', 'utf-8')

console.log(txt)