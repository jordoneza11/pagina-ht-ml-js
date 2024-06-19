function frecuenciaUltimoCaracter() {
    let cadena = document.getElementById("cadena").value;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    if (cadena.length === 0) {
        resultado.innerHTML = "La cadena está vacía.";
        return;
    }

    let ultimoCaracter = cadena[cadena.length - 1];
    let frecuencia = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === ultimoCaracter) {
            frecuencia++;
        }
    }

    resultado.innerHTML = `El carácter '${ultimoCaracter}' aparece ${frecuencia} veces en la cadena.`;
}
