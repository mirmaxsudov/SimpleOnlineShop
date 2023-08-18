const productsDiv = document.getElementById('product-cards');

function displayProducts() {
    productsDiv.innerHTML = "";
    productArray.map(product => {
        productsDiv.innerHTML += `
      <div class="product-card">
      <div class="badge">New Product</div>
      <div class="product-tumb">
          <img src="https://cdn-icons-png.flaticon.com/512/2806/2806251.png">
      </div>
      <div class="product-details">
          <span class="product-catagory">${product.category}</span>
          <h4><a href="#">${product.name}</a></h4>
          <div class="product-bottom-details">
              <div class="product-price">${product.price}$</div>
              <div class="product-links">
                  <a href="#"><i class="fa fa-heart"></i></a>
                  <a href="#"><i class="fa fa-shopping-cart"></i></a>
              </div>
          </div>
      </div>
  </div>
      `
    })
}

// DATABASES
const productArray = [
    {
        name: 'Iphone',
        price: 1500,
        category: 'electronics'
    },
    {
        name: 'Pencil',
        price: 100,
        category: 'school'
    },
    {
        name: 'Termometer',
        price: 200,
        category: 'health'
    }
]

const cartArray = [];

displayProducts();

document.getElementById('add-product-btn').addEventListener('click', () => {
    let name = document.getElementById('product-name').value;
    let price = +document.getElementById('product-price').value;
    let category = document.getElementById('product-category').value;

    // 1. Create new product object based on input values
    const newProduct = {
        name,
        price,
        category
    };

    // 2. Add that product into the array
    productArray.push(newProduct);

    // 3. Display the updated array again
    displayProducts();
})

document.getElementById('new-product-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.reset();
})
