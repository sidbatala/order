// Data Storage
let orders = JSON.parse(localStorage.getItem('orders')) || [];
let products = JSON.parse(localStorage.getItem('products')) || [];
let customers = JSON.parse(localStorage.getItem('customers')) || [];

// Toast Notification
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.style.display = 'block';
  setTimeout(() => toast.style.display = 'none', 3000);
}

// Save Data to LocalStorage
function saveData() {
  localStorage.setItem('orders', JSON.stringify(orders));
  localStorage.setItem('products', JSON.stringify(products));
  localStorage.setItem('customers', JSON.stringify(customers));
}

// Add Order
function addOrder(customer, status) {
  const newOrder = { id: orders.length + 1, customer, status };
  orders.push(newOrder);
  saveData();
  showToast('Order added successfully!');
}

// Add Product
function addProduct(name, price, stock) {
  const newProduct = { id: products.length + 1, name, price, stock };
  products.push(newProduct);
  saveData();
  showToast('Product added successfully!');
}

// Add Customer
function addCustomer(name, email, phone) {
  const newCustomer = { id: customers.length + 1, name, email, phone };
  customers.push(newCustomer);
  saveData();
  showToast('Customer added successfully!');
}