//click effect for About us section
$(document).ready(function() {

    $("h3.header1").click(function(){
      $("p.des").fadeToggle(500)
    });
    $("p.des").click(function() {
        $("h3.header1").fadeToggle(500)
    });
    $("h3.header2").click(function() {
        $("p.pos").fadeToggle(500)
    });
    $("p.pos").click(function() {
        $("h3.header2").fadeToggle(500)
    });
    $("h3.header3").click(function() {
        $("p.three").fadeToggle(500)
    });
    $("p.three").click(function() {
        $("h3.header3").fadeToggle(500)
    });
});
