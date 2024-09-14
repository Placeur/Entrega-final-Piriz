//Productos del carrito

const productos = [
    {nombre: "Primavera", precio: 600},
    {nombre: "La Tregua", precio: 660},
    {nombre: "Vivir Adrede", precio: 770},
]

//Carrito

let carrito = []

let seleccion  = prompt("Bienvenido a Libros Hoy, ¿desea un nuevo libro?")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese si o no")
    seleccion = prompt("Bienvenido a Libros Hoy, ¿desea un nuevo libro, si o no?")
}

if(seleccion == "si"){
    alert("Verá a continuacion nuestro catálogo")
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$")
    alert(todoslosProductos.join(" - "))
} else if (seleccion == "no"){
        alert("Muchas gracias por tu visita")
    }

    while(seleccion != "no"){
        let producto = prompt("Agrega un producto a tu carrito")
        let precio = 0

        if(producto == "Primavera" || producto == "La Tregua" || producto == "Vivir Adrede")
            switch(producto) {
        case "Primavera":
        precio = 600
        break;
        case "La Tregua":
        precio = 660
        break;
        case "Vivir Adrede":
        precio = 770
        break;
        default:
        break;
         }
         let unidades = parseInt(prompt("Cuantos libros desea?"))
         carrito.push({producto, unidades, precio})
         console.log(carrito)

         seleccion = prompt("Desea seguir comprando?")

         while(seleccion == "no"){
            alert("Gracias por su compra")
            carrito.forEach((carritofinal) =>{
                console.log (`producto: ${carritofinal.producto}, 
                unidades ${carritofinal.unidades}, total a pagar ${carritofinal.unidades * carritofinal.precio} `)
            })
            break;
         }
        }

