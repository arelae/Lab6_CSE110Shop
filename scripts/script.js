// create a fetch request to the following URL:
window.addEventListener('DOMContentLoaded', () => {
  let prods = JSON.parse(localStorage.getItem('products'));

  // check before your initial fetch request now to see if it is in local storage first
  if(prods in localStorage){
    for (const i in prods)
      loadProd(prods[i]);
  }
  else { // add it to local storage
    fetch('https://fakestoreapi.com/products')
      .then( (response) => response.json())
      .then( (data) => JSON.stringify(data))
      .then( (info) => localStorage.getItem('products'))
      .then( () => {
        prods = JSON.parse(localStorage.getItem('products'));
      })
      .then( () =>{
        localStorage.setItem('cart', new Array(products.length).fill(0).toString());
        for (const i in prods) loadProd(prods[i]);
      });
  }
});

let loadProd = function() {
  let cart = localStorage.getItem('cart').split(',');
  let list = document.createElement('product-item');
  list.setAttribute('id', item.id);
  document.getElementById('product-list').appendChild(listing);
  list.shadowRoot.querySelector('.title').innerHTML = item.title;
  list.shadowRoot.querySelector('.price').innerHTML = '$' + item.price.toFixed(2);
  list.shadowRoot.querySelector('img').src = item.image;
  list.shadowRoot.querySelector('img').src = item.image;
  list.shadowRoot.querySelector('img').alt = item.title;

  if (cart[item.id - 1] === '0') {
    list.shadowRoot.querySelector('btn').innerHTML = 'Add to cart';
  } else {
    list.shadowRoot.querySelector('btn').innerHTML = 'Remove from cart';
    document.getElementById('cart-count').innerHTML++;
  }
  return item;
};