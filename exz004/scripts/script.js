// operações algebricas

var a = 5 + 3                // adição
var b = a % 5                // resto da divisão
var c = 5 * b ** 2           //multiplicação e expoente
var d = 10 - a / 2           //subtração e divisão
var e = 6 * 2 / d            //multiplicação e divisão
var f = b % e + 4 / e        //resto da divisão, adição e divisão 

document.write(`<h1> o valor de a é: ${a} </h1>`)
document.write(`<h2> o valor de a é: ${b} </h2>`)
document.write(`<h3> o valor de a é: ${c} </h3>`)
document.write(`<h4> o valor de a é: ${d} </h4>`)
document.write(`<h5> o valor de a é: ${e} </h5>`)
document.write(`<h6> o valor de a é: ${f} </h6>`)

//operador ternario
//? , : 

var média = 7
var resultado = média >= 7 ? 'ficou no sol e passou o bronze' : 'gostou do lanche e repitiu'

document.write(`o aluno foi <strong> ${resultado}</strong>`)
