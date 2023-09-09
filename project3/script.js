$(document).ready(function () {
  $(".nav-button").click(function () {
    $(".nav-button").toggleClass("change");
  });
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 200) {
      $(".nav-menu").addClass("nav-button");
    } else {
      $(".nav-menu").removeClass("nav-button");
    }
  });
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 1781) {
      $(".camera-img").addClass("fromLeft");
      $(".mission-text").addClass("fromRight");
    } else {
      $(".camera-img").removeClass("fromLeft");
      $(".mission-text").removeClass("fromRight");
    }
  });
  $(".gallery-list-item").click(function () {
    let value = $(this).attr("data-filter");
    if (value == "all") {
      $("filter").show();
    } else if (value == "new") {
      $("filter").show(300);
    } else {
      $(".filter")
        .not("_" + value)
        .hide(300);
      $(".filter")
        .filter("_" + value)
        .show(300);
    }
  });
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 8000) {
      $(".card-1").addClass("fromLeft");
      $(".card-2").addClass("fromRight");
      $(".card-3").addClass("fromBottom");
    } else {
      $(".card-1").removeClass("fromLeft");
      $(".card-2").removeClass("fromRight");
      $(".card-3").removeClass("fromBottom");
    }
  });
});
