export class Product {
    #id;
    #nombre;
    #autor;
    #cantidad;
    #precio;

    constructor(id, nombre, autor, cantidad, precio) {
        this.#id = id;
        this.#nombre = nombre;
        this.#autor = autor;
        this.#cantidad = cantidad;
        this.#precio = precio;
    }

    // Metodo estático que devuelve una cantidad aleatoria entre 1 y 20
  static getRandomQuantity() {
    return Math.floor(Math.random() * 20) + 1;
  }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(value) {
        this.#nombre = value
    }

    get autor() {
        return this.#autor;
    }

    set autor(value) {
        this.#autor = value
    }

    get cantidad() {
        return this.#cantidad;
    }

    set cantidad(value) {
        this.#cantidad = value
    }

    get precio() {
        return this.#precio;
    }

    set precio(value) {
        this.#precio = value
    }

}