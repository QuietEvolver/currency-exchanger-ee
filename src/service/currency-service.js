export default class CurrencyService{
  static getCurrency(){//currency// {${currency}}`
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/usd`)
    .then(function(response){
      if(!response.success){
        const errorMessage = `${response}`;
        throw new Error(errorMessage);
      } else {
        return response.json();
      }
    })
    .catch(function (error) {
      return error;
    })
  }
}