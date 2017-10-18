$(document).ready(function(){
    
    /*var win = document.getElementById("#loader").offsetHeight;
    console.log(win);*/
    
    /*tootlip*/
    $('#toot').tooltip('show');
    $('#toot').tooltip('hide');
    
     $('#toot2').tooltip('show');
    $('#toot2').tooltip('hide');
    
    /*loader*/
    $(function() {
			
				$('article').readingTime({
                    readingTimeAsNumber: true,
					wordCountTarget: '.words',
				});
				
			});
            
            setTimeout(function () {
                
                $("#loader").hide(1000,'swing');
               $("#main-body").show(1000,'swing');
            }, 1000);
    
    
    /* prova scrollrock */
    
    

      $(window).scroll(function() {
          var win = window.innerHeight;
          var sT1 = document.body.scrollHeight;
          sT1 = Math.round(sT1);
        var sT = document.body.scroll;
          var anchor = document.body;
          
          var st = Math.round(anchor.scrollTop);
          st = st + win;
          sT = ((100/sT1)*st);
        $("#scrollrock").css("width", sT+"%");
          
      });

    $(window).resize(function(){
        var win = window.innerHeight;
          var sT1 = document.body.scrollHeight;
          sT1 = Math.round(sT1);
        var sT = document.body.scroll;
          var anchor = document.body;
          
          var st = Math.round(anchor.scrollTop);
          st = st + win;
          sT = ((100/sT1)*st);
        $("#scrollrock").css("width", sT+"%");
         
    });
    /*menu a tendina*/
    $('.collapse').collapse();
    
    $("#pr").click(function(){
        $("#pr1").toggle();
        $("#prr1").toggle();
    });
    $("#pri").click(function(){
        $("#pr2").toggle();
        $("#prr2").toggle();
    });
    $("#prii").click(function(){
        $("#pr3").toggle();
        $("#prr3").toggle();
    });
    $("#priii").click(function(){
        $("#pr4").toggle();
        $("#prr4").toggle();
    });
    
    /*header figo*/
    
    
    
    /* Codice back-to-top */
    
    // Nascondo l'icona al caricamento della pagina
    $("#back_to_top").hide();

    // Intercetto lo scroll di pagina
    $(window).scroll(function()
    {
        // Se l'evento scroll si verifica, mostro l'icona (invisibile) con effetto dissolvenza
        if ($("#back_to_top").is(":hidden")) {
            $("#back_to_top").fadeIn(500);
        }

        // Se si verifica il ritorno ad inizio pagina, nascondo l'icona con effetto dissolvenza
         if ($("body").scrollTop() == 0 && !$("#back_to_top").is(":hidden"))
         {
             $("#back_to_top").fadeOut(500);
         }
    });

    // Al click sull'icona, torno ad inizio pagina con movenza fluida
    $("#back_to_top").click(function()
    {
        $("html,body").animate({scrollTop: 0}, 500, function(){});
    });
    
    
    
     /*slider bootstrap*/
    $('.carousel1').carousel();
    
    /*box modal*/
   // $('#myModal').modal(options);
    
    /*header figo*/
    /*var count = 0 ; 
    $("#header").mouseenter(function(){
    if(count % 2 == 0) {
        
        $("#header-t").toggle("slow", function() {
            setTimeout(function () {
        $("#header-t").hide("slow");
            $("#vody").css("margin-top","85");
            count = count +1;
            console.log("merda");
    }, 2000);
            
        });
        $("#vody").css("margin-top","125");
            count = count +1;
            console.log(count);
        
    
    }
    
    else{
        $("#header-t").toggle("slow");
        $("#vody").css("margin-top","85");
            count = count +1;
            console.log("merda");
    }
    });
    
    $("#header").mouseenter(function(){
        $("#header-t").show();
        $("#vody").css("margin-top","125");
        setTimeout(function () {
        $("#header-t").hide();
            $("#vody").css("margin-top","85");
            count = count +1;
            console.log("merda");
        }, 2000);
    });
    $("#header-t").mousemove(function(){
        $(this).css("display", "block")       
    });
    $("#header-t").mouseleave(function(){
        $("#header-t").css("display", "none");   
        $("#vody").css("margin-top","85");
    });*/
    
    //prova
    
    
    $(document).ready(function() {
        
  var menu = $("#menu");
        setTimeout(function () {
              var posizione = menu.position(); 
            }, 2000);
  
  $(window).scroll(function() {
    if ($(window).scrollTop() >= posizione.top) {
        
      menu.addClass("fixed1");
    } else {
      menu.removeClass("fixed1");


    }
  });
});
    
    /*provba menu dajjejeej*/

$(document).ready(function() {
        var posizioneanc1 =0;
        var posizioneanc2 =0;
        var posizioneanc3 =0;
        var anco1 = $("#ancor");
        var anco2 = $("#ancor2");
        var anco3 = $("#ancor3");
        setTimeout(function () {
                posizioneanc1 = anco1.position(); 
                posizioneanc2 = anco2.position(); 
                posizioneanc3 = anco3.position(); 
            alert(posizioneanc1.top);
            }, 2000);
  
  $(window).scroll(function() {
    if ($(window).scrollTop() >= posizioneanc1.top) {
         if ($(window).scrollTop() >= posizioneanc2.top) {
            if ($(window).scrollTop() >= posizioneanc3.top) {
                $("#anc3").addClass("ancor");
                $("#anc2").removeClass("ancor");
                $("#anc1").removeClass("ancor");
    } else {
        $("#anc3").removeClass("ancor");
        $("#anc2").addClass("ancor");
        $("#anc1").removeClass("ancor");
    }
    } else {
        $("#anc3").removeClass("ancor");
        $("#anc1").addClass("ancor");
        $("#anc2").removeClass("ancor");
    }
      
    } else {
         $("#anc3").removeClass("ancor");
        $("#anc1").removeClass("ancor");
        $("#anc2").removeClass("ancor");
    }
  });
});
    
    var posizione=0;
    $(document).ready(function() {
        
  var menu2 = $("#menu2");
        setTimeout(function () {
              posizione = menu2.position(); 
            }, 2000);
  $(window).scroll(function() {
    if ($(window).scrollTop() >= posizione.top) {
      menu2.addClass("fixed2");
    } else {
        
      menu2.removeClass("fixed2"); 
    }
  });
});
    /*animated*/
    $( "#anim1" ).click(function() {
  $( "#animated1" ).animate({
    height: "toggle"
  }, 500, function() {
    // Animation complete.
  });
});
    
     $( "#anim2" ).click(function() {
  $( "#animated2" ).animate({
    height: "toggle"
  }, 500, function() {
    // Animation complete.
  });
});
    
     $( "#anim3" ).click(function() {
  $( "#animated3" ).animate({
    height: "toggle"
  }, 500, function() {
    // Animation complete.
  });
});
    
    $( "#anim4" ).click(function() {
  $( "#animated4" ).animate({
    height: "toggle"
  }, 500, function() {
    // Animation complete.
  });
});
    
     $( "#anim5" ).click(function() {
  $( "#animated5" ).animate({
    height: "toggle"
  }, 500,'swing');
});
    
     $( "#anim6" ).click(function() {
  $( "#animated6" ).animate({
    height: "toggle"
  }, 500, function() {
    // Animation complete.
  });
});
    
});





