var nomes = []
var nome = document.getElementById('input-nome')
var lista = document.getElementById('lista')

function cadastrar() {
    if (nome.value != '') {
        if (nomes.indexOf(nome.value) == -1) {
            nomes.push(nome.value)
            nome.value = ''                                     //vai limpar para digitar um novo nome
            nome.focus()                                        // vai deixar o cusrso piscando dentro do campo nome 
        } else {
            lista.innerHTML(`O nome ${nome} já existe na lista.`);
        }

    } else {
        alert('digite um nome')
        nome.focus()
    }

}
function imprimir() {
    lista.innerHTML = ''
    for (var c = 0; c < nomes.length; c++) {
        lista.innerHTML += `<p> Aluno ${nomes[c]}</p>`
    }

}


function limpar() {
    nomes = []
    lista.innerHTML = ''
}