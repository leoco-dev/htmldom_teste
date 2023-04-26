const form = document.querySelector('#form-comparar')

const valorMenor = document.querySelector('#valor-menor')
const valorMaior = document.querySelector('#valor-maior')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    limparResultado()
    comparaNumeroIgual()
    comparaNumeroMaior()
    comparaNumeroMenor()
    limparValor()
})

function comparaNumeroIgual() {
    const comparaNumeroIgual = parseInt(valorMaior.value) === parseInt(valorMenor.value)
    const msgSimilar = `Ops, tente novamente! <b>${valorMenor.value}</b> e <b>${valorMaior.value}</b> são iguais.`

    if(comparaNumeroIgual) {        
        let containerMsgSimilar = document.querySelector('.similar-msg')
        containerMsgSimilar.innerHTML = msgSimilar
        containerMsgSimilar.style.display = 'inline'
    } 
}

function comparaNumeroMaior() {
    const comparaNumero = parseInt(valorMaior.value) > parseInt(valorMenor.value)
    const msgSucesso = `Está certo, muito bem! <b>${valorMenor.value}</b> é menor que <b>${valorMaior.value}</b>`

    if (comparaNumero) {
        let containerMsgSucess = document.querySelector('.sucess-msg')
        containerMsgSucess.innerHTML = msgSucesso
        containerMsgSucess.style.display = 'inline'
    }
}

function comparaNumeroMenor() {
    const comparaNumero = parseInt(valorMaior.value) < parseInt(valorMenor.value)
    const msgError = `Ops, tente novamente! <b>${valorMenor.value}</b> não é menor que <b>${valorMaior.value}</b>`

    if (comparaNumero) {
        let containerMsgError = document.querySelector('.error-msg')
        containerMsgError.innerHTML = msgError
        containerMsgError.style.display = 'inline'
    }
}

function limparResultado() {
    document.querySelector('.sucess-msg').style.display = 'none'
    document.querySelector('.error-msg').style.display = 'none'
    document.querySelector('.similar-msg').style.display = 'none'
}

function limparValor() {
        valorMaior.value = ""
        valorMenor.value = ""
}