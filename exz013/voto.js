var idade = 17

//manores de 16 anos não votam 
//ente 16 a 18 voto opicional 
//maiores de 18 voto e obrigatorio
//acima de 70 voto opicional

if (idade < 16) {
    console.log('Não vota')
}else if (idade < 18 || idade >= 70) {
    console.log('voto opcional')
} else{
    consolconsole.log('voto obrigatorio')
}
