const domSubmitButton = document.getElementById ('submit');
const domResetButton = document.getElementById ('reset');

const nomeCliente = document.querySelector('#nomeCliente');

let offerte = document.querySelector('#offerte');
const minorenne = document.querySelector('#value1');




domSubmitButton.addEventListener('click', 

     function ()  {

        nomePasseggero.innerHTML = `${nomeCliente.value}`;
        let età = document.querySelector('#age').value;
        let km = document.querySelector('#nKm').value;
        const priceKm = km * 0.21;


        if (età == "minorenne"){
            offerte.innerHTML = 'Offerta Minorenni';
            
        }else if  (età == "maggiorenne"){
            offerte.innerHTML = 'Nessuna offerta';
        } else {
            offerte.innerHTML = 'Offerta Silver';
        }

        console.log(priceKm);

        


    });