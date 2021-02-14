// product-item.js

class ProductItem extends HTMLElement {
  // TODO
  constructor() {
    super();
    let shadow = this.attachShadow({mode: "open"});
    let image = document.createElement("img");
    let title = document.createElement("p");
    let price = document.createElement("p");
    let button = document.createElement("button");

    title.setAttribute("class", "title");
    price.setAttribute("class", "price");
    
    button.innerHTML = "Add to Cart";
    button.onclick = () => {
      let cart = localStorage.getItem("cart").split(",");
      if (cart[this.id - 1] == "0") { 
        cart[this.id - 1] = "1";
        localStorage.setItem("cart", cart);
        button.innerHTML = "Remove from Cart";
        document.getElementById("cart-count").innerHTML++;
      }  else {
        cart[this.id - 1] = "0";
        localStorage.setItem("cart", cart);

        button.innerHTML = "Add to Cart";
        document.getElementById("cart-count").innerHTML--;
      }
    };

    let item = document.createElement("li");
    item.setAttribute("class", "product");

    const style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "styles/styles.css");

    item.appendChild(image);
    item.appendChild(title);
    item.appendChild(price);
    item.appendChild(button);
    shadow.appendChild(style);
    shadow.appendChild(item);
  }
}

customElements.define("product-item", ProductItem);