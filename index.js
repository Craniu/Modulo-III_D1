const precio = 400000

const precioSpan = document.querySelector(".precio-inicial")
precioSpan.innerHTML = precio

const cantidad = document.querySelector("#cantidad")
const botonMas = document.querySelector('#mas')
const botonMenos = document.querySelector('#menos')
const totalSpan = document.querySelector(".valor-total")
let items = 0
let valorTotal = 0

console.log(cantidad)

botonMas.addEventListener("click", () => {
    items++
    cantidad.innerHTML = items
    valorTotal = precio * items
    totalSpan.innerHTML = valorTotal
    console.log(cantidad)
    console.log(valorTotal)
})

botonMenos.addEventListener("click", () => {
    if (items > 0) {
        items--
        cantidad.innerHTML = items
        valorTotal = precio * items
        totalSpan.innerHTML = valorTotal
        console.log(cantidad)
        console.log(valorTotal)
    }
})



