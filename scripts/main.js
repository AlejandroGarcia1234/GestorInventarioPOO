import { Product } from './product.js';
import { ProductManager } from './productManager.js';

// Instanciar el administrador de productos
const productManager = new ProductManager();

// Evento del formularuo para agregar un nuevo producto

document.getElementById('product-form-events').addEventListener('submit', function (event){
    event.preventDefault();

    // Obtenemos los valores del formulario
    const productName = document.getElementById('product-name').value;
    const productQuantity = parseInt(document.getElementById('product-quantity').value);
    const productPrice = parseFloat(document.getElementById('product-price').value);

    // Crear una instancia de Product con los valores del formulario

    const newProduct = new Product(Date.now(), productName, productQuantity, productPrice);

    console.log(newProduct);

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

