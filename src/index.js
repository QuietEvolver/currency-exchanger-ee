// import { privateName } from '@babel/types';
import './assets/css/styles.css';
import CurrencyService from './service/currency-service.js';

function getCurrency(currency){
  let promise = CurrencyService.getCurrency(currency);
  console.log("Promise get currency: ", currency);
  

  promise.then(function (data){
    console.log("getC res data: ", data)
    printElements(data);
  }, function(error) {
    printError(error);
  });
}

function printElements(data, currencyUSD){
  try {
    // console.log("response: ", response);
    // const baseCode = response.base_code;
    const conversionRates = data.conversion_rates; // aka Object.values(c)[7]
    let dollars = Object.values(data)[8].USD;
    let USD = currencyUSD* dollars; 
    console.log("dollars: ", dollars);
    console.log("USD: ", USD);
    // const USD = response.base_code("USD");
    // console.log("USD", USD);
    
    // if(baseCode === USD){
    //   console.log("I am in conversion USD", baseCode, conversionRates);
    //   return conversionRates;
    // }
    document.querySelector("#showResponse").innerText = `Res: rates are for your $ ${dollars} in USD`;// ${response} with base code: ${response.base_code} and
    return Object.values(Object.keys(conversionRates));
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
  console.log("currency USD input: ", currencyUSD)
  document.getElementById("currencyUSD").value = null;
  
  getCurrency(currencyUSD);
  let currency = currencyUSD;
  console.log("currency e: ", currency);
  // console.log("printElements currencyUSD: ", printElements(currency));
  // console.log("currencyUSD input: ", getCurrency(currencyUSD));
  // console.log("currency USD input: ", getCurrency(currencyUSD));
  // const currency = document.getElementById("currency").value;
  // document.getElementById("currency").value = null;
  // getCurrency(currency);
}

window.addEventListener("load", function(){
  this.document.querySelector("form").addEventListener("submit", handleFormSubmit);
});


