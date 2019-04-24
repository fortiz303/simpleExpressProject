const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');

app.use('/', express.static('./basic'))
//FOLLOWING 2 LINES ARE FOR BODY-PARSER SO WE CAN UNDERSTAND OBJECTS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

const port = 3000;
http.listen(port);

console.log('es is running baby!')
//HANDLING A POST REQUEST
app.post('/', (request, response) => {
let dataReceived = request.body;
let dataToSend = {
  message: 'hi, I received your message'
};

console.log('someone made a request');
console.log('the requester sent the following to us: ', response.message);
response.send(dataToSend);
});


app.post('/numberSaver', (request,response) =>{
 let clientNumber = request.body.userNumber;
 console.log(clientNumber);
 response.send(200);
});
