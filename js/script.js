$(document).ready(function() {
    $("#des").click(function(){
        $("#p1").toggle();
        
    });
    $("#dev").click(function(){
        $("#p2").toggle();
    });
    $("#pro").click(function(){
        $("#p3").toggle();
    })
});

function myFunction(e) {
    alert("We have Received Your Message! And Thank you for reaching out to us!");
    (e).preventDefault;
  }

  

  