import {Leon, Lobo, Oso, Serpiente, Aguila} from "../modulo/hijas.js";
import Animal from "../modulo/clases.js";

let animal = document.getElementById("animal")
let edadSelect = document.getElementById("edad")
let comentarioSelect = document.getElementById("comentarios")
let btn = document.getElementById("btnRegistrar")
let preview = document.getElementById("preview")
let animalesCard = document.getElementById("Animales")

let animales = []

const getAnimal = (async() => {
    let respuesta = await fetch ('/animales.json')
    let {animales} = await respuesta.json()
    return animales
})()

animal.addEventListener('change', async() => {
    let animalSelect = animal.value
    let animales = await getAnimal
    let animalResult = animales.find(animal => animal.name === animalSelect)
    preview.style.backgroundImage = `url(./assets/imgs/${animalResult.imagen})`;
})

btn.addEventListener("click", async () => {
    let nombre = animal.value
    let edad = edadSelect.value
    let animalSelect = animal.value
    let animalesData = await getAnimal
    let animalResult = animalesData.find(animal => animal.name === animalSelect)
    let comentarios = comentarioSelect.value
    let img = `assets/imgs/${animalResult.imagen}`
    let sonido =  `assets/sounds/${animalResult.sonido}`
    
    if (nombre && edad && comentarios) {
        let nuevoAnimal
        if (animal.value === "Leon") {
            nuevoAnimal = new Leon(nombre, edad, img, comentarios, sonido)
        } else if (animal.value === "Lobo") {
            nuevoAnimal = new Lobo(nombre, edad, img, comentarios, sonido)
        } else if (animal.value === "Oso") {
            nuevoAnimal = new Oso(nombre, edad, img, comentarios, sonido)
        } else if (animal.value === "Serpiente") {
            nuevoAnimal = new Serpiente(nombre, edad, img, comentarios, sonido)
        } else if (animal.value === "Aguila") {
            nuevoAnimal = new Aguila(nombre, edad, img, comentarios, sonido)
        }   
        if (nuevoAnimal) {  
            animales.push(nuevoAnimal)
            card()
        }
    } else {
        alert("Todos los campos son obligatorios")
    }
})

function card() {
    animalesCard.innerHTML = ""
    animales.forEach((a, i) => {
        animalesCard.innerHTML += `
<div class= "px-3 pb-2">
<div class ="bg-dark text-white">
<img
height = "200"
width ="200"
src="${a.img}"
data-toggle="modal" 
data-target="#exampleModal"
onclick="modalDetails(${i})" />
<div>
<button onclick="playSound(${i})" class="btn btn-secondary w-100"> 
<img height="30" src="assets/imgs/audio.svg" /> </button>
</div>
</div>
</div>
        `   
    })  
}

window.playSound = function(index) {
    let audio = new Audio(animales[index]._sonido)
    audio.play()
}

window.modalDetails = (i) => {
    const modalBody = document.querySelector(".modal-body")
    const animal = animales[i]
    modalBody.innerHTML = `
      <div class="px-3 pb-2">
        <div class="card w-50 m-auto bg-dark text-white border-0"> 
          <img src="${animal._img}" class="d-block m-auto w-100"/>
          <div class="card-body text-center">
            <h6 class="card-text">${animal._edad}</h6>
            <h5 class="card-text m-0">Comentarios</h5>
            <hr>
            <p>${animal._comentarios}</p>
          </div>
        </div>
      </div>
    `
}