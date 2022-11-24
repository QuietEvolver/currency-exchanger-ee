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
    document.querySelector("#showResponse").innerText = `Res rates are for your $ ${currencyIntake} in USD \n`;

    printElements(data, currencyIntake);
  }, function(error) {
    printError(error);
  });
}

function printElements(data, currencyIntake){
  try {  
    let dollar = Object.values(data)[8].USD;
    // RESPONSE.CONVERSION_RATE x usdCurrencyDOMIntake = rate;
    let dollars = Object.values(data)[8].USD;
    console.log("TryCatch data: ", data);
    console.log("TryCatch ßcurrency: ", dollar);
    // const baseCode = response.base_code;
    // const conversionRates = response.conversion_rates; // aka Object.values(response)[7]
    let euros = currencyIntake * Object.values(data)[8].EUR;  // https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/EUR
    // currencyIntake *= euros;
    console.log("euros: ", euros);
    let roubles = currencyIntake * Object.values(data)[8].RUB; // https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/RUB
    console.log("roubles: ", roubles);
    let cordobas = currencyIntake * Object.values(data)[8].NIO; // https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/NIO
    console.log("cordobas: ", cordobas);
    let nairas = currencyIntake * Object.values(data)[8].NGN; // https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/NGN
    console.log("nairas: ", nairas);
    let pounds = currencyIntake * Object.values(data)[8].GBP; 
    console.log("pounds: ", pounds);
    // if(currencyIntake > 0){
    //   console.log("TprintElements dollar: ", dollar);      
    //   console.log("If STMT ßcurrency: ", currencyIntake);
    //   // https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/GBP 
    //   // let USD = currencyUSD * dollars; 
    //   console.log("dollars: ", dollars);
    //   return currencyIntake;
    // } else if(this.currencyIntake === "euros"){
    //   currencyIntake = currencyIntake * euros;
    //   return currencyIntake;
    // } else if(this.currencyIntake === "roubles"){
    //   currencyIntake = currencyIntake * roubles;
    //   return currencyIntake; 
    // } else if(this.currencyIntake === "cordobas"){
    //   this.currencyIntake = cordobas;
    //   return this.currencyIntake;
    // } else if(this.currencyIntake === "nairas"){
    //   currencyIntake = currencyIntake * nairas;
    //   return currencyIntake; 
    // } else if(this.currencyIntake === "pounds"){
    //   this.currencyIntake = pounds;
    //   return this.currencyIntake;
    // }

    document.querySelector("#showResponse").innerText = `Res: rates are for your USD $ ${currencyIntake} \n
    Currently, for every USD $ ${dollars} \n
    Euro(s) € ${euros} \n 
    Rouble(s) ₽ ${roubles} \n 
    Cordoba(s) C$ ${cordobas} \n 
    Naira(s) ₦ ${nairas} \n 
    Pound(s) £ ${pounds} \n `;
  
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
  printElements(currencyUSD);
}

window.addEventListener("load", function(){
  this.document.querySelector("form").addEventListener("submit", handleFormSubmit);
});


