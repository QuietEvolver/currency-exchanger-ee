// import { privateName } from '@babel/types';
import './assets/css/styles.css';
import CurrencyService from './service/currency-service.js';

function getCurrency(currency){
  let promise = CurrencyService.getCurrency(currency);
  console.log("Promise get currency: ", currency);
  promise.then(function (data){
    console.log("getC res data: ", data)
    let dollars = Object.values(data)[8].USD;

    console.log(" get currency dollars: ", dollars);

    printElements(data);
  }, function(error) {
    printError(error);
  });
}

function printElements(response){
  try {
    // console.log("response: ", response);
    // const baseCode = response.base_code;
    // const conversionRates = response.conversion_rates; // aka Object.values(c)[7]
    let dollars = Object.values(response)[8].USD;
    let francs = Object.values(response)[8].FRF;
    let roubles = Object.values(response)[8].RUB;
    let cordobas = Object.values(response)[8].NIO;
    let naira = Object.values(response)[8].NGN;
    let won = Object.values(response)[8].KPW;
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
    document.querySelector("#showResponse").innerText = `Res: rates are for your $ ${dollars} in USD \n
    Franc(s) ₣ ${francs} \n 
    Rouble(s) ₽ ${roubles} \n 
    Cordoba(s) C$ ${cordobas} \n 
    Naira(s) ₦ ${naira} \n 
    Won(s) ₩ ${won} \n `
    ;// ${response} with base code: ${response.base_code} and
    // return Object.values(Object.keys(conversionRates));
    // my base code = USD
    // if User wants X, 
    // then { conversionRates will return USD in X format } 
    // if User wants Y, 
    // then { conversionRates will return USD in Y format } 
    // if User wants Z, 
    // then { conversionRates will return USD in Z format } 
    // if User wants Y, 
    // then { conversionRates will return USD in Y format } 
    // if User wants A, 
    // then { conversionRates will return USD in A format } 
    // if User wants B, 
    // then { conversionRates will return USD in B format } 
  } catch (error) {
    document.querySelector("p#showResponse").innerText += "This is not available. Check back later.";
  }
}

function printError(error) {
  document.querySelector("#showResponse").innerText = `Error: ${error}`;
}


function handleFormSubmit(e) {
  e.preventDefault();

  document.getElementById("showResponse").innerText = "";
  const currencyUSD = document.getElementById("currencyUSD").value;
  console.log("e currency USD input: ", currencyUSD);
  document.getElementById("currencyUSD").value = null;
  
  getCurrency(currencyUSD);
  let currency = currencyUSD;
  console.log("currency e: ", currency);
}

window.addEventListener("load", function(){
  this.document.querySelector("form").addEventListener("submit", handleFormSubmit);
});


