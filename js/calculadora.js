var cantidad = "";
var sumatoria = 0;
var sumar = false;
var restar = false;
var multiplicar = false;
var dividir = false;
var eliminar = false;
var cuadrado = false;
var cubo = false;
var cuatro = false;
var raiz = false;
var contador = 0;

function mostrar_numeros(numero) {
    document.getElementById("display").value = cantidad + numero;
    cantidad = document.getElementById("display").value;
}

function suma() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    sumar = true;
}

function resta() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    restar = true;
}

function multiplicacion() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    multiplicar = true;
}

function division() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    dividir = true;
}

function raizcuadrada(){
    raiz = Math.sqrt(cantidad);
    document.getElementById("display").value=raiz;
    cantidad="";
}

function alcuadrado() {
    cuadrado = (cuadrado + parseInt(cantidad)) * cantidad;
    document.getElementById("display").value = cuadrado;
    cantidad = "";
}

function alcubo() {
    cubo = (cubo + parseInt(cantidad)) * cantidad * cantidad;
    document.getElementById("display").value = cubo;
    cantidad = "";
}

function alcuatro() {
    cuatro = (cuatro + parseInt(cantidad)) * cantidad * cantidad * cantidad;
    document.getElementById("display").value = cuatro;
    cantidad = "";
}

function borrar() {
    location.reload("display").value = "";
    cantidad = "";
    eliminar = true;
}

function igual() {
    if (sumar) {
        document.getElementById("display").value = sumatoria + parseInt(cantidad);
    }
    if (restar) {
        document.getElementById("display").value = sumatoria - parseInt(cantidad);
    }
    if (multiplicar) {
        document.getElementById("display").value = sumatoria * parseInt(cantidad);
    }
    if (dividir) {
        document.getElementById("display").value = sumatoria / parseInt(cantidad);
    }
    if (cuadrado) {
        document.getElementById("display").value = cuadrado;
    }
    if (cubo) {
        document.getElementById("display").value = cubo;
    }
    if (cuadrado) {
        document.getElementById("display").value = cuadrado;
    }

}