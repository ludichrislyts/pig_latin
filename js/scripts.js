function findTriangle(side1, side2, side3) {
  var triangleArray = [side1, side2, side3];
  triangleArray.sort(function(a, b){return a-b});
  var sum = triangleArray[0] + triangleArray[1];
  if (sum < triangleArray[2]) {
    return "not a triangle";
    }
    else {
      if ((side1 == side2) && (side2 == side3)) {
        return "an equilateral";
      }
      else if ((side1 == side2) || (side2 == side3)) {
        return "an isosceles";
      }
      else {
        return "a scalene";
    }
  }
};

$(document).ready(function() {

  $("form#triangle").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var sides = side1 + ", " + side2 + ", " + side3;
    var triangle = findTriangle(side1, side2, side3);
    $(".allSides").empty();
    $(".allSides").text(sides);

    $(".result").empty();
    $(".result").text(triangle);

    $(".triangles").show();
    event.preventDefault();
  });
});
