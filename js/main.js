const domSubmitButton = document.getElementById ('#submit');
const domResetButton = document.getElementById ('#reset');

const nomeCliente = document.getElementById('#nomeCliente');
const nameReported = nomeCliente.value ;


domSubmitButton.addEventListener('click', 

     function ()  {
        const nomePasseggero = document.getElementById ('#nomePasseggero');
        nomePasseggero.innerHTML = `${nameReported}`;
    });