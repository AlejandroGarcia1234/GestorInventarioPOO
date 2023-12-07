import { Product } from './product.js';
import { ProductManager } from './productManager.js';
import { storeProducts } from './localStorage.js';

// Instanciar el administrador de productos
const productManager = new ProductManager();

let inventory = [
    { id: 1, nombre: "One Piece", autor: "Eiichiro Oda", cantidad: getRandomQuantity(), precio: 7.95 },
    { id: 2, nombre: "Berserk", autor: "Kentaro Miura", cantidad: getRandomQuantity(), precio: 9.95 },
    { id: 3, nombre: "20th Century Boys", autor: "Naoki Urasawa", cantidad: getRandomQuantity(), precio: 20.75 },
    { id: 4, nombre: "Monster", autor: "Naoki Urasawa", cantidad: getRandomQuantity(), precio: 21.95 },
    { id: 5, nombre: "Naruto", autor: "Masashi Kishimoto", cantidad: getRandomQuantity(), precio: 7.95 },
    { id: 6, nombre: "Bleach", autor: "Tite Kubo", cantidad: getRandomQuantity(), precio: 6.95 },
    { id: 7, nombre: "Bobobo", autor: "Yoshio Sawai", cantidad: getRandomQuantity(), precio: 12.95 },
    { id: 8, nombre: "Uzumaki", autor: "Junji Ito", cantidad: getRandomQuantity(), precio: 30.95 },
    { id: 9, nombre: "Mushishi", autor: "Yuki Urushibara", cantidad: getRandomQuantity(), precio: 25.95 },
    { id: 10, nombre: "Evangelion", autor: "Yoshiyuki Sadamoto", cantidad: getRandomQuantity(), precio: 25.99 },
    { id: 11, nombre: "Jujutsu Kaisen", autor: "Gege Akutami", cantidad: getRandomQuantity(), precio: 8.95 },
    { id: 12, nombre: "JoJo's Bizarre Adventure", autor: "Hirohiko Araki", cantidad: getRandomQuantity(), precio: 19.95 },
    { id: 13, nombre: "Nausicaa", autor: "Hayao Miyazaki", cantidad: getRandomQuantity(), precio: 50.95 },
    { id: 14, nombre: "Hellsing", autor: "Kota Hirano", cantidad: getRandomQuantity(), precio: 29.95 },
    { id: 15, nombre: "Afro Samurai", autor: "Takashi Okazaki", cantidad: getRandomQuantity(), precio: 14.95 },
    { id: 16, nombre: "Akira", autor: "Katsuhiro Otomo", cantidad: getRandomQuantity(), precio: 32.95 },
    { id: 17, nombre: "Battle Royale", autor: "Koushun Takami", cantidad: getRandomQuantity(), precio: 18.95 },
    { id: 18, nombre: "Blame!", autor: "Tsutomu Nihei", cantidad: getRandomQuantity(), precio: 12.75 },
    { id: 19, nombre: "Death Note", autor: "Tsugumi Oba", cantidad: getRandomQuantity(), precio: 29.99 },
    { id: 20, nombre: "Ghost in the Shell", autor: "Masamune Shirow", cantidad: getRandomQuantity(), precio: 14.95 },
    { id: 21, nombre: "Pluto", autor: "Naoki Urasawa", cantidad: getRandomQuantity(), precio: 24.95 },
    { id: 22, nombre: "Shaman King", autor: "Hiroyuki Takei", cantidad: getRandomQuantity(), precio: 20.75 },
    { id: 23, nombre: "Trigun", autor: "Yasuhiro Nightow", cantidad: getRandomQuantity(), precio: 10.95 },
    { id: 24, nombre: "Wanted!", autor: "Eiichiro Oda", cantidad: getRandomQuantity(), precio: 7.95 },
    { id: 25, nombre: "Dragon Ball", autor: "Akira Toriyama", cantidad: getRandomQuantity(), precio: 16.85 },
];

// Evento del formularuo para agregar un nuevo producto

document.getElementById('inventory-tab-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const productName = document.getElementById('product-name').value;
    const productAuthor = document.getElementById('product-author').value;
    const productQuantity = parseInt(document.getElementById('product-qty').value);
    const productPrice = parseFloat(document.getElementById('product-price').value);

    const newProduct = new Product(Date.now(), productName, productAuthor, productQuantity, productPrice);

    // Agregar el nuevo producto al administrador de productos
    productManager.addProduct(newProduct);

    // Limpiar el formulario
    this.reset();

    // Actualizamos la tabla de inventario

    updateInventoryTable();

});

// Función para actualizar la tabla de inventario
function updateInventoryTable() {
    const tableBody = document.getElementById('body-table');
    tableBody.innerHTML = '';

    // Obtener la lista de productos del administrador
    const products = productManager.listProducts();

    // Iterar sobre la lista de productos y agregar filas a la tabla
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.nombre}</td>
            <td>${product.cantidad}</td>
            <td>${product.precio}</td>
            <td>
                <button id="edit-button">Editar</button>
                <button id="delete-button">Eliminar</button>
            </td>
        `;
        tableBody.appendChild(row);
    });

}

// Llamar a la función inicial para mostrar la tabla del inventario
updateInventoryTable();

