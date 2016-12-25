import './style.scss'
import { isReady, smallAjax, bgChanger } from './smallLib';

function loadRates(url, inputSellary, usdContainer, rate) {
    smallAjax(url).then((response)=> {
        let rouble = response.rates.RUB;
        let sellaryValue = +inputSellary.value;
        let usdSell = sellaryValue / rouble;

        localStorage.setItem('storedRate', rouble);
        localStorage.setItem('sellary', sellaryValue);
        usdContainer.innerHTML = '$' + usdSell.toFixed();
        rate.innerHTML = '1 USD = ' + rouble.toFixed(2) + ' RUB';
    }, (reject)=> {
        var rub = +localStorage.getItem('storedRate') || 62;
    });
}

isReady(function () {
    var inputSellary = document.getElementById('input-amount');
    var button = document.getElementById('calculate');
    var url = 'https://openexchangerates.org/api/latest.json?app_id=f6a6b00781654a1bb1c07706f3019366';
    var usdContainer = document.getElementById('usd-amount');
    var rate = document.getElementById('rate');

    inputSellary.value = localStorage.getItem('sellary') || 20000;
    button.addEventListener('click', function () {
        this.classList.add('disabled');
        loadRates(url, inputSellary, usdContainer, rate);

    });
});
