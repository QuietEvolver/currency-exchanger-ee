export default class CurrencyService{
  static getCurrency(){////currency//${currency}`
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/usd`)
      .then(function(response){
        if(!response.ok){
          const errorMessage = `${response}`;
          console.log("respone: ", response);
          throw new Error(errorMessage);
        } else {
          console.log("respone: ", response);
          return response.json();
        }
      })
      .catch(function (error) {
        console.log("err api: ", error);
        return error;
      });
  }
}
