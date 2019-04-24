const express = require('express');
let app = express();
let http = require('http').Server(app);
app.use('/', express.static(','));
http.listen(3000);
console.log('es is running');
