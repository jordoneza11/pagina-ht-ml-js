function mostrarPares() {
    let cadena = document.getElementById("cadena").value;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    for (let i = 0; i < cadena.length; i++) {
        if (i % 2 === 0) {
            resultado.innerHTML += cadena[i] + "<br>";
        }
    }
}
