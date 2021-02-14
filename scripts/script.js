window.addEventListener("DOMContentLoaded", () => {
  let prods = JSON.parse(localStorage.getItem("products"));

  // products are not initizalized
  if (prods == null) {
    // fetch json
    fetch("https://fakestoreapi.com/products")
      .then( (response) => response.json())
      .then( (data) => JSON.stringify(data))
      .then( (info) => localStorage.setItem("products", info))
      .then( () => {
        prods = JSON.parse(localStorage.getItem("products"));
      })
      // populate localStorage
      .then( () => {
        localStorage.setItem("cart", new Array(prods.length).fill(0).toString());
        for (const item in prods) loadProd(prods[item]);
      });
  } else { // products do exist
    for (const item in prods) loadProd(prods[item]);
  }
});

// populating localStorage method
let loadProd = (item) => {
  let cart = localStorage.getItem("cart").split(",");
  let list = document.createElement("product-item");
  
  list.setAttribute("id", item.id);
  
  document.getElementById("product-list").appendChild(list);

  // sets shadowRoots
  list.shadowRoot.querySelector(".title").innerHTML = item.title;
  list.shadowRoot.querySelector(".price").innerHTML = "$" + item.price.toFixed(2);
  list.shadowRoot.querySelector("img").src = item.image;
  list.shadowRoot.querySelector("img").src = item.image;
  list.shadowRoot.querySelector("img").alt = item.title;

  // not already added, so show add
  if(cart[item.id - 1] == "0"){
    list.shadowRoot.querySelector("button").innerHTML = "Add to Cart";
  } 
  //already added, so show remove
  else{
    document.getElementById("cart-count").innerHTML++;
    list.shadowRoot.querySelector("button").innerHTML = "Remove from Cart";
  }
};