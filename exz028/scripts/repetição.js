function contadorFor() {
    var resultadoFor = document.getElementById('resultadoFor')
    resultadoFor.innerHTML = ''
    for (var cont = 0; cont <= 5; cont++) {
        resultadoFor.innerHTML += `Passo ${cont}<br>`
    }
}

function contadorWhile() {
    var resultadoWhile = document.getElementById('resultadoWhile')
    resultadoWhile.innerHTML = ''
    var cont = 0
    while (cont <=5) {
        resultadoWhile.innerHTML += `Passo ${cont}<br>`
        cont++
    }
}

function contadorDoWhile() {
    var resultadoDoWhile = document.getElementById('resultadoDoWhile')
    resultadoDoWhile.innerHTML = ''
    var cont = 0
    do{
        resultadoDoWhile.innerHTML += `Passo ${cont}<br>`
        cont++
    } while (cont <= 5)
}