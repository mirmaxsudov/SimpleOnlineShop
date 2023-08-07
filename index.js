const arrOfProduts = [];
const arrOfAddedToBasketProducts = [];

function addNewProduct() {

    const nameProduct = document.getElementById('name').value;
    const priceProduct = document.getElementById('price').value;
    let linkProduct = document.getElementById('link').value;
    const category = document.getElementById('category').value;

    let message = "-1";

    if (nameProduct === null || nameProduct === "")
        message = "Please enter a product name";
    else if (priceProduct === "" || +priceProduct < 0)
        message = "Product price should not be negative";
    else if (category === null || category === "")
        message = "Please select a one of categories";
    else {
        if (linkProduct === null || linkProduct === "") {
            linkProduct = getImageLinkByCategory(category);
        }
    }

    if (message != "-1") {
        showOnScreenTag(message, false);
        return;
    }

    const ProductObj = {
        id: crypto.randomUUID(),
        name: nameProduct,
        price: priceProduct,
        linkImg: linkProduct,
        category: category,
    };


    arrOfProduts.push(ProductObj);
    showOnScreenTag("Added new product", true);
    showAllProducts();
}

function addToBasket(id) {
    const product = arrOfProduts.find((element) => element.id === id);

    if (!product) {
        showOnScreenTag("Invalid id", false);
        return;
    }

    const addedToBasketProduct = {
        product: product,
        addedTime: new Date(),
        count: 1,
    };

    const existingProduct = arrOfAddedToBasketProducts.find((element) => element.product.id === id);

    if (existingProduct) {
        addedToBasketProduct.count = existingProduct.count + 1;

        const index = arrOfAddedToBasketProducts.indexOf(existingProduct);
        if (index !== -1) {
            arrOfAddedToBasketProducts.splice(index, 1);
        }
    }

    arrOfAddedToBasketProducts.push(addedToBasketProduct);

    const tag2 = document.getElementById('tag2');
    tag2.innerHTML = +tag2.innerHTML + 1;
    showOnScreenTag('Added to basket', true);
    showOnSideBar();
}

function showAllProducts() {
    showOnSideBar();
    const cardDiv = document.getElementById('card-container');
    cardDiv.innerHTML = "";

    arrOfProduts.forEach((element) => {
        cardDiv.innerHTML +=
            `<div class="card">
          <img src="${element.linkImg}" alt="404">
          <h2>${element.name}</h2>
          <p>Price -> ${element.price}</p>
          <button onclick="addToBasket('${element.id}')">Add to basket</button>
          <button onclick="remove('${element.id}')">Delete</button>
        </div>`;
    });
}

function remove(id) {
    const indexFirst = +arrOfProduts.findIndex(product => product.id === id);

    if (indexFirst === -1) {
        showOnScreenTag("Invalid id", false);
        return;
    }
    arrOfProduts.splice(indexFirst, 1);

    const indexSecond = +arrOfAddedToBasketProducts.findIndex(added => added.product.id === id);

    if (indexSecond !== -1) {
        const tag2 = document.getElementById('tag2');
        tag2.innerHTML = +tag2.innerHTML - arrOfAddedToBasketProducts[indexSecond].count;
        arrOfAddedToBasketProducts.splice(indexSecond, 1);
    }

    showOnScreenTag("Removed successfully", true);
    showAllProducts();
    showOnSideBar();
}


function getImageLinkByCategory(category) {
    if (category === "clothes")
        return "Images/clothes.jpg";
    else if (category === "school")
        return "Images/school.jpg";
    else
        return "Images/technology.jpg";
}

function showOnScreenTag(message, isError = false) {
    let willShow = document.getElementById('tag');
    willShow.innerHTML = message;

    if (!isError) {
        willShow.style.color = 'red';
    } else {
        willShow.style.color = 'green';
    }


    setTimeout(function () {
        willShow.innerHTML = "Welcome to Website";
        willShow.style.color = 'black';
    }, 3000);
}

function showOnSideBar() {
    const divSidebar = document.getElementById('mainSide');
    divSidebar.innerHTML = "Hello from the sidebar<br>";

    arrOfAddedToBasketProducts.map((element) => {
        divSidebar.innerHTML += `<h3>Name => ${element.product.name} --- Price => ${element.product.price} --- Count => ${element.count}</h3><br>`;
    });
}

function sort() {
    arrOfProduts.sort((a, b) => a.price - b.price);
    showOnScreenTag("Sorted successfully", true);
    showAllProducts();
}