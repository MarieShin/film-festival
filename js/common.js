// 모바일 버전 싱단 gnb 
$(".trigger").on({
      "click": function() {

            var pathname = document.location.pathname; 
            console.log(pathname);

            if ($(".mobile.hamburger").is(":visible")) {
                  $(".mobile.hamburger").hide();
                  $(".mobile.close").show();
            
                  $("#main_content").hide();
                  $("#main_sponsor").hide();
                  $("#main_footer").hide();

                  $("#mobile_menu").empty();

                  var nav = $(".gnb").clone();
                  $("#mobile_menu").append(nav);
                  $("#mobile_menu").show();
                  if (pathname.indexOf('index.html') !== -1) {
                        $("#main_header").css({"background": "rgba(0,0,0,.60)"}); 
                  } else {
                        $("#main_header").css({"background": "#333"});
                  }
            } else {
                  $(".mobile.hamburger").show();
                  $(".mobile.close").hide();

                  $("#main_content").show();
                  $("#main_footer").show();
                  $("#mobile_menu").hide();
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
            }
      } 
});

// active bar 
$(".gnb li").on({
      "mouseenter" : function() {
            $(".active_bar").show();

            var listLeft = $(this).offset().left;
            var listWidth = $(this).width();

            $(".active_bar").width(listWidth);
            $(".active_bar").offset({ left: listLeft + 15 });
      },

      "mouseleave" : function() {
            $(".active_bar").hide();
      }
});
