// Task 1: Product Search (Easy)

let productList = document.getElementById("productList")
let products = []
let cart = []
async function fetchProducts() {
    try {
        let response = await fetch("https://fakestoreapi.com/products")
        products = await response.json()
        displayProducts(products)
    } 
    catch (error){
        productList.innerHTML = `<h2 class="no-product">Failed to Load Products</h2>`
        console.log(error)
    }
}
function displayProducts(productArray) {
    productList.innerHTML = ""
    if (productArray.length === 0) {
        productList.innerHTML = `<h2 class="no-product">No Products Found</h2>`
        return
    }
    productArray.forEach(product => {
        productList.innerHTML += `<div class="product">
            <img
                src="${product.image}"
                alt="${product.title}"
                class="product-image"
                data-id="${product.id}">
            <h3>${product.title}</h3>
            <p>₹ ${product.price.toFixed(2)}</p>
            <button class="add-cart"data-id="${product.id}">Add To Cart</button>
        </div>` })
}
const searchInput = document.getElementById("search")
searchInput.addEventListener("input", function () {
    let searchValue = searchInput.value.toLowerCase()
    let filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchValue));
    displayProducts(filteredProducts);
});

//Task 2: Category Filter (Medium)

let categoryButtons = document.querySelectorAll(".category-btn")
categoryButtons.forEach(button => {
    button.addEventListener("click", function () {
        let category = this.dataset.category
        if (category === "all") {
            displayProducts(products)
        } 
        else 
            {
            let filteredProducts = products.filter(product =>
                 product.category === category
            )
            displayProducts(filteredProducts)
        }
    })
})

//Task 3: Price Sorting (Medium)

let lowToHigh = document.getElementById("lowToHigh")
let highToLow = document.getElementById("highToLow")

lowToHigh.addEventListener("click", () => {
    let sortedProducts = [...products].sort((a, b) => a.price - b.price)
    displayProducts(sortedProducts)
})

highToLow.addEventListener("click", () => {
    let sortedProducts = [...products].sort((a, b) => b.price - a.price)
    displayProducts(sortedProducts)
})
fetchProducts()

//Task 4: Product Details Popup (Medium-Hard)

let modal = document.getElementById("modal")
let modalImage = document.getElementById("modalImage")
let modalTitle = document.getElementById("modalTitle")
let modalDescription = document.getElementById("modalDescription")
let modalPrice = document.getElementById("modalPrice")
let modalCategory = document.getElementById("modalCategory")
let modalRating = document.getElementById("modalRating")
let close = document.getElementById("close")

productList.addEventListener("click",function(event) {
    if (event.target.classList.contains("product-image")) {
        let id = Number(event.target.dataset.id)
        let product = products.find(item => item.id === id)
        modal.style.display = "flex"
        modalImage.src = product.image
        modalTitle.textContent = product.title
        modalDescription.textContent = product.description
        modalPrice.textContent = "Price : ₹ " + product.price.toFixed(2)
        modalCategory.textContent = "Category : " +product.category
        modalRating.textContent = "Rating : " +product.rating.rate + " ⭐"
    }
})
close.addEventListener("click", function () {
    modal.style.display = "none"
})
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none"
    }
})

//Task 5: Shopping Cart (Company-Level)

let cartItems = document.getElementById("cartItems")
cartItems.addEventListener("click", function(event){
    if(event.target.classList.contains("delete-btn")){
        let id = Number(event.target.dataset.id)
         removeFromCart(id)
    }
})

productList.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-cart")) {
        let id = Number(event.target.dataset.id)
        addToCart(id)
    }
})
function addToCart(id) {
    let product = products.find(item => item.id === id)
    let index = cart.findIndex(item => item.id === id)
    if (index !== -1) {
        cart[index].quantity++
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1
        })
    }
    displayCart()
}

function displayCart(){
    if (cart.length === 0) {
    cartItems.innerHTML = `
        <div class="cart-title">
            <div class="cart-left">
                <span class="cart-icon">🛒</span>
                <h3>Shopping Cart</h3>
            </div>
            <div id="cartCount">0</div>
        </div>

        <p style="text-align:center;padding:30px;color:gray;font-size:18px;">
            Your cart is empty 🛒
        </p>
    `
    return
}
    let html = `<div class="cart-title">
        <div class="cart-left">
            <span class="cart-icon">🛒</span>
            <h3>Shopping Cart</h3>
        </div>

        <div id="cartCount">
            ${cart.reduce((total,item)=>total+item.quantity,0)}
        </div>

    </div>
    `
    cart.forEach(item=>{
        html += `<div class="cart-item">
            <div>
                <h4>${item.title}</h4>
                <p>Quantity : ${item.quantity}</p>
            </div>
            <div class="cart-right">
                <p>₹ ${(item.price*item.quantity).toFixed(2)}</p>
                <button
                    class="delete-btn"
                    data-id="${item.id}">
                    Delete
                </button>
            </div>
        </div> `
    })
    let grandTotal = cart.reduce((total,item)=>{

        return total + item.price * item.quantity
    },0)
    html += `
    <h2 class="grand-total">
        Grand Total : ₹ ${grandTotal.toFixed(2)}
    </h2>
    <button class="checkout-btn">
        Checkout
    </button>`
    cartItems.innerHTML = html
}
function removeFromCart(id){
    cart = cart.filter(item => item.id !== id)
    displayCart()
}
displayCart()