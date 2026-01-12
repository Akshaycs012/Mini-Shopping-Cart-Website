
// Step 1: Select DOM elements (Basic Setup)

// 1. Product list
const productList = document.querySelectorAll(".product");

// 2. Cart body (where items will be shown)
const cartBody = document.getElementById("cart-body");

// 3. Total display span
const totalSpan = document.getElementById("total");

// 4. Cart data structure (empty array to store added items)
let cart = [];


productList.forEach((product)=>{
    const addBtn = product.querySelector(".add-btn");

    addBtn.addEventListener("click",()=>{
        addToCart(product);
    });
});

function addToCart(product){
    const id = product.dataset.id;
    const price = Number(product.dataset.price);
    const name = product.querySelector("h3").innerText;

    const existingItem = cart.find((item)=>item.id === id);

    if(existingItem){
        existingItem.qty += 1;
    }
    else{
        const newItem = {id , price , name , qty : 1};
        cart.push(newItem);
    }
    console.log(cart);
    renderCart();
}

function renderCart(){
    cartBody.innerHTML = "";

    cart.forEach((item)=>{
        const tr = document.createElement("tr");

        const nameD = document.createElement("td");
        nameD.textContent = item.name;

        const qtyD = document.createElement("tr");
        qtyD.textContent = item.qty;

        const priceD = document.createElement("td");
        priceD.textContent = item.price*item.qty;

        const removeTD = document.createElement("td");
        removeTD.textContent = "X"; // temporary button placeholder
        removeTD.style.cursor = "pointer";
        removeTD.style.color = "red";

        removeTD.addEventListener("click",()=>{
            //
        });

        tr.append(nameD);
        tr.appendChild(qtyD);
        tr.append(priceD);
        tr.append(removeTD);

        cartBody.appendChild(tr);


        
    })
}