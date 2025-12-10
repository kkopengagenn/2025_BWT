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



// массив меню
const drinksData = [
    { id: 1, name: "Classic Milk Tea", description: "Original black tea with creamy milk and chewy tapioca pearls.", price: 15, image: "../images/classic_flavor.jpg" },
    { id: 2, name: "Grape Tea", description: "Sweet grape smoothie with green tea.", price: 10, image: "../images/grape_flavor.jpg" },
    { id: 3, name: "Mango Tea", description: "Fresh mangoes and delightful green tea.", price: 18, image: "../images/mango_flavor.jpg" },
    { id: 4, name: "Matcha Boba", description: "Japanese matcha with chewy tapioca pearls.", price: 19, image: "../images/matcha_flavor.jpg" },
    { id: 5, name: "Strawberry Yogurt", description: "Refreshing yogurt base with real strawberry pieces.", price: 18, image: "../images/strawberry_flavor.jpg" },
    { id: 6, name: "Jasmine Green Tea with Cheese Foam", description: "Traditional jasmine tea topped with creamy cheese foam.", price: 18, image: "../images/jasminetea.webp" }
];

let cart = [];

// рендеринг товаров
document.addEventListener("DOMContentLoaded", function () {
    renderProducts();
    updateCart();
});

function renderProducts() {
    
    const container = document.getElementById("product-container");
    container.innerHTML = "";

    drinksData.forEach(drink => {
        const card = document.createElement("div");
        card.className = "col-md-6 col-lg-4 col-xl-4 mb-4";

        card.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${drink.image}" class="card-img-top" alt="${drink.name}" style="height: 180px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${drink.name}</h5>
                    <p class="card-text flex-grow-1">${drink.description}</p>
                    <p class="card-text"><strong>Price: ¥${drink.price}</strong></p>
                    <label>
                        Quantity: 
                        <input type="number" class="cart-qty" data-id="${drink.id}" data-name="${drink.name}" value="0" min="0" style="width:60px;">
                    </label>
                </div>
            </div>
        `;

        container.appendChild(card);
    });

    //изменение количества
    document.querySelectorAll(".cart-qty").forEach(input => {
        input.addEventListener("change", () => {
            const id = Number(input.dataset.id);
            const qty = Number(input.value);
            const product = drinksData.find(p => p.id === id);

            //удаление продукта
            cart = cart.filter(p => p.id !== id);

            //если количество > 0, добавляем в корзину
            for (let i = 0; i < qty; i++) {
                cart.push(product);
            }

            updateCart();
        });
    });
}

//обновление корзины
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    let total = 0;
    let list = "";

    //подсчет кол-ва каждого товара
    const counts = {};
    cart.forEach(item => {
        total += item.price;
        counts[item.id] = counts[item.id] ? counts[item.id] + 1 : 1;
    });

    Object.keys(counts).forEach(id => {
        const item = drinksData.find(p => p.id == id);
        list += `${item.name} ¥${item.price}  = ¥${item.price * counts[id]}<br>`;
    });

    cartItems.innerHTML = list || "Cart is empty";
    document.getElementById("cart-total").textContent = total;
}
//очистка корзины
function clearCart() {
    cart = [];
    updateCart();

    document.querySelectorAll(".cart-qty").forEach(input => input.value = 0);
}

//отправка на удаленный сервер 
document.addEventListener("DOMContentLoaded", function() {
    const sendBtn = document.getElementById('sendOrder');
    if (sendBtn) {
        sendBtn.addEventListener('click', () => {
            const inputs = document.querySelectorAll('.cart-qty');
            const result = [];

            let hasItem = false;
            inputs.forEach(inp => {
                const qty = Number(inp.value);
                const name = inp.dataset.name; 
                if (qty > 0) {
                    result.push(`${name}:${qty}`);
                    hasItem = true;
                }
            });
            if (!hasItem) {
                alert('Выберите хотя бы один товар.');
                return;
            }
            const query = encodeURIComponent(result.join(', '));
            var serverURL="https://www.google.com/search?q=";
            window.open(serverURL + query, '_blank');
        });
    }
});
