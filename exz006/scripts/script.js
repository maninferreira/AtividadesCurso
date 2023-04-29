function soma(){
var numer_1 = Number (document.getElementById('num-1').value)
var numer_2 = Number (document.getElementById('num-2').value)

var soma = numer_1 + numer_2

var resultado = document.getElementById('resultado')

resultado.innerHTML = `A soma entre ${numer_1} e ${numer_2 } e igual a <strong>${soma}</strong>`
}


function subtração(){
 var numero_1 = Number(document.getElementById('num-3').value)
 var numero_2 = Number(document.getElementById('num-4').value)
        
 var subtrair = numero_1 - numero_2
        
 var resultados = document.getElementById('resultado2')
        
 resultados.innerHTML = `A soma entre ${numero_1} e ${numero_2} e igual a <strong>${subtrair}</strong>`
}
