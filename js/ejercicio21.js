function mostrarCaracteres() {
    let cadena = document.getElementById("cadena").value;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    for (let i = 0; i < cadena.length; i++) {
        resultado.innerHTML += cadena[i] + "<br>";
    }
}
