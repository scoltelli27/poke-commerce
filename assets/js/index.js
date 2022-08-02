$("#add_product").submit(function (event) {
  alert("Data was stored");
});

const cartBtn = document.querySelector(".cart-btn");
const overlay = document.querySelector(".cart-overlay");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector(".close-cart");
const bagBtn = document.querySelectorAll(".bag-btn");
const burgerBtn = document.querySelector(".nav-icon");
const burgerMenu = document.querySelector(".burger");
const logBtn = document.getElementById("logbutton");

//Show cart and overlay
cartBtn.addEventListener("click", function () {
  overlay.classList.toggle("hidden");
  cart.classList.toggle("showCart");
});

//Hide cart and overlay
closeCart.addEventListener("click", function () {
  overlay.classList.add("hidden");
  cart.classList.remove("showCart");
});

overlay.addEventListener("click", function () {
  overlay.classList.add("hidden");
  cart.classList.remove("showCart");
  burgerMenu.classList.remove("showBurger");
});

// Add event listener to each "add to basket" button
bagBtn.forEach((bagBtn) => {
  bagBtn.addEventListener("click", () => {
    overlay.classList.toggle("hidden");
    cart.classList.toggle("showCart");
  });
});

//Burger menu
burgerBtn.addEventListener("click", function () {
  overlay.classList.toggle("hidden");
  burgerMenu.classList.add("showBurger");
});

//Log in button
logBtn.addEventListener("click", function () {
  location.href = "/add-product";
});
