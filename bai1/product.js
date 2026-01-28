// Câu 1: 
class Product {
  constructor(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
  }
}

// Câu 2: 
const products = [
  new Product(1, "iPhone 15", 30000000, 10, "Phones", true),
  new Product(2, "Samsung S23", 25000000, 0, "Phones", true),
  new Product(3, "MacBook Pro", 45000000, 5, "Laptops", true),
  new Product(4, "Dell XPS", 35000000, 3, "Laptops", false),
  new Product(5, "AirPods Pro", 6000000, 20, "Accessories", true),
  new Product(6, "Apple Watch", 12000000, 0, "Accessories", false),
];

// câu 3:
const nameAndPrice = products.map(({ name, price }) => ({ name, price }));
console.log("Câu 3:", nameAndPrice);

// Câu 4: 
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("Câu 4:", inStockProducts);

// Câu 5:
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("Câu 5:", hasExpensiveProduct);

// Câu 6: 
const allAccessoriesAvailable = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable);

console.log("Câu 6:", allAccessoriesAvailable);

// Câu 7: 
const totalInventoryValue = products.reduce(
  (total, p) => total + p.price * p.quantity,
  0
);
console.log("Câu 7:", totalInventoryValue);

// Câu 8: for...of
console.log("Câu 8:");
for (const p of products) {
  console.log(`${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}

// Câu 9:
console.log("Câu 9:");
for (const key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}

// Câu 10: 
const sellingAndInStockNames = products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name);

console.log("Câu 10:", sellingAndInStockNames);
