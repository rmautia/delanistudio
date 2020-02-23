$(document).ready(function() {

    $("h3.header1").click(function(){
      $("p.des").fadeToggle(500)
    });
    $("p.des").click(function() {
        $("h3.header1").fadeToggle(500)
      });
});