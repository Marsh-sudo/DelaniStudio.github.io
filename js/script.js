$(document).ready(function() {
    $("#des").click(function(){
        $("#p1").toggle();
        
    });
});
$(document).ready(function(){
    $("#dev").click(function(){
        $("#p2").toggle();
    });
});
$(document).ready(function(){
    $("#pro").click(function(){
        $("#p3").toggle();
    })
});
   

function myFunction(e) {
    alert("We have Received Your Message! And Thank you for reaching out to us!");
    (e).preventDefault;
  }


$(document).ready(function() {
    $('.pics').mouseover(function(){
        $(this).css('opacity','.2');
        
        
    }).mouseout(function(){
        $(this).css('opacity','1');
       
    });

})


$('.sed').click(function(){
    $('#des').toggle();
})
$('.ved').click(function(){
    $('#dev').toggle();
 })
 $('.man').click(function(){
     $('#pro').toggle();
 })

  

  