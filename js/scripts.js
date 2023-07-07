/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


    // Get all the "Add to cart" buttons
    const addToCartButtons = document.querySelectorAll('.addToCart');

    // Attach a click event listener to each button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Disable the button
            button.disabled = true;
            // Change the button text
            button.innerText = 'Added to cart';
            // Enable the corresponding "Remove from cart" button
            button.nextElementSibling.disabled = false;
        });
    });
    
    const removeFromCartButtons = document.querySelectorAll('.removeFromCart');

// Attach a click event listener to each "Remove from cart" button
removeFromCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Enable the corresponding "Add to cart" button
        button.previousElementSibling.disabled = false;
        // Change the button text
        button.previousElementSibling.innerText = 'Add to cart';
        // Disable the "Remove from cart" button
        button.disabled = true;
    });
});

const ratingStars = document.querySelectorAll('.rating-star');

// Function to set the rating based on a given value
function setRating(ratingValue) {
  // Convert the rating value to a number and ensure it is within the valid range (1 to 5)
  const rating = parseFloat(ratingValue);
  if (isNaN(rating) || rating < 1 || rating > 5) {
    console.error('Invalid rating value. Please provide a number between 1 and 5.');
    return;
  }

  // Loop through each star and determine its fill level
  ratingStars.forEach(star => {
    const starValue = parseFloat(star.dataset.value);
    if (starValue <= rating) {
      star.classList.add('bi-star-fill');
    } else {
      star.classList.remove('bi-star-fill');
    }
  });
}

// Example usage:
const ratingValue = 3.5; // Replace with your desired rating value
setRating(ratingValue);


