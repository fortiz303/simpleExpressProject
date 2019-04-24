const express = require('express');
const app = express();
let http = require('http').Server(app);
app.use('/', express.static('./'))
app.use('/secretlocation', express.static('folder/'));
http.listen(3000);

console.log('ES is running');
