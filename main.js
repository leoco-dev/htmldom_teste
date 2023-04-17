const form = document.querySelector('#form-comparar');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    document.querySelector('.sucess-msg').style.display = 'none';
    document.querySelector('.error-msg').style.display = 'none';
        
    let valorMenor = document.querySelector('#valor-menor');
    let valorMaior = document.querySelector('#valor-maior');
    const maiorNumber =  parseInt(valorMaior.value);
    const menorNumber =  parseInt(valorMenor.value);
    const comparaNumero = maiorNumber > menorNumber;
    const msgSucesso = `Está certo, muito bem! <b>${valorMenor.value}</b> é menor que <b>${valorMaior.value}</b>`;
    const msgError = `Ops, tente novamente! <b>${valorMenor.value} não </b> é menor que <b>${valorMaior.value}</b>`;

    if (comparaNumero) {
        let containerMsgSucess = document.querySelector('.sucess-msg');
        containerMsgSucess.innerHTML = msgSucesso;
        containerMsgSucess.style.display = 'inline';

        valorMaior.value = "";
        valorMenor.value = "";

    } else {
        let containerMsgSucess = document.querySelector('.error-msg');
        containerMsgSucess.innerHTML = msgError;
        containerMsgSucess.style.display = 'inline';

        valorMaior.value = "";
        valorMenor.value = "";
    }
})