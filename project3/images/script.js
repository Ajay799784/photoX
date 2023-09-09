// $("h1").text("mouni i love you");
// let x = $(".special");
// $(x.text("hey how are you man enter into the process"));
// $("input[type='button']").val("changed");
// let s = $(".special").text();
// alert(s);
// $("h1").hide(1000);
$("#hide").click(function () {
  $("h1").hide(1000, function () {
    alert("this is the ajay kumar");
  });
});
$("#show").click(function () {
  $("h1").show(1000);
});

$("#fadein").click(function () {
  $("h1").fadeIn();
});
$("#fadeout").click(function () {
  $("h1").fadeOut();
});

$("#slideup").click(function () {
  $("h1").slideToggle();
});
$("#slidedown").click(function () {
  $("h1").slideDown();
});

$("#animate").click(function () {
  $("h1").animate({ "background-color": "green" });
});

$(".container").children("p").css("background", "green");
$("p").before("<p>added the new elements</P>");
