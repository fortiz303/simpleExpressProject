'use strict';

$(document).ready(() => {
  $('#save-server').click(()=>{
    console.log('clicked');

    let value = $('#number').val();

    let dataSendToServer = {userNumber:value};

    $.post('http://localhost:3000/numberSaver',
    dataSendToServer, (data) => {
      console.log('the number was sent to the server');
    });
  });
});
