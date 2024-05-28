// 1. Crear las clases representadas en el diagrama implementando la herencia indicada.

class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    }
    get nombre() {
        return this._nombre;
    }
    get edad() {
        return this._edad;
    }
    get img() {
        return this._img;
    }
    set comentarios(newComment) {
        this._comentarios = newComment;
    }
    get sonido() {
        return this._sonido}}

    export default Animal