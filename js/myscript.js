$(document).ready(function() {
    //applies hover to h2 elements using class highlight
    $("h2").hover(function() {
        $("h2").addClass("highlight");
    });
    //applies click to figures using slide toggle
    $("#sportCard").click(function() {
       $(".card").slideToggle(1000);
    });
    
    
    
});