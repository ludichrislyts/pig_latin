describe('findTriangle', function() {
  it("When all three sides are equal, the triangle is equilateral", function() {
    expect(findTriangle(4, 4, 4)).to.equal("an equilateral");
  });

  it("When two sides are equal, the triangle is isosceles", function() {
  expect(findTriangle(4, 4, 3)).to.equal("an isosceles");
  });

  it("When no sides are equal, the triangle is scalene", function() {
  expect(findTriangle(5, 4, 3)).to.equal("a scalene");
  });

  it("When two sides summed are less than the remaining side it is not a triangle", function() {
  expect(findTriangle(100, 6, 6)).to.equal("not a triangle");
  });

});
