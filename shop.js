// form

document.addEventListener("DOMContentLoaded", function() {

var form=document.getElementById("feedbackForm");

form.addEventListener("submit", function(event) {

event.preventDefault(); 

var userName=form.userName.value;
var drinksBought=form.drinksBought.value;
var likedMost=form.likedMost.value;

var serverURL="https://www.google.com/search?q=";

var query="?userName="+userName +"&drinksBought="+drinksBought+"&likedMost="+likedMost; window.location.href = serverURL + query;
    });
});


//shop 

//все карточки и контейнер для корзины
const cards=document.querySelectorAll(".card");
const cartItems=document.getElementById("cart-items");
const cartTotal=document.getElementById("cart-total");

let cart=[]; 

cards.forEach((card) => {
//чекбокс
    const checkbox = document.createElement("input");
    checkbox.type="checkbox";
    checkbox.style.marginTop="10px";

//чекбокс в карточке
    card.querySelector(".card-body").appendChild(checkbox);

    const title=card.querySelector(".card-title").innerText;
    const priceText=card.querySelector(".card-text strong").innerText; 
    const price=parseFloat(priceText.replace("Price: ¥", ""));

    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            //дбавляем товар в корзину
            cart.push({ title, price });
        } else {
            //убираем товар из корзины
            cart=cart.filter(item => item.title!==title);
        }
        updateCart();
    });
});

//обновления корзины
function updateCart() {
    cartItems.innerHTML=""; 
    let total=0;

    cart.forEach(item=> {
        const div=document.createElement("div");
        div.innerText=`${item.title} - ¥${item.price}`;
        cartItems.appendChild(div);
        total+=item.price;
    });

    cartTotal.innerText=total;
}

//очистка корзины
function clearCart() {
    cart=[];
    updateCart();
    /
    cards.forEach(card => {
        const checkbox=card.querySelector("input[type='checkbox']");
        if (checkbox) checkbox.checked = false;
    });
}



