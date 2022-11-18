// import { privateName } from '@babel/types';
import './assets/css/styles.css';
import CurrencyService from './service/currency-service.js';

function getCurrency(currency){
  let promise = CurrencyService.getCurrency(currency);

  promise.then(function (data){
    printElements(data);
  }, function(error) {
    printError(error);
  });
}

function printElements(response){
  try {
    console.log("response: ", response);
    const baseCode = response.base_code;
    const conversionRates = response.conversion_rates;
    const USD = response.base_code("USD");
    console.log("USD", USD);
    
    if(baseCode === USD){
      console.log("I am in conversion USD", baseCode, conversionRates);
      return conversionRates;
    }

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
  const currency = document.getElementById("currency").value;
  document.getElementById("currency").value = null;
  getCurrency(currency);
  // const currency = document.getElementById("currency").value;
  // document.getElementById("currency").value = null;
  // getCurrency(currency);
}

window.addEventListener("load", function(){
  this.document.querySelector("form").addEventListener("submit", handleFormSubmit);
});


