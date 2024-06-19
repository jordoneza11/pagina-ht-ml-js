function contarPalabras() {
    let cadena = document.getElementById("cadena").value.trim();
    let resultado = document.getElementById("resultado");
    
    if (cadena === "") {
        resultado.innerHTML = "Número de palabras en la cadena: 0";
        return;
    }

    let palabras = cadena.split(/\s+/);
    let numPalabras = palabras.length;

    resultado.innerHTML = `Número de palabras en la cadena: ${numPalabras}`;
}
