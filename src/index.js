import './style.scss'
import { isReady, smallAjax, bgChanger } from './smallLib';

function loadRates(url, sellaryValue, usdContainer, rate) {
  smallAjax(url).then((response)=> {
    let rouble = response.rates.RUB;
    let usdSellary = sellaryValue / rouble;
    let roubleFixed = rouble.toFixed(2);
    let usdSellaryFixed = usdSellary.toFixed();

    localStorage.setItem('storedRate', rouble);
    localStorage.setItem('sellary', sellaryValue);

    usdContainer.textContent = `$ ${usdSellaryFixed}`;
    rate.textContent = `1 USD = ${roubleFixed} RUB`;

  }, (reject)=> {
    let storageValue = localStorage.getItem('storedRate');
    let rub = parseInt(storageValue) || 62;
  });
}

isReady(function () {
  let inputSellary = document.getElementById('input-amount');
  let button = document.getElementById('calculate');
  let url = 'https://openexchangerates.org/api/latest.json?app_id=f6a6b00781654a1bb1c07706f3019366';
  let usdContainer = document.getElementById('usd-amount');
  let rate = document.getElementById('rate');

  inputSellary.value = localStorage.getItem('sellary') || 20000;
  button.addEventListener('click', function () {
    this.classList.add('disabled');
    let sellaryValue = parseInt(inputSellary.value);
    loadRates(url, sellaryValue, usdContainer, rate);

  });
});
