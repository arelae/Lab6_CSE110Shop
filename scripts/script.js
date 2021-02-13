// Script.js

// create a fetch request to the following URL:
window.addEventListener('DOMContentLoaded', () => {
  // check before your initial fetch request now to see if it is in local storage first
  if('products' in localStorage){
    alert('in localStorage');
    // alert(localStorage.getItem('products'[0])); 
  } 
  else { // add it to local storage
    // alert('no');
    const myURL = fetch('https://fakestoreapi.com/products');
    localStorage.setItem('products', myURL);
  }
});