$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#look").prepend("<li><img src='img/cat.jpg'></li>");
    $("ul#sound").prepend("<li>meow!</li>");

    $("ul#look").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#sound").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#dog").click(function() {
    $("ul#look").prepend("<li><img src='img/dog.jpg'></li>");
    $("ul#sound").prepend("<li>ouaf ouaf!</li>");

    $("ul#look").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#sound").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
