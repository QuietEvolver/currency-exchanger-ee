// import { privateName } from '@babel/types';
import './assets/css/styles.css';
import CurrencyService from './service/word.js';

function getCurrency(currency){
  let promise = CurrencyService.getCurrency(currency);

  promise.then(function (data){
    printElements(data);
  }, function(error) {
    printError(error);
  });
}




