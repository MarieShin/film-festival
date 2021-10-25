// onclick event
var gnbIndex;
$(".side.menu").on({
    "click" : function() {
        gnbIndex = $(this).index();
        if (gnbIndex != undefined) {
            switch(gnbIndex) {
                case 0 :
                    announce_view();
                    break;
                case 1 :
                    poster_view();
                    break;
                case 2 : 
                    winner_view();
                    break;
                case 3 :
                    partner_view();
                    break;
            }
        }
        $(".side.menu").removeClass('current');
        $(this).addClass('current');
    }
});

/* 소개 */
function announce_view() {
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
}


/* 포스터 */
function poster_view() {
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
}

/* 심사위원 & 수상 */
function winner_view() {
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
}

/* 파트너 */
function partner_view() {
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
}