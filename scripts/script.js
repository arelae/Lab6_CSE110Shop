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
      .then((response) => response.json())
      .then((data) => JSON.stringify(data))
      .then((info) => localStorage.getItem('products'))
      .then( () => {
        prods = JSON.parse(localStorage.getItem('products'));
      })
      .then( () =>{
        localStorage.setItem('cart', new Array(products.length).fill(0).toString());
        for (const i in prods) loadProd(prods[i]);
      });
  }
});