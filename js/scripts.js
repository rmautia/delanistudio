
$(document).ready(function() {

    $("h3.header1").click(function(){
      $("h3.header1").hide();
      $("p.des").toggle();
      $("p.des").show();
    });
    $("p.des").click(function() {
        $("p.des").toggle();
        $("h3.header1").hide();
        $("h3.header1").show();
    });
    $("h3.header2").click(function() {
        $("h3.header2").hide();
        $("p.pos").toggle();
        $("p.pos").show();
    });
    $("p.pos").click(function() {
        $("p.pos").toggle();
        $("h3.header2").hide();
        $("h3.header2").show();
    });
    $("h3.header3").click(function() {
        $("h3.header3").hide();
        $("p.three").toggle();
        $("p.three").show();
    });
    $("p.three").click(function() {
        $("p.three").toggle();
        $("h3.header3").hide();
        $("h3.header3").show();
    });


    $("#portfolio .col-md-3").hover(function(){
        $(this).find(".display").css("display","flex");
    },function(){
        $(this).find(".display").hide();
    });

    $("#btn[type=submit]").click(function() {
        var name = $('input#name').val();
        alert(`Thank you ${name} for shopping with us`);
    });   
});   
 