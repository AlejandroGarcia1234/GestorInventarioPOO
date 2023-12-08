// GitHub: https://github.com/AlejandroGarcia1234/GestorInventarioPOO

import { Product } from './product.js';
import { ProductManager } from './productManager.js';
import { storeProducts } from './localStorage.js';

// Instanciamos el administrador de productos
const productManager = new ProductManager();

let productList = [
    new Product(1, "One Piece", "Eiichiro Oda", Product.getRandomQuantity(), 7.95 ),
    new Product(2, "Berserk", "Kentaro Miura", Product.getRandomQuantity(), 9.95 ),
    new Product(3, "20th Century Boys", "Naoki Urasawa", Product.getRandomQuantity(), 20.75 ),
    new Product(4, "Monster", "Naoki Urasawa", Product.getRandomQuantity(), 21.95 ),
    new Product(5, "Naruto", "Masashi Kishimoto", Product.getRandomQuantity(), 7.95 ),
    new Product(6, "Bleach", "Tite Kubo", Product.getRandomQuantity(), 6.95 ),
    new Product(7, "Bobobo", "Yoshio Sawai", Product.getRandomQuantity(), 12.95 ),
    new Product(8, "Uzumaki", "Junji Ito", Product.getRandomQuantity(), 30.95 ),
    new Product(9, "Mushishi", "Yuki Urushibara", Product.getRandomQuantity(), 25.95 ),
    new Product(10, "Evangelion", "Yoshiyuki Sadamoto", Product.getRandomQuantity(), 25.99 ),
    new Product(11, "Jujutsu Kaisen", "Gege Akutami", Product.getRandomQuantity(), 8.95 ),
    new Product(12, "JoJo's Bizarre Adventure", "Hirohiko Araki", Product.getRandomQuantity(), 19.95 ),
    new Product(13, "Nausicaa", "Hayao Miyazaki", Product.getRandomQuantity(), 50.95 ),
    new Product(14, "Hellsing", "Kota Hirano", Product.getRandomQuantity(), 29.95 ),
    new Product(15, "Afro Samurai", "Takashi Okazaki", Product.getRandomQuantity(), 14.95 ),
    new Product(16, "Akira", "Katsuhiro Otomo", Product.getRandomQuantity(), 32.95 ),
    new Product(17, "Battle Royale", "Koushun Takami", Product.getRandomQuantity(), 18.95 ),
    new Product(18, "Blame!", "Tsutomu Nihei", Product.getRandomQuantity(), 12.75 ),
    new Product(19, "Death Note", "Tsugumi Oba", Product.getRandomQuantity(), 29.99 ),
    new Product(20, "Ghost in the Shell", "Masamune Shirow", Product.getRandomQuantity(), 14.95 ),
    new Product(21, "Pluto", "Naoki Urasawa", Product.getRandomQuantity(), 24.95 ),
    new Product(22, "Shaman King", "Hiroyuki Takei", Product.getRandomQuantity(), 20.75 ),
    new Product(23, "Trigun", "Yasuhiro Nightow", Product.getRandomQuantity(), 10.95 ),
    new Product(24, "Wanted!", "Eiichiro Oda", Product.getRandomQuantity(), 7.95 ),
    new Product(25, "Dragon Ball", "Akira Toriyama", Product.getRandomQuantity(), 16.85 ),

];

// Vamos agregando cada producto a nuestro gestor de inventario
productList.forEach(product => productManager.addProduct(product));

// Almacenamos los productos en el almacenamiento local
storeProducts(productList);

// De esta forma podremos buscar productos en nuestro inventario
const inventorySearch = document.getElementById('search-input');

inventorySearch.addEventListener('input', function(e) {
  const searchData = e.target.value;

  productManager.searchProduct(searchData);
});

// De esta forma podremos añadir productos a nuestro inventario
const inventoryAdd = document.getElementById('inventory-tab-form');

inventoryAdd.addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('product-name').value;
  const autor = document.getElementById('product-author').value;
  const cantidad = document.getElementById('product-qty').value;
  const precio = document.getElementById('product-price').value;
  const id = Date.now();
  const product = new Product(id, nombre, autor, cantidad, precio);

  productManager.addProduct(product);

  this.reset();
});

// De esta forma podremos editar productos de nuestro inventario
const inventoryEdit = document.getElementById('inventory-edit');

inventoryEdit.addEventListener('submit', function(e) {
  e.preventDefault(); 
  const nombre = document.getElementById('product-name').value;
  const autor = document.getElementById('product-author').value;
  const cantidad = document.getElementById('product-qty').value;
  const precio = document.getElementById('product-price').value;
  const id = document.getElementById('edit-id').value;

  productManager.updateProduct(id, nombre, autor, cantidad, precio);

  this.reset(); 
});