// Ce programme n'utilise pas l'api fs

// node echo.js hello hard fork
// hello hard fork

//Affiche à l'écran les strings passées en arguments.

// const echo = process.argv[2]
// for ( let i =0; i < echo[2].length; i++)

 //console.log(process.argv[2] + ' ' + process.argv[3] + ' ' + process.argv[4])
 

//  let go = ''

// for (let i = 2; i < process.argv.length; ++i) {
//   go += ` ${process.argv[i]}`
// }
// console.log(go.trim())
let result = ''

for (let i = 2; i < process.argv.length; ++i) {
  result = result + process.argv[i] + ' '
}
console.log(result)