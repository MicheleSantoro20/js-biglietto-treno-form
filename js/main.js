const domSubmitButton = document.getElementById ('submit');
const domResetButton = document.getElementById ('reset');

const nomeCliente = document.querySelector('#nomeCliente');
let km = document.querySelector('#nKm');
let offerte = document.querySelector('#offerte');
const minorenne = document.querySelector('#value1');
kmPercorsi = parseInt(km.value);
priceKm = kmPercorsi * 0.21;

console.log(priceKm);



domSubmitButton.addEventListener('click', 

     function ()  {

        nomePasseggero.innerHTML = `${nomeCliente.value}`;
        let età = document.querySelector('#age').value;

        if (età == "minorenne"){
            offerte.innerHTML = 'Offerta Minorenni';
            
        }else if  (età == "maggiorenne"){
            offerte.innerHTML = 'Nessuna offerta';
        } else {
            offerte.innerHTML = 'Offerta Silver';
        }

        console.log(priceKm);

        


    });