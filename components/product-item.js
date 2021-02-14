// product-item.js

class ProductItem extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({mode: "open"});
    let image = document.createElement("img");
    let title = document.createElement("p");
    let price = document.createElement("p");
    let btn = document.createElement("button");
    price.setAttribute("class", "price");
    title.setAttribute("class", "title");
    
    btn.innerHTML = "Add to Cart";

    btn.onclick = () => {
      let cart = localStorage.getItem("cart").split(",");
      if(cart[this.id - 1] == "0"){ 
        document.getElementById("cart-count").innerHTML++;
        cart[this.id - 1] = "1";
        localStorage.setItem("cart", cart);
        btn.innerHTML = "Remove from Cart";
      }  
      else{
        document.getElementById("cart-count").innerHTML--;
        cart[this.id - 1] = "0";
        localStorage.setItem("cart", cart);
        btn.innerHTML = "Add to Cart";
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
    item.appendChild(btn);
    shadow.appendChild(style);
    shadow.appendChild(item);
  }
}

customElements.define("product-item", ProductItem);
