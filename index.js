// Initialise starting cart price 
let totalPrice = 0;

let cartArray = [];

// Display current cart total
const updateCart = () => {
    document.querySelector('#cartTotal').innerHTML = `Cart Total: $${totalPrice} ➔`;
    document.querySelector('#checkout').innerHTML = `Checkout Cart: $${totalPrice}`;
    document.querySelector('#modalEmpty').innerHTML = '';
}

//Add event listeners to each 'Add To Cart' button
var addToCart = function() {
    document.onclick = function(e) {
      if (e.target.className == 'addToCart') {
        var itemPrice = Number(e.target.getAttribute("data-price"));
        var itemName = e.target.getAttribute("data-name");
        //Increase cart total 
        totalPrice += itemPrice;
        // Display cart total
        updateCart();

        
        cartArray.push(`<li class="list-group-item">${itemName} | $${itemPrice} </li>`);
        document.querySelector('#cartContents').innerHTML = cartArray.join('');
      }
    }
  }

addToCart();

//// Add  cart item to new array 




