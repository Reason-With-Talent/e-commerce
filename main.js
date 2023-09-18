cartItems.innerHTML = `<h3 id="emp">Your cart is empty.</h3>`
let button1 = document.getElementById("one")

console.log(button1.value)
button1.addEventListener("click", () => {
    console.log("Button One Close")
    nav.classList.add("remove-navbar")
    nav.classList.remove("add-navbar")


})

let button2 = document.getElementById("two")

console.log(button2.value)
button2.addEventListener("click", () => {
    console.log("Display nav")
    nav.classList.add("add-navbar")
    nav.classList.remove("remove-navbar")


})


three.addEventListener("click", () => {
    console.log("got here")
    four.classList.toggle("show-cart")
})

var  ProductImg  = document.getElementById("ProductImg") 
var SmallImg =  document.getElementsByClassName("small-img")
   SmallImg [0].onclick = function()
   {
    ProductImg.src = SmallImg[0].src; 
   }
   SmallImg [1].onclick = function()
   {
       ProductImg.src = SmallImg[1].src; 
   }
   SmallImg [2].onclick = function()
   {
        ProductImg.src = SmallImg[2].src; 
   }
   SmallImg [3].onclick = function()
   {
        ProductImg.src = SmallImg[3].src; 
   }

  
min.addEventListener('click', () => {
    let value = qty.innerHTML
    if (value != 0) {
        qty.innerHTML -= 1
        rated.innerHTML = parseInt(value) - 1
        total.innerHTML = parseInt(amount.innerHTML) * parseInt(qty.innerHTML)
        //emp.innerHTML = "display"
    } 
})


plus.addEventListener('click', () => {
    let value = qty.innerHTML
    qty.innerHTML = parseInt(value) + 1
    rated.innerHTML = parseInt(value)+1
    total.innerHTML = parseInt(amount.innerHTML) * parseInt(qty.innerHTML)
})


submit.addEventListener('click', () =>{
    const products = []
    let itemValue = {
        "item_name": item_name.innerHTML,
        "price": price.innerHTML,
        "qty": qty.innerHTML
    }
    products.push(itemValue)
    console.log(products)
    localStorage.setItem("item", products)
    let datas = localStorage.getItem("item")
    products.forEach(item => {
        console.log(item.item_name)
        cartItems.innerHTML = `                 <div class="filled" id="full">
        <div class="filled-one">
            <div class="fill-one">
                <img src="IMAGES/image-product-1.jpg" alt="">
            </div>
            <div class="fill-two">
                <P>${item.item_name}</P>
                <div class="fill-three">
                    <span>$<span id="amount">${item.price}</span> x <span id="rated">${item.qty}</span> </span>
                    <div class="ans">
                        <h5>$<span id="total">${parseInt(item.price)*parseInt(item.qty)}</span></h5>
                    </div>
                </div>
            </div>
            <div class="delete">
                <img src="IMAGES/icon-delete.svg" alt="" srcset="">
            </div>
        </div>
        <button class="button-two" id="checkout">Checkout</button>
        <p id="error"></p>
    </div>`
    });


})

 

checkout.addEventListener('click', () => {

let errorParagraph = document.getElementById("error")
console.log(errorParagraph.innerHTML)
   console.log("button clicked")
   errorParagraph.textContent = "Something went wrong, please try again"
})