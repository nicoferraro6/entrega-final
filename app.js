// Ejercicio de Entrega


let formulario = document.getElementById("form")

formulario.addEventListener("submit", datosForm)

function datosForm(e){
//cancelamos por las dudas
    e.preventDefault();
// capturar los datos de los input
    let datos = e.target
// obtenemos los datos ingresados e enviados en el evento
    console.log(datos.nombre.value)
    console.log(datos.edad.value)
    console.log(datos.password.value)
}