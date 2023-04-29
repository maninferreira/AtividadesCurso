// variaveis composta
// Array

var lista = [2,5,9,4] // isso declara uma variavel do tipo Array com os valores 2, 5, 9, e 4.

var nomes = ['weverton','hitalo','geo','vitorio','marcus','jaderson','breno']

console.log(lista[3])

console.log(nomes[1])

console.log(`a lista contem ${lista.length} valores`) // lenght retorna o tamanho da lista.

for(var c= 0; c < nomes.length; c++) {
    console.log(nomes[c])
}

lista.unshift(51)
console.log(lista)// adiciona um valor no inicio do  Array (lista)

lista.push('senac')
console.log(lista)// adiciona um valor no final do  Array (lista)

lista.pop() 
console.log(lista)//remove o utimo elemento da lista 

lista.shift() 
console.log(lista)//remove o primeiro elemento da lista 

lista.sort() 
console.log(lista)// coloca em ordem cresente

lista.reverse()
console.log(lista)//coloca em ordem decrescente

console.log(nomes.indexOf('breno'))// buscar a posição de um elemento dentro de uma lista 

lista.splice(0,1, 'wallas','richardo')// substitue ou adiciona elemento

var cadrasto = [
    ['jad', 33, '70kg', 1.69,['frascisco','marlene']]
    ['geo',16,'49kg',1.56]
]

console.log(cadrasto[0])
console.log(cadrasto[0][4][1])

