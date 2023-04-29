/* 
Eventos DOME

evento ( metodo) e tudo que pode acontecer com um elemento (div)
 ex: meusenter(quando o mouse sobrepoem a div)
   mousemove
   mousedown
   mouseup
   click
   mouseout

funções 
   e um conjunto de codigo que so sera execultado quando o evento ocorrer
   as linhas progamades são chamado de block
   um block em Js e delimitado por sinais de "{bloco}"
   ele presisa ser nomeado com uma function e um nome para  a acção

 ex:function ação (param(opicional)){


}

*/
var area = document.getElementById('area')
function clicar(){
    area.innerHTML = 'você achou o ablilobaldo *-*'
    area.style.background = 'red'
    area.style.width = '200px'
    area.style.height = '200px'
    area.style.textAlign = 'center' 
    area.style.lineHeight = '200px'
}

function entrar(){
    area.innerHTML = 'acessou'
}

function sai(){
    area.innerHTML = '#VitorioNasista'
    area.style.background = 'none'
    
}



//console.log(area)
//console.log(`o elemento foi ${area}`)
//var title = document.getElementById(`title`)
//console.log(titulo)

