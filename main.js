const form = document.querySelector('#form-comparar');

const valorMenor = document.querySelector('#valor-menor');
const valorMaior = document.querySelector('#valor-maior');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    limparResultado()
    comparaNumeroIgual()
    comparaNumero()
})

function comparaNumeroIgual() {    

    const comparaNumeroIgual = parseInt(valorMaior.value) == parseInt(valorMenor.value);
    
    const msgSimilar = `Não foi possível validar, os números: <b>${valorMenor.value}</b> e <b>${valorMaior.value}</b> são iguais.`;

    if(comparaNumeroIgual) {
        
        let containerMsgSimilar = document.querySelector('.similar-msg');
        containerMsgSimilar.innerHTML = msgSimilar;
        containerMsgSimilar.style.display = 'inline';

        valorMaior.value = "";
        valorMenor.value = "";

    }
}

function comparaNumero() {

    const comparaNumero = parseInt(valorMaior.value) > parseInt(valorMenor.value);
        
    const msgSucesso = `Está certo, muito bem! <b>${valorMenor.value}</b> é menor que <b>${valorMaior.value}</b>`;
    const msgError = `Ops, tente novamente! <b>${valorMenor.value} não </b> é menor que <b>${valorMaior.value}</b>`;

    if (comparaNumero) {
        let containerMsgSucess = document.querySelector('.sucess-msg');
        containerMsgSucess.innerHTML = msgSucesso;
        containerMsgSucess.style.display = 'inline';

        valorMaior.value = "";
        valorMenor.value = "";

    } else {
        let containerMsgError = document.querySelector('.error-msg');
        containerMsgError.innerHTML = msgError;
        containerMsgError.style.display = 'inline';

        valorMaior.value = "";
        valorMenor.value = "";
    }
}

function limparResultado() {
    
    document.querySelector('.sucess-msg').style.display = 'none';
    document.querySelector('.error-msg').style.display = 'none';
    document.querySelector('.similar-msg').style.display = 'none';
}