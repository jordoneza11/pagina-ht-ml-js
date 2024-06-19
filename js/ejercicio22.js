function contarVocales() {
    let cadena = document.getElementById("cadena").value;
    let resultado = document.getElementById("resultado");
    let count = 0;
    const vocales = "aeiouAEIOU";

    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            count++;
        }
    }

    resultado.innerHTML = `Número de vocales en la cadena: ${count}`;
}
