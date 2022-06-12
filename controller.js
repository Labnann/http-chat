var id = 0;
var receiveId = 0; 
var started = false;
var url = 'http://localhost:8000';

function receive(){$.ajax({
    data: {type: "RECEIVE", id: receiveId},
    type: 'POST',
    success: function(data){
            if(data.message!=null)
            console.log(data.message);
    },
    url: url
});}


function send(message){$.ajax({

    data:  { type: "SEND", message : message, id : id},
    type: 'POST',
    url: url
  
});}

$(function() {
  $("#refresh").click(function() {
    // $("#mydiv").load("https://5ef8b1a30822c.htmlsave.net/videotest.html");
    $("#mydiv").load(url);
  })
})

function setId(me,you){
    id = me;
    receiveId = you;
}


function connect(connectionURL){
  if(started) return;
  started = true;
  url = connectionURL;
  for(var i = 0; i<10000; i++){
    setTimeout(receive,i*1000);
  }
}