// onclick event
$(".side.menu").eq(0).on ({
    "click": function() {
        if ($("#content_announce").is(":visible")) {
            $("#content_poster").hide();
            $("#content_winner").hide();
            $("#content_partner").hide();
        } else {
            $("#content_announce").show();
            $("#content_poster").hide();
            $("#content_winner").hide();
            $("#content_partner").hide();
        }
        // $(".side.menu a").eq(0).css({"color":"#222"});
        // $(".side.menu a").not(":nth-child(1)").css({"color":"#666"});

    }
});

$(".side.menu").eq(1).on ({
    "click": function() {
        if ($("#content_poster").is(":visible")) {
            $("#content_announce").hide();
            $("#content_winner").hide();
            $("#content_partner").hide();
        } else {
            $("#content_poster").show();
            $("#content_announce").hide();
            $("#content_winner").hide();
            $("#content_partner").hide();
        }

        // $(".side.menu a").eq(1).css({"color":"#222"});
        // $(".side.menu a").not(":nth-child(2)").css({"color":"#999"});
        
    }
});

$(".side.menu").eq(2).on ({
    "click": function() {
        if ($("#content_winner").is(":visible")) {
            $("#content_announce").hide();
            $("#content_poster").hide();
            $("#content_partner").hide();
        } else {
            $("#content_winner").show();
            $("#content_announce").hide();
            $("#content_poster").hide();
            $("#content_partner").hide();
        }
    
        // $(".side.menu a").eq(2).css({"color":"#222"});
        // $(".side.menu a").not(":nth-child(3)").css({"color":"#999"});
        
    }
});

$(".side.menu").eq(3).on ({
    "click": function() {
        if ($("#content_partner").is(":visible")) {
            $("#content_announce").hide();
            $("#content_poster").hide();
            $("#content_winner").hide();
        } else {
            $("#content_partner").show();
            $("#content_announce").hide();
            $("#content_poster").hide();
            $("#content_winner").hide();
        }
    
        // $(".side.menu a").eq(3).css({"color":"#222"});
        // $(".side.menu a").not(":nth-child(4)").css({"color":"#999"});
        
    }
});

var gnbIndex;

$(".side.menu").on({
    "click": function() {
        gnbIndex = $(this).index();
        

        // $(this).eq(gnbIndex).css("color", "#222");
        // $(this).not($(this).eq(gnbIndex)).css("color","#999");
    }
});