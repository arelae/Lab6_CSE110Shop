class ProductItem extends HTMLElement {
  constructor() {
    super();

    // initializes elements
    let shadow = this.attachShadow({mode: "open"});
    let image = document.createElement("img");
    let title = document.createElement("p");
    let price = document.createElement("p");
    let btn = document.createElement("button");

    price.setAttribute("class", "price");
    title.setAttribute("class", "title");
    
    btn.innerHTML = "Add to Cart";
    // Button interaction
    btn.onclick = () => {
      let cart = localStorage.getItem("cart").split(",");

      // Adding to cart
      if(cart[this.id - 1] == "0"){ 
        document.getElementById("cart-count").innerHTML++;
        cart[this.id - 1] = "1";
        localStorage.setItem("cart", cart);
        btn.innerHTML = "Remove from Cart";
      }  
      // Removing from cart
      else {
        document.getElementById("cart-count").innerHTML--;
        cart[this.id - 1] = "0";
        localStorage.setItem("cart", cart);
        btn.innerHTML = "Add to Cart";
      }
    };

    // Creates list element as variable
    let item = document.createElement("li");
    item.setAttribute("class", "product");

    // Creates link element as variable
    const style = document.createElement("link");
    // Appends to link
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "styles/styles.css");

    // Appends to list
    item.appendChild(image);
    item.appendChild(title);
    item.appendChild(price);
    item.appendChild(btn);

    // Appends list and link to shadow
    shadow.appendChild(style);
    shadow.appendChild(item);
  }
}

customElements.define("product-item", ProductItem);