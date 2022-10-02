
//crear el constructor que nos sirve como referencia para nuestro objeto prod
swal({
    title: "Bienvenido!",
})

class Producto {
    constructor(nombre, precio, detalle){
        this.nombre = nombre;
        this.precio = precio;
        this.detalle = detalle;
    }
}

const prod1 = new Producto("Campera Adidas", 50000, "Running")
const prod2 = new Producto("Zapatillas Nike", 70000, "AirForce")
const prod3 = new Producto("Remera Puma", 45000, "Training")
const prod4 = new Producto("Chomba Lacoste", 10000, "LifeStyle")
const prod5 = new Producto("Pantalon Under Armour", 30000, "Training")

 const listaProd = [];

 listaProd.push(prod1,prod2,prod3,prod4,prod5)

 console.log(listaProd)

//defino el DOM

 const btn = document.getElementById("btnMostrar")


// btn.addEventListener("click", () => {
//     swal({
//         title: "Presione OK para poder ver los productos",
//         icon: "warning",
//         buttons: true,
//         dangerMode: true,
//       })
//       .then((aceptar)=> {
//         if(aceptar){
//             swal("Genial, has ingresado tus productos",{
//                 icon:"success",
//             })
//         } else{
//             swal("Que lastima, no has ingresado ningun producto",{
//                 icon: "error"
//              })
//          }
//       })
// })

let form = document.getElementById('form')
let inputProd = document.getElementById('iprod')

let mostrarProdSolos = document.getElementById('mostrarProdSolos')
let mostrarTodosProd = document.getElementById('mostrarTodosProd')
let btnMostrarProd = document.getElementById('btnMostrar')
let bandera = false

//capturo los hijos de form
let iprod = form.children[1].value;
let iprecio = form.children[3].value;
let idetalle = form.children[5].value;



// //definir los eventos

form.addEventListener('submit', agregarProd)
btnMostrarProd.addEventListener('click', mostrarTodosLosProd)



// //funciones

// //funcion para comprobar el ingreso de datos en los input

// //pongo en focus el input

 inputProd.focus()

function validarDatos() {
    iprod = form.children[1].value;
    iprecio = form.children[3].value;
    idetalle = form.children[5].value;
    console.log(iprod)
    console.log(iprecio)
    console.log(idetalle)

    if(iprod == '' || iprecio == '' || idetalle == ''){
        alert("Error debe completar todos los campos para continuar")
        inputProd.focus()
        bandera = false;
    } else {
        bandera = true;
    }
}



// //funcion agregar prod al array

function agregarProd(e){
   //cancelamos el comportamiento del evento
   e.preventDefault()
   validarDatos();
   if(bandera == true){
       let opcion = confirm("Esta seguro de agregar el prod")
       if(opcion == true){
           //captura el dato del input en formato objeto del DOM
           let datos = e.target
           //enviamos los datos al array
           listaProd.push(new Producto(iprod, iprecio, idetalle))
           datos.children[1].value = "";
           datos.children[3].value = "";
           datos.children[5].value = "";
           //traer el innerHTML 
           mostrarProdSolos.innerHTML = ""
           //agregar la funcion que lso muestra en el dom 
           mostrarUnProd()
           inputProd.focus()
       } else {
           alert("No se agregara el usuario")
       }

       } else {
           inputProd.focus
       }

}

   //funcion para mostrar el DOM del ultimo prod ingresado

 const mostrarUnProd = () =>{
     mostrarProdSolos.innerHTML = `
     <h3>Ultimo producto ingresado:</h3>
     <p><strong>Producto: </strong>${iprod}</p>
     <p><strong>Precio: </strong>${iprecio}</p>
     <p><strong>Detalle: </strong>${idetalle}</p>`
}

//funcion para mostrar todos los producto ingresados

function mostrarTodosLosProd (e){
    e.preventDefault();
    mostrarTodosProd.innerHTML = '<h3>Listado de todos los productos</h3>';
    for(const datos of listaProd){
        mostrarTodosProd.innerHTML += `
        <p><strong>Producto: </strong>${datos.nombre}</p>
        <p><strong>Precio: </strong>${datos.precio}</p>
        <p><strong>Detalle: </strong>${datos.detalle}</p> `
    }
}


let url = `https://jsonplaceholder.typicode.com/users`

fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (let i = 0; i < data.length; i++){
        body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`
    }

    document.getElementById(`data`).innerHTML = body
}

