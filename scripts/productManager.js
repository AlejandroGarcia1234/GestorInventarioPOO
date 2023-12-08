export class ProductManager {
    #products;

    constructor() {
        this.#products = [];
    }

    // Agrega un producto al inventario
  addProduct(product) {
    this.products.push(product);
    if (product.nombre && product.autor && product.cantidad && product.precio) {
      const plainProduct = {
        id: product.id,
        nombre: product.name,
        autor: product.autor,
        cantidad: product.quantity,
        precio: product.price,
      };
      const productJson = JSON.stringify(plainProduct);
      localStorage.setItem(`Producto: ${product.id}`, productJson);
    }

    this.displayInventory();
  }

// Edita un producto en el inventario
  editProduct(id) {
    let product = this.products.find((product) => product.id === id);
    if (product) {
      const newName = prompt("Introduce el nuevo nombre:", product.nombre);
      const newAuthor = prompt("Introduce el nuevo autor:", product.autor);
      const newQuantity = prompt("Introduce la nueva cantidad:", product.cantidad);
      const newPrice = prompt("Introduce el nuevo precio:", product.precio);
  
      if (newName !== null && newAuthor !== null && newQuantity !== null && newPrice !== null) {
        this.updateProduct(id, newName, newAuthor, newQuantity, newPrice);
        this.displayInventory();
      }
    }
  }
// Elimina un producto del inventario
  deleteProduct(id) {
    this.products = this.products.filter((product) => product.id !== id);
    localStorage.removeItem(`Producto: ${id}`);
    this.displayInventory();
  }
// Actualiza la información de un producto en el inventario
  updateProduct(id, nombre, autor, cantidad, precio) {
    let product = this.products.find((product) => product.id == id);
    localStorage.removeItem(`Producto: ${id}`);

    if (product) {
      product.nombre = nombre;
      product.autor = autor;
      product.cantidad = cantidad;
      product.precio = precio;
      this.displayInventory();
    }

    if (product.nombre && product.autor && product.cantidad && product.precio) {
      const plainProduct = {
        id: product.id,
        nombre: product.nombre,
        autor: product.autor,
        cantidad: product.cantidad,
        precio: product.precio,
      };
      const productJson = JSON.stringify(plainProduct);
      localStorage.setItem(`Producto: ${product.id}`, productJson);
    }
  }
// Busca productos en el inventario por nombre
  searchProduct(nombre) {
    let filteredProducts = this.products.filter((product) =>
      product.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
    this.displayInventory(filteredProducts);
  }
// Muestra los productos del inventario en la interfaz
  displayInventory(products = this.products) {
    const tableBody = document.getElementById("more-rows");
    tableBody.innerHTML = "";

    products.forEach((product) => {
      const row = this.createRow(product);
      tableBody.appendChild(row);
    });
  }

// Crea una fila para un producto en la interfaz
  createRow(product) {
    const row = document.createElement("tr");
    const cellName = this.createCell(product.nombre);
    const cellAuthor = this.createCell(product.autor);
    const cellQuantity = this.createCell(product.cantidad);
    const cellPrice = this.createCell(product.precio);
    const cellActions = this.createActionsCell(product.id);

    row.appendChild(cellName);
    row.appendChild(cellAuthor);
    row.appendChild(cellQuantity);
    row.appendChild(cellPrice);
    row.appendChild(cellActions);

    return row;
  }
// Crea una celda con un valor para la interfaz
  createCell(value) {
    const cell = document.createElement("td");
    cell.textContent = value;
    return cell;
  }
// Crea la celda de acciones (botones) para la interfaz
  createActionsCell(productId) {
    const cell = document.createElement("td");
    const deleteButton = this.createButton("delete-btn", "Borrar", () => this.deleteProduct(productId));
    const editButton = this.createButton("edit-btn", "Editar", () => this.editProduct(productId));

    cell.appendChild(deleteButton);
    cell.appendChild(editButton);

    return cell;
  }
// Crea un botón con un manejador de eventos para la interfaz
  createButton(className, text, clickHandler) {
    const button = document.createElement("button");
    button.className = className;
    button.textContent = text;
    button.addEventListener("click", clickHandler);
    return button;
  }
// Obtiene la lista de productos
  get products() {
    return this.#products;
  }
// Establece la lista de productos
  set products(products) {
    this.#products = products;
  }
}