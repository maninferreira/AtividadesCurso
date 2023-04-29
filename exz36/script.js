function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var input_ano = Number(document.getElementById(`input_ano`).value)
    var resultado = document.getElementById(`resultado`)
    var idade = ano - input_ano
    /* resultado.innerHTML = `<p>Você está com ${idade} anos!</p>` */
    var input_radio = document.getElementsByName('radsex')
    var genero = ''

    var img = document.createElement(`img`)
    img.setAttribute(`id`,`foto`)

    if (input_radio[0].checked) {
        genero = 'Homem'
        if (idade < 12) {
            img.setAttribute('src','imagem/menino.png')
        } else if (idade < 18) {
            img.setAttribute('src','imagem/jovemM.jpg')
        } else if(idade < 60) {
            img.setAttribute('src','imagem/homem.')
        } else {
            img.setAttribute('src','imagem/velho.jpeg')
        }

    } else {
        genero = 'Mulher'
        if (idade < 12) {
            img.setAttribute('src','imagem/menina.jpg')
        } else if (idade < 18) {
            img.setAttribute('src','imagem/jovemF.')
        } else if(idade < 60) {
            img.setAttribute('src','imagem/mulher.')
        } else {
            img.setAttribute('src','imagem/velha.')
        }
    }

resultado.appendChild(img)

}

