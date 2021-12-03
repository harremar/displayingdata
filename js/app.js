//get elements from html
let dvPrint = document.getElementById("product-section");

fetch("data/data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });
function appendData(objects) {
  //this is functin that prints out list
  //for loop goes until it goes through all of the objects
  for (var i = 0; i < objects.length; i++) {
    //creates a new div
    let newEl = document.createElement("div");
    //what is in the innerHTML
    newEl.innerHTML =
      '<div class ="product-holder"> <div class="ribbon-holder"></div><div class="product-image"><img class="img" src="images/' +
      objects[i].productImage +
      '" alt=""></div><div class="product-name"><h1>' +
      objects[i].productName +
      '</h1></div><div class="product-price"><h2><span class="small">$</span>' +
      objects[i].productCost +
      '</h2></div><div class="freeshipping-holder"><img src="images/truck.svg" alt=""><h4>FREE SHIPPING</h4></div><div class="product-button" onclick="productButtonClicked()" data-number="' +
      objects[i].id +
      '"><h3>BUY NOW</h3></div></div>';
    //adds newEl to the bottom of the list
    dvPrint.appendChild(newEl);
  }
}
