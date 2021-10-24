// gnb 페이지 이동
var page = ["announce.html", "program.html", "guide.html", "event.html"];
var gnbIndex;
$(".gnb li").on({
      "click" : function() {
            gnbIndex = $(this).index();
            console.log(gnbIndex);
            if (gnbIndex != undefined) {
                  var gnbUrl = page[gnbIndex];
                  location.href = gnbUrl;
            }
      }
});

// $(".logo").on({
//       "click" : function() {
//             location.href = "index.html";
//       }
// });

// 모바일 버전 싱단 gnb 
$(".trigger").on({
      "click": function() {
            if ($(".mobile.hamburger").is(":visible")) {
                  $(".mobile.hamburger").hide();
                  $(".mobile.close").show();
            
                  $("#main_content").hide();
                  $("#main_sponser").hide();
                  $("#main_footer").hide();

                  $("#mobile_menu").empty();

                  var nav = $(".gnb").clone();
                  $("#mobile_menu").append(nav);
                  $("#mobile_menu").show();
                  $("#main_header").css({"background": "#333"});
            } else {
                  $(".mobile.hamburger").show();
                  $(".mobile.close").hide();

                  $("#main_content").show();
                  $("#main_footer").show();
                  $("#mobile_menu").hide();
                  // $("#main_header").css({"background": "rgba(0,0,0,.60)"});

            }
      }
});

$(window).resize(function() {
      var width = $(window).width();

      if (width > 767) {
            if ($("#mobile_menu").is(":visible")) {
                  $(".mobile.hamburger").show();
                  $(".mobile.close").hide();

                  $("#main_content").show();
                  $("#main_footer").show();
                  
                  $("#mobile_menu").hide();
                  // $("#main_header").css({"background": "rgba(0,0,0,.60)"});

            }
      }
});