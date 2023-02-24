const domSubmitButton = document.getElementById ('submit');
const domResetButton = document.getElementById ('reset');

let nomeCliente = document.querySelector('#nomeCliente');
const ticketPrice = document.getElementById('costoBiglietto')
let offerte = document.querySelector('#offerte');
const minorenne = document.querySelector('#value1');

let carriage = document.querySelector('#carrozza');
let trainNumber = document.querySelector ('#numeroTreno');

let ticketInformation = document.querySelector('#ticketInformation');



domSubmitButton.addEventListener('click', 

     function ()  {

        ticketInformation.className = "d-block";
        nomePasseggero.innerHTML = `${nomeCliente.value}`;
        let età = document.querySelector('#age').value;
        let km = document.querySelector('#nKm').value;
        const priceKm = km * 0.21;

        carriage.innerHTML = Math.floor((Math.random() * 9)) + 1;
        trainNumber.innerHTML = Math.floor((Math.random() * 90000)) + 10000;



        if (età == "minorenne"){
            offerte.innerHTML = 'Offerta Minorenni';
            ticketPrice.innerHTML = (priceKm * 0.80).toFixed(2) + '€'  ;

            
        }else if  (età == "maggiorenne"){
            offerte.innerHTML = 'Nessuna offerta';
            ticketPrice.innerHTML = (priceKm).toFixed(2) + '€'  ;
        } else {
            offerte.innerHTML = 'Offerta Silver';
            ticketPrice.innerHTML = (priceKm * 0.60).toFixed(2) + '€' ;
        }

        console.log(priceKm);

        
    });

domResetButton.addEventListener('click', 
    function () {
        ticketInformation.className = "d-none";
        let km = document.querySelector('#nKm');

        nomeCliente.value = "";
        km.value = "";
    });