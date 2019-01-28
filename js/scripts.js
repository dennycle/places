// Business Logic for


// Business Logic for Destination ---------
function Destination(location, time, landmark, description) {
  this.location = location;
  this.time = time;
  this.landmark = landmark;
  this.description = description;
}

Destination.prototype.details = function() {
  return this.location + " " + this.time + this.landmark + this.description;
}

Destination.prototype.printDetails = function() {
  return "<li>" + this.location +"</li>" + "<li>" + this.time +"</li>" + "<li>" + this.landmark +"</li>" + "<li>" + this.description +"</li>";
}

  var place1 = new Destination("Paris", "1999", "Eiffel Tower", "France's capital, is a major European city and a global center for art, fashion, gastronomy and culture.");
  var place2 = new Destination("New York City", "2012", "Statue of Liberty", "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.");
  var place3 = new Destination("Seattle", "1994", "Space Needle", "Washington State’s largest city, it’s home to a large tech industry, with Microsoft and Amazon headquartered in its metropolitan area. The futuristic Space Needle, a 1962 World’s Fair legacy, is its most iconic landmark.");

$(document).ready(function(){
  $("ul#parisoutput").append(place1.printDetails());
  $("ul#newyorkoutput").append(place2.printDetails());
  $("ul#seattleoutput").append(place3.printDetails());
  

  $("h2.clickable").click(function(){
    $("#paris").slideToggle();
  });

  $("h2.clickable1").click(function(){
    $("#newyork").slideToggle();
  });

  $("h2.clickable2").click(function(){
    $("#seattle").slideToggle();
  });
});
