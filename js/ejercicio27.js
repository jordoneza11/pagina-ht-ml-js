function invertirCadena() {
    let cadena = document.getElementById("cadena").value;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    let cadenaInvertida = cadena.split("").reverse().join("");
    resultado.innerHTML = `Cadena invertida: ${cadenaInvertida}`;
}
