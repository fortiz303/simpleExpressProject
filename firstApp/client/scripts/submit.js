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
    dataSendToServer, (dataReceivedInResponse) => {
      console.log('the number was sent to the server');
      console.log(dataReceivedInResponse);

      let array = dataReceivedInResponse.currentNumbers;

      for(let i = 0; i < array.length; i++){

        $('#history').append('<p>' + (i + 1) + ') ' array[i] + '</p>')
      }


      $('#status').html('Congrats your number has been submitted to the server ', dataReceivedInResponse);

    });
  });
});
