$(document).ready(function () {
  jQuery(".scroll").onePgaeNav({ wrapper: "#onepage-nav" })
  jQuery(".scroll2").onePgaeNav({ wrapper: "" }),
    $(".stikey-function ").waypoint(function (e) {
      "down" == e
        ? $("nav").addClass("stikey")
        : $("nav").removeClass("stikey");
    }),
    $(".filter-menu button").on("click", function () {
      $(this).addClass("active"),
        $(this).siblings(".active").removeClass("active");
    }),
    $(".filter-container").filterizr({});
});
const closenav = () => {
    document.querySelector(".overlay").style.width = "0%";
  },
  opennav = () => {
    document.querySelector(".overlay").style.width = "100%";
  };
!(function (e) {
  e.fn.onePgaeNav = function (t) {
    var o = e.extend(
        {
          activeClass: "active",
          wrapper: "",
          speed: 800,
          navStop: 0,
          navStart: 100,
        },
        t,
      ),
      i = e(this);
    e(this).on("click", function (t) {
      t.preventDefault();
      var i = e(this).attr("href"),
        n = e(i).offset().top;
      e("html, body").animate({ scrollTop: n - o.navStop }, o.speed);
    }),
      o.wrapper &&
        e(window).on("scroll", function () {
          var t = [],
            n = e(window).scrollTop();
          i.each(function () {
            var o = e(this).attr("href"),
              i = e(o).offset();
            void 0 !== i && t.push(i.top);
          }),
            e.each(t, function (e) {
              n > t[e] - o.navStart &&
                i.removeClass(o.activeClass).eq(e).addClass(o.activeClass);
            });
        });
  };
})(jQuery),
  $("svg.radial-progress").each(function (e, t) {
    $(this).find($("circle.complete")).removeAttr("style");
  }),
  $(window)
    .scroll(function () {
      $("svg.radial-progress").each(function (e, t) {
        $(window).scrollTop() >
          $(this).offset().top - 0.75 * $(window).height() &&
          $(window).scrollTop() <
            $(this).offset().top +
              $(this).height() -
              0.25 * $(window).height() &&
          ((percent = $(t).data("percentage")),
          (radius = $(this).find($("circle.complete")).attr("r")),
          (circumference = 2 * Math.PI * radius),
          (strokeDashOffset = circumference - (percent * circumference) / 100),
          $(this)
            .find($("circle.complete"))
            .animate({ "stroke-dashoffset": strokeDashOffset }, 1250));
      });
    })
    .trigger("scroll");
