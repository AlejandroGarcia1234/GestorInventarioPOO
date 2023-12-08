export class ProductManager {
    #products;

    constructor() {
        this.#products = [];
    }

// Función para buscar productos de nuestro inventario
  searchProduct(searchTerm) {
    let filteredProducts = this.products.filter((product) => {
      const searchValue = searchTerm.toLowerCase();

      return (
        product.nombre.toLowerCase().includes(searchValue) ||
        product.autor.toLowerCase().includes(searchValue)

      );
   
    });

    this.displayInventory(filteredProducts);
  }

// Función para agregar un producto a nuestro inventario
  addProduct(product) {
    this.products.push(product);

    if (product.nombre && product.autor && product.cantidad && product.precio) {
      const localProduct = {
        id: product.id,
        nombre: product.nombre,
        autor: product.autor,
        cantidad: product.cantidad,
        precio: product.precio,
      };
      const productJson = JSON.stringify(localProduct);
      localStorage.setItem(`Producto: ${product.id}`, productJson);
    }

    this.displayInventory();
  }

// Función para eliminar un producto de nuestro inventario
  deleteProduct(id) {
    this.products = this.products.filter((product) => product.id !== id);

    localStorage.removeItem(`Producto: ${id}`);

    this.displayInventory();
  }

// Función para editar un producto de nuestro inventario
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

// Función para actualizar un producto de nuestro inventario
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
      const localProduct = {
        id: product.id,
        nombre: product.nombre,
        autor: product.autor,
        cantidad: product.cantidad,
        precio: product.precio,
      };

      const productJson = JSON.stringify(localProduct);

      localStorage.setItem(`Producto: ${product.id}`, productJson);
    }
  }

// Función para mostrar productos de nuestro inventario
  displayInventory(products = this.products) {
    const tableBody = document.getElementById("more-rows");

    tableBody.innerHTML = "";

    products.forEach((product) => {
      const row = this.newRow(product);
      tableBody.appendChild(row);
    });
  }

// Función para la creación de una fila
  newRow(product) {
    const row = document.createElement("tr");
    const cellName = this.newCell(product.nombre);
    const cellAuthor = this.newCell(product.autor);
    const cellQuantity = this.newCell(product.cantidad);
    const cellPrice = this.newCell(product.precio);
    const cellActions = this.newActionsCell(product.id);

    row.appendChild(cellName);
    row.appendChild(cellAuthor);
    row.appendChild(cellQuantity);
    row.appendChild(cellPrice);
    row.appendChild(cellActions);

    return row;
  }
// Función para la creación de una celda
  newCell(value) {
    const cell = document.createElement("td");

    cell.textContent = value;

    return cell;
  }
// Función para la creación de la botones de la sección acciones (borrar y editar) en la misma celda
  newActionsCell(productId) {
    const cell = document.createElement("td");
    const deleteButton = this.newButton("delete-btn", "Borrar", () => this.deleteProduct(productId));
    const editButton = this.newButton("edit-btn", "Editar", () => this.editProduct(productId));

    cell.appendChild(deleteButton);
    cell.appendChild(editButton);

    return cell;
  }
// Función que nos permite la creación y manejo de botones en nuestro gestor de inventario
  newButton(className, text, clickHandler) {
    const button = document.createElement("button");

    button.className = className;
    button.textContent = text;
    button.addEventListener("click", clickHandler);

    return button;
  }

  get products() {
    return this.#products;
  }

  set products(products) {
    this.#products = products;
  }
}