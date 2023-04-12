const form = document.querySelector('#form-comparar');
let valorMenor = document.querySelector('#valor-menor');
let valorMaior = document.querySelector('#valor-maior');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const comparaNumero = valorMaior.value > valorMenor.value;
    const msgSucesso = `Está certo, muito bem! <b>${valorMaior.value}</b> é maior que <b>${valorMenor.value}</b>`;
    if (comparaNumero) {
        let containerMsgSucess = document.querySelector('.sucess-msg');
        containerMsgSucess.innerHTML = msgSucesso;
        containerMsgSucess.style.display = 'inline';

        valorMaior.value = "";
        valorMenor.value = "";

    } else {
        // alert(`Está errado, tente novamente! ${valorMaior.value} é menor que ${valorMenor.value}`);

        document.querySelector('.error-msg').style.display = 'inline'
        valorMenor.style.border = '1px solid'

        valorMaior.value = "";
        valorMenor.value = "";
    }
})

console.log(form);