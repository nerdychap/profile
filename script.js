$(document).ready(function () {
  $("#aboutMe").click(function () {
    $("#about").fadeIn(1000);
    $("#edEx").hide();
    $("#skills").hide();
    $("#work").hide();
    $("#sideBox").hide();

  });
  $("#Educ-Expe").click(function () {
    $("#about").hide();
    $("#edEx").fadeIn(1000);
    $("#skills").hide();
    $("#work").hide();
    $("#sideBox").hide();

  });
  $("#Skills").click(function () {
    $("#about").hide();
    $("#edEx").hide();
    $("#skills").fadeIn(1000);
    $("#work").hide();
    $("#sideBox").hide();
  });
  $("#Projects").click(function () {
    $("#about").hide();
    $("#edEx").hide();
    $("#skills").hide();
    $("#work").fadeIn(1000);
    $("#sideBox").fadeIn(1000);


  });
});