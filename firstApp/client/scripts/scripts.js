//console.log('file detected');

$(document).ready(function(){
//console.log('the scripts.js file is found')
  $('#request-button').click (() => {
    let dataToServe = {data: 'hello world'};
//MAKING A POST REQUEST
    $.post('http://localhost:3000', dataToServe, (response) => {
      console.log('the server has responded');
      console.log('the server sent the following', response);
    });
  });
});

console.log('script is finished');
