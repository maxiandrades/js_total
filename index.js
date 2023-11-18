let precioBase = 400000
let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precioBase


let valorTotal = document.querySelector(".valor-total")

let cantidadTotal = document.querySelector(".cantidad")


function sumar() {
    let cantidadActual = Number(cantidadTotal.textContent)
    cantidadActual = cantidadActual + 1

    //console.log("sumar==>", cantidadActual * precioBase)
    cantidadTotal.innerHTML = cantidadActual
    valorTotal.innerHTML = cantidadActual * precioBase
}



function restar() {

    let cantidadActual = Number(cantidadTotal.textContent)
    cantidadActual = cantidadActual - 1

    //console.log("restar==>", cantidadActual * precioBase)
    cantidadTotal.innerHTML = cantidadActual
    valorTotal.innerHTML = cantidadActual * precioBase
}


