$(document).ready(function(){
    $(".main-btn").click(function(){
        $(".head-con").toggle();
        
});
});
// Event propaties
$(document).ready(function(){
    $("#home").mouseenter(function(){
        alert("welcome You entered home page!");
});
});
//  hide and show propaties
$(document).ready(function(){
    $("#hide").click(function(){
      $(".hide-con").hide();
    });
    $("#show").click(function(){
      $(".hide-con").show();
    });
  });
//   Fade propaties
  $(document).ready(function(){
    $(".fade-btn").click(function(){
      $(".div1").fadeToggle();
      $(".div2").fadeToggle("slow");
      $(".div3").fadeToggle(2000);
    });
  });
//   slide propaties
  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideDown("6000");
    });
    $("#stop").click(function(){
      $("#panel").stop();
    });
  });
//   stop sliding propaties
 
//   animition propaties
  $(document).ready(function(){
    $(".Anmi-con").click(function(){
        $("#animate").animate({right: '250px'});
    });
    });
    // hide propaties
    $(document).ready(function(){
        $("#btn").click(function(){
            $("h3").hide("slow", function(){
                alert("The paragraph is now hidden")
            });
        });
    });
    // get propaties
    $(document).ready(function(){
        $("#input-btn").click(function(){
            alert("Value: " + $("#test").val());
        });
    });
    // set propaties
    $(document).ready(function(){
        $("#btn1").click(function(){
          $("#test1").text("Hello ");
        });
        $("#btn2").click(function(){
          $("#test2").html("<b>Hello!</b>");
        });
        $("#btn3").click(function(){
          $("#test3").val("Sloth");
        });
       
      });
       // Add propaties
      $(document).ready(function(){
        $("#btn-first").click(function(){
          $("p").append(" <b>After Text</b>.");
        });
      
        $("#btn-second").click(function(){
          $("ol").append("<li>Append list of Animal</li>");
        });
      });
    //   remove propaties
    $(document).ready(function(){
        $("#remove-btn").click(function(){
          $(".end-con").remove();
        });
      });
    //   css classes propaties
    $(document).ready(function(){
        $("#add-btn").click(function(){
            $(".paragraph").addClass("red");
            $(".paragraph").addClass("important");
            $(".important").css({"background-color": "yellow", "font-size": "2em"});
        });
    });
    // css() propaties
    $(document).ready(function(){
        $("#back-btn").click(function(){
          alert("Background color = " + $("h2").css("background-color"));
        });
      });
    //   dimension propaties
    $(document).ready(function(){
        $("#dms-btn").click(function(){
          var txt = "";
          txt += "Width of div: " + $("h2").width() + "</br>";
          txt += "Height of div: " + $("h2").height();
          $("h2").html(txt);
        });
      });