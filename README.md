# Funky Treats Shopping Cart 

Welcome to Funky Treats! This was a course project intended to apply my knowledge in Javascript, HTML and CSS. 

## The Brief

This app should satisfy the following minimum requirements:


- Have a pre-populated (hard coded) array of objects as products.
- Your product display should have (not limited to) product image, product name, product price
- All products should be displayed when the page loads
- Using an ‘add to cart’ button, the user should be able to add the products to a shopping cart list
- The shopping cart lists all products and displays a the total price


## Technologies Used

Javascript

CSS

HTML

Bootstrap 4.0

## Task 1 - Displaying products as objects
 I opted to use Boostrap card styling to display products on my website. Each product has an 'Add To Cart' button that is assigned specific attribute values 'data-price' and 'data-name'.

```html
<li class="list-group-item d-flex justify-content-center border-0" id="item-1">
                        <div class="card text-center border-0" style="width: 30rem;">
                            <img class="card-img-top" src="images/item2.png" alt="Card image cap">
                            <div class="card-body">
                              <span class="item-name">CHERRY ON TOP | $55</span>
                              <p class="item-description">A decadent two-tier cake frosted with raspberry buttercream and topped with glace cherries.</p>
                              <button class='addToCart' data-name="Cherry On Top Cake" data-price="55">Add To Cart</button>
                            </div>
                          </div>
                    </li>
```
## Task 2 - Adding products to a shopping cart list
Using Javasctipt, I created a function that would attach an event listener to the document. When an 'Add to Cart' button is clicked, the function increases the total price of the cart whilst pushing the product details as a list-group item into the cart array.  

```
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
                    <div class="col itemInCart">
                        <b>${itemName}</b> | $${itemPrice}
                    </div>
                    <div class="col justify-content-center text-center">
                        <button class="btn btn-outline-secondary delete-button" data-price="${itemPrice}" data-name="${itemName}">Remove from cart</button>
                    </div>
                </div>
            </li>`);
        document.querySelector('#cartContents').innerHTML = cartArray.join('');
      }
    }
  }
