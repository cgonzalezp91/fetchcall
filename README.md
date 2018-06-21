#fetchcall
Module for the interaction with api fetch with async and error handling with the use of sweetalert for the messages
Testing Purpose 
## Getting Started

Whit this module you can make async petitions with the [api fetch](https://github.com/github/fetch) to your browser and managin the errors with the help of [sweetalert](https://sweetalert.js.org/guides/).
Fetchcall is written asn an async function and you will always recibe a response in json.

### Prerequisites
You will need the use of SweetAlert
```
npm install sweetalert --save
```
Or 
```
npm install 
```
Because is dependenci of the proyect

### Installing

```
npm install fetchcall
```

After installation just import the module with
```
import fetchcall from fetchcall
```
fetchcall receive 2 parameters url and data.
 * url: Is the url of the api you what to call for example `const url = https://swapi.co/api/people/1/` 
 * data: (Optional) By default fetchcall use POST to send parameters in the body for the api fetch, if you dont send any parameter automatically is going to use GET. You can send the body like a object of JS
 Example
 ```
var data = {
    user: txtuser.value,
    password: txtpassword.value       
}
```
 ### Fetchcall send the following data in the second parameter of the sending object to send and receive json and to send cookies and credentials.
 You can see more about fetch in [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
 Example of data

```
PostData = {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json; charset=utf-8'
        },
        dataType: 'json',
        credentials: 'include'
    }
PostData.body = JSON.stringify(data)
```
#### This is made for a easy fetch POST data and sending credentials with error handling and responding in json