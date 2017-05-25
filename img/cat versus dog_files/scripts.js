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
  $("#blanks form").submit(function(event) {
      var person1Input = $("input#person1").val();
      var person2Input = $("input#person2").val();
      var animalInput= $("input#animal").val();
      var exclamationInput = $("input#exclamation").val();
      var verbInput = $("input#verb").val();
      var nounInput = $("input#noun").val();

      $(".person1").text(person1Input);
      $(".person2").text(person2Input);
      $(".animal").text(animalInput);
      $(".exclamation").text(exclamationInput);
      $(".verb").text(verbInput);
      $(".noun").text(nounInput);

      $("#story").show();

      event.preventDefault();
    });
});
