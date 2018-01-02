(function ($) {
  if (!!window.ActiveXObject && !window.XMLHttpRequest && (location.href=='http://www.lanrentuku.com' || location.href=='http://www.lanrentuku.com/')) return;
  $(function () {
    systole();
  });

  function systole() {
    if (!$(".timeline").length) {
      return;
    }
    var $warpEle = $(".timeline-date"),
      $targetA = $warpEle.find("h2 a,ul li dl dt a"),
      parentH,
      eleTop = [];
    parentH = $warpEle.parent().height();
    $warpEle.parent().css({
      "height":59
    });
    setTimeout(function () {

      $warpEle.find("ul").children(":not('h2:first')").each(function (idx) {
        eleTop.push($(this).position().top);
        $(this).css({
          "margin-top":-eleTop[idx]
        }).children().hide();
      }).animate({
          "margin-top":0
        }, 1600).children().fadeIn();
      $warpEle.parent().animate({
        "height":parentH
      }, 1000);

    }, 600);

    $targetA.click(function () {
      $(this).parent().css({
        "position":"relative"
      });
      $(this).parent().siblings().slideToggle();
      $warpEle.parent().removeAttr("style");
      return false;
    });

  };


})(jQuery);
