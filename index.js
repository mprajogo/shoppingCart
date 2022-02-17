// Initialise starting cart price 
let totalPrice = 0;

//Initialise empty cart array
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
        
        cartArray.push(
            `<li class="list-group-item">
                <div class="row">
                    <div class="col">
                        ${itemName} | $${itemPrice} 
                    </div>
                    <div class="col">
                        <button class="btn btn-outline-secondary delete-button" data-price="${itemPrice}" data-name="${itemName}">Remove from cart</button>
                    </div>
                </div>
            </li>`);
        document.querySelector('#cartContents').innerHTML = cartArray.join('');
      }
    }
  }


//// Remove item from cart 

// var removeFromCart = function() {
//     document.onclick = function(e) {
//       if (e.target.className == 'delete-button') {
//         var itemPrice = Number(e.target.getAttribute("data-price"));
//         var itemName = e.target.getAttribute("data-name");
//         //Increase cart total 
//         totalPrice -= itemPrice;
//         // Display cart total
//         updateCart();
        
//         const index = cartArray.indexOf(
//             `<li class="list-group-item">
//                 <div class="row">
//                     <div class="col">
//                         ${itemName} | $${itemPrice} 
//                     </div>
//                     <div class="col">
//                         <button class="btn btn-outline-secondary delete-button" data-price="${itemPrice}" data-name="${itemName}">Remove from cart</button>
//                     </div>
//                 </div>
//             </li>`);
//         if (index > -1) {
//         cartArray.splice(index, 1); // 2nd parameter means remove one item only
//         }   
//       }
//     }
//   }

addToCart();
// removeFromCart();

