function presentarPrimerCaracter() {
    let cadena = document.getElementById("cadena").value;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    if (cadena.length > 0) {
        let primerCaracter = cadena[0];
        let longitud = cadena.length;

        for (let i = 0; i < longitud; i++) {
            resultado.innerHTML += primerCaracter + "<br>";
        }
    } else {
        resultado.innerHTML = "La cadena está vacía.";
    }
}
