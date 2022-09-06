// alert("Hola Mundo File")
function saludo(){
    alert ("Envíenos sus datos y obtenga su descuento con nuestros representantes en línea")
}
var nombre; //Global
function registrarse(){
    var nombre; //Local a la funcion
    /*
    * Variable nombre
    */
    nombre = document.form_registro.nombre.value;
    //Variable apellido
    var apellido = document.form_registro.apellido.value
    var email = document.getElementById("email_id").value
    var password = document.getElementById("password_id").value
    console.log(nombre,apellido,email,password)
    if(nombre==""){
        document.getElementById("nombre_error").innerHTML = "El campo nombre es obligatorio"
    }else{
        document.getElementById("nombre_error").innerHTML = ""
    }
    document.getElementById("mensaje").innerHTML = "Gracias por registrarse"
}
function tipoSeguro(){
    var tipoSeguro = document.getElementById("tipo_seguro_id").value
    var precio;
    // "1" === 1
    switch(tipoSeguro){
        case "1": precio = "El Seguro que Ud. eligió tiene un costo de $ 500.-"; break;
        case "2": precio = "El Seguro que Ud. eligió tiene un costo de $ 1000.-"; break;
        case "3": precio = "El Seguro que Ud. eligió tiene un costo de $ 1500.-"; break;
    }
    alert(precio)
}