// create a fetch request to the following URL:
window.addEventListener("DOMContentLoaded", () => {
  let prods = JSON.parse(localStorage.getItem("products"));

  if (prods === null) {
    console.log("initial fetch");
    fetch("https://fakestoreapi.com/products")
      .then( (response) => response.json())
      .then( (data) => JSON.stringify(data))
      .then( (info) => localStorage.setItem("products", info))
      .then( () => {
        prods = JSON.parse(localStorage.getItem("products"));
      })
      .then(() => {
        localStorage.setItem(
          "cart",
          new Array(prods.length).fill(0).toString()
        );
        for (const item in prods) loadProduct(prods[item]);
      });
  } else {
    for (const item in prods) loadProduct(prods[item]);
  }
});

let loadProduct = (item) => {
  let cart = localStorage.getItem("cart").split(",");
  let list = document.createElement("product-item");
  list.setAttribute("id", item.id);
  document.getElementById("product-list").appendChild(list);
  list.shadowRoot.querySelector(".title").innerHTML = item.title;
  list.shadowRoot.querySelector(".price").innerHTML = "$" + item.price.toFixed(2);
  list.shadowRoot.querySelector("img").src = item.image;
  list.shadowRoot.querySelector("img").src = item.image;
  list.shadowRoot.querySelector("img").alt = item.title;

  if (cart[item.id - 1] === "0") {
    list.shadowRoot.querySelector("button").innerHTML = "Add to Cart";
  } else {
    list.shadowRoot.querySelector("button").innerHTML = "Remove from Cart";
    document.getElementById("cart-count").innerHTML++;
  }
};
