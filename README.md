# Currency Exchanger

#### By Vera Weikel

#### A Currency Exchanger app

## Technologies Used

* HTML 
* CSS 
* Javascript
* Webpack
* Babel
* esLint
* npm

## Description
A currency exchange application which allows user to type in an amount (in U.S. dollars) and then choose which currency to converted to (such as francs, marks, rupees, and so on). 
 
## Goals
* A user should be able to enter an amount (in U.S. dollars), then specify another currency (such as the South Korean won), and submit a form. The user should then see the total amount they entered in converted currency. For example, a user might enter 10 dollars and then see that amount in South Korean won.
* Users should be able to convert U.S. currency into at least 5 other types of currency.
* If the API call results in an error (any message not a 200 OK), the application should return a notification to the user that states what the error is. (That means the error should show up in the DOM, not in the console.)
* If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist. (Note: Even if you use a dropdown menu to specify currencies instead of a form field, you'll still need to add this functionality to your code.)

## Setup/Installation Requirements

* REGISTER FOR A DEVELOPER ACCOUNT [HERE](https://www.exchangerate-api.com/)
* Input your email address and click the "Get Free Key" button.
* Create an account with your email, first name and a password
* Agree to the terms of use and click "Get Started"
* FURTHER [DOCS](https://www.exchangerate-api.com/docs/overview)
* Clone this [repo](https://github.com/QuietEvolver/currency-exchanger-ee.git) to your workspace.
* Navigate to the top level of the directory.
* At the root of the file folder make an .env file to hide API_KEY
* Add .env to the .gitignore file
* Open up a terminal console and type in $ npm install
* In your terminal run $npm run build 
* In your terminal run $npm run start and the website will open in your default browser: localhost:8080/ 

## Known Bugs

* Work in progress.

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2022 Vera Weikel

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.