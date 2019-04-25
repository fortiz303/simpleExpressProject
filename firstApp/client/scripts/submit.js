'use strict';

//prep
$(document).ready(() => {
//function
  $('#save-server').click(()=>{
//checking if function runs
    console.log('clicked');
//created a variable to store the input from client
    let value = $('#number').val();
//creating a variable to store an object
    let dataSendToServer = {userNumber:value};

    $.post('http://localhost:3000/numberSaver',
    dataSendToServer, (data) => {
      console.log('the number was sent to the server');
    });
  });
});
