/* var vezes = 1
console.log(`#### Loop ${vezes} ####`)
for (var cont = 1; cont <= 5; cont++){
    console.log(`Passo ${cont}.`)
    if (vezes < 5 & cont == 5){
        vezes ++
        cont = 0
        console.log(`#### Loop ${vezes} ####`)
    }
} */
var vezes = 1
while (vezes <= 5) {
    console.log(`#### Loop ${vezes} ####`)
    for(var cont = 1; cont <= 5; cont++) {
        console.log(`Passo ${cont}.`)
    }
    vezes ++
}
/* for (var x = inicio; x <= fim; x++) {
    console.log(`##### Loop ${x} ####`)
    for(var y = 1; y <= 5; y++){
        console.log(`Passo ${y}`)
    }
} */