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