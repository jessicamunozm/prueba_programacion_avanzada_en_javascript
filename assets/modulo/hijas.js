import Animal from './clases.js'

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Rugir() {
        player.src=`./assets/sounds/${this._sonido}`
        player.play()
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Aullar() {
        player.src=`./assets/sounds/${this._sonido}`
        player.play()
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Grunir() {
        player.src=`./assets/sounds/${this._sonido}`
        player.play()
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Sisear() {
        player.src=`./assets/sounds/${this._sonido}`
        player.play()
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Chillar() {
        player.src=`./assets/sounds/${this._sonido}`
        player.play()
    }
}

export {Leon, Lobo, Oso, Serpiente, Aguila}