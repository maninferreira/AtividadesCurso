
var contador = 0

function incrementar(){
   if (contador < 100000){ //executar um trecho de código somente se uma determinada condição for verdadeira.
    contador ++;
    document.getElementById("contador").innerHTML = contador;
   }
}

function resetar(){
    contador = 0
     document.getElementById("contador").innerHTML = contador;
}
 











//let count = 0;


//const button = document.getElementById("myButton");
//button.addEventListener("click", () => {
 // count++;
//  document.getElementById("countDisplay").innerHTML = count;
//});

