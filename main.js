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
    // let life = emp.innerHTML
    // if (life = 0) {
     
    // }
})


plus.addEventListener('click', () => {
    let value = qty.innerHTML
    qty.innerHTML = parseInt(value) + 1
    rated.innerHTML = parseInt(value)+1
    total.innerHTML = parseInt(amount.innerHTML) * parseInt(qty.innerHTML)
})
 
let errorParagraph = document.getElementById("error")
console.log(errorParagraph)

function checkout() {
   console.log("button clicked")
   errorParagraph.textContent = "Something went wrong, please try again ❗"
}