export function storeProducts(defaultProducts) {

    defaultProducts.forEach(product => {
      if (product.nombre && product.autor && product.cantidad && product.precio) {
        const plainProduct = { id: product.id, nombre: product.nombre, autor: product.autor, cantidad: product.cantidad, precio: product.precio };
        const productJson = JSON.stringify(plainProduct);
        localStorage.setItem(`Producto: ${product.id}`, productJson);
      }

    });
    
  }