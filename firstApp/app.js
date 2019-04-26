const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const fs = require('fs');

app.use('/', express.static('./client'))
//FOLLOWING 2 LINES ARE FOR BODY-PARSER SO WE CAN UNDERSTAND OBJECTS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

const port = 3000;
http.listen(port);

console.log('es is running baby!')
//handling a post request
app.post('/', (receive, response) => {
let dataReceived = receive.body;
let dataToSend = {
  message: 'hi, I received your message'
};

console.log('someone made a request');
console.log('the requester sent the following to us: ', response.message);
response.send(dataToSend);
});
//
//Handling a POST REQUEST with a name of numberSaver
app.post('/numberSaver', (receive,response) =>{
 let clientNumber = receive.body.userNumber;

//Check if the file numbers.json exists. If not, create an empty one.
 if(fs.existsSync('numbers.json')==false){

   //Created a default object for JSON
   let default1 = {currentNumbers: []};
   //Converted default object ti=o JSON
   deafult1 = JSON.stringify(default1);

   fs.writeFileSync('numbers.json', '{currentNumbers:[]}', 'utf8')

 };
//read numbers.json file
 let json = fs.readFileSync('numbers.json','utf8');
 let jsonObject = JSON.parse(json);
//Create an ARRAY to hold our objects
 let numberArray = jsonObject.currentNumbers;
//Push our number from front-end into our array
 numberArray.push(clientNumber);
//Save our Array in an object
 let objectToSave = {currentNumbers: numberArray};
//Convert our object into a JSON string
 let jsonToSave = JSON.stringify(objectToSave);
//Save our JSON string to the numbers,json file
 fs.writeFileSync('numbers.json' , jsonToSave, 'utf8');
 console.log('the number was succesfully saved');

response.send(objectToSave);
 //console.log(clientNumber);
 response.sendStatus(200);
});
