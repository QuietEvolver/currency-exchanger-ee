// import { privateName } from '@babel/types';
import './assets/css/styles.css';
import CurrencyService from './service/currency-service.js';

function getCurrency(currency){
  let promise = CurrencyService.getCurrency(currency);
  console.log("Promise get currency: ", currency);
  promise.then(function (data){
    console.log("getC res data: ", data);
    let dollars = Object.values(data)[8].USD;
    let currencyIntake = currency * dollars; 
    // console.log(" get currency dollars: ", dollars); // $1 
    // console.log(" get currency USD intake calc: ", currencyIntake); // $20
    // document.querySelector("#showResponse").innerText = `Res in promise call: rates are for your $ ${USD} in USD \n`;

    printElements(data, currencyIntake);
  }, function(error) {
    printError(error);
  });
}

function printElements(data, currencyIntake){

  // let dollars = currency * dollar;
  // console.log("TprintElements ßcurrency: ", dollars);
  console.log("TprintElements currency: ", currencyIntake);
  // let currency = data.currency ;
 
    let dollar = Object.values(data)[8].USD;
  try { 
    if(currencyIntake > 0){

      console.log("TprintElements dollar: ", dollar);
      
      console.log("If STMT ßcurrency: ", currencyIntake);
      return currencyIntake;
  }
    // console.log("TryCatch response: ", response);
    console.log("TryCatch data: ", data);
    console.log("TryCatch ßcurrency: ", dollar);
    // const baseCode = response.base_code;
    // const conversionRates = response.conversion_rates; // aka Object.values(response)[7]
    
    // RESPONSE.CONVERSION_RATE x usdCurrencyDOMIntake = rate;
    let dollars = Object.values(data)[8].USD;
    let euros = Object.values(data)[8].EUR;  // https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/EUR
      // currencyIntake *= euros;
    let roubles = Object.values(data)[8].RUB; // https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/RUB
    let cordobas = Object.values(data)[8].NIO; // https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/NIO
    let nairas = Object.values(data)[8].NGN; // https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/NGN
    let pounds = Object.values(data)[8].GBP; // https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/GBP 
    // let USD = currencyUSD * dollars; 
    console.log("dollars: ", dollars);
    // console.log("currencyUSD: ", currencyUSD);
    // console.log("USD: ", USD);
    // const USD = response.base_code("USD");
    // console.log("USD", USD);
    
    // if(baseCode === USD){
    //   console.log("I am in conversion USD", baseCode, conversionRates);
    //   return conversionRates;
    // }
    document.querySelector("#showResponse").innerText = `Res: rates are for your USD $ ${currencyIntake} \n
    for every USD $ ${dollars} \n
    Euro(s) € ${euros} \n 
    Rouble(s) ₽ ${roubles} \n 
    Cordoba(s) C$ ${cordobas} \n 
    Naira(s) ₦ ${nairas} \n 
    Pound(s) £ ${pounds} \n `;
    // ${response} with base code: ${response.base_code} and
    // return Object.values(Object.keys(conversionRates));
    // my base code = USD
    // if User wants X, 
    // then { conversionRates will return USD in X format } 
    // if User wants Y, 
    // then { conversionRates will return USD in Y format } 
    // if User wants Z, 
    // then { conversionRates will return USD in Z format } 
    // if User wants A, 
    // then { conversionRates will return USD in A format } 
    // if User wants B, 
    // then { conversionRates will return USD in B format } 
    // if User wants C, 
    // then { conversionRates will return USD in C format } 
  } catch (error) {
    document.querySelector("p#showResponse").innerText += "This is not available. Check back later.";
  }
}

function printError(error) {
  document.querySelector("#showResponse").innerText = `Error: ${error}`;
}

function handleFormSubmit(e) {
  e.preventDefault();

  const currencyUSD = document.getElementById("currencyUSD").value;
  // console.log("e currency USD input: ", currencyUSD);
  document.getElementById("currencyUSD").value = null;
  const currencyType = document.querySelector("input[name='currency-type']:checked").value;
  console.log("currencyType: ", currencyType);
  document.getElementById("showResponse").innerText = "";

  getCurrency(currencyUSD);
}

window.addEventListener("load", function(){
  this.document.querySelector("form").addEventListener("submit", handleFormSubmit);
});


