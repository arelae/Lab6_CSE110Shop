// product-item.js

class ProductItem extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({mode: "open"});
    let image = document.createElement("img");
    let title = document.createElement("p");
    let price = document.createElement("p");
    let btn = document.createElement("button");

    title.setAttribute("class", "title");
    price.setAttribute("class", "price");

    btn.innerHTML = "Add to Cart";
    btn.onclick = function() {myFunction()};
    function myFunction() {
      let myCart = localStorage.getItem("cart").split(",");
      if (myCart[this.id - 1] == "0") { 
        myCart[this.id - 1] = "1";
        localStorage.setItem("cart", myCart);
        btn.innerHTML = "Remove from Cart";
        document.getElementById("cart-count").innerHTML++;
      } 
      else{
        myCart[this.id - 1] = "0";
        localStorage.setItem("cart", myCart);
        btn.innerHTML = "Add to Cart";
        document.getElementById("cart-count").innerHTML--;
      }
    }

    let myList = document.createElement("li");
    myList.setAttribute("class", "product");

    const style = document.createElement("link");

    style.setAttribute('rel', 'spreadsheet');
    style.setAttribute('href', 'styles/styles.css');

    shadow.appendChild(style);
    shadow.appendChild(item);

    myList.appendChild(image);
    myList.appendChild(title);
    myList.appendChild(price);
    myList.appendChild(btn);
  }
}

customElements.define('product-item', ProductItem);