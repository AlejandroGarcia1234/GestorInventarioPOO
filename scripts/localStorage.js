export function storeProducts(productList) {

  productList.forEach(product => {

      if (product.nombre && product.autor && product.cantidad && product.precio) {
        const localProduct = { id: product.id, nombre: product.nombre, autor: product.autor, cantidad: product.cantidad, precio: product.precio };
        const productJson = JSON.stringify(localProduct);
        localStorage.setItem(`Producto: ${product.id}`, productJson);
      }

    });
    
  }