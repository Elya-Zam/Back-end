let nome = 'Elyã'
let idade = 15

let texto = 'Olá, meu nome é '+ nome + ' e eu tenho '+ idade+ ' anos'
console.log(texto.toUpperCase())
console.log(texto.toLocaleLowerCase())

let number = 12
console.log(typeof number)

let peso = 67
let altura = 1.63
let IMC = (peso/(altura**2)).toFixed(2)
console.log('Seu IMC é '+ IMC)      