function contarCaracteres() {
    let cadena = document.getElementById("cadena").value;
    let resultado = document.getElementById("resultado");
    
    if (cadena.length === 0) {
        resultado.innerHTML = "La cadena está vacía.";
        return;
    }

    let numCaracteres = cadena.length;
    resultado.innerHTML = `La cadena tiene ${numCaracteres} caracteres.`;
}
