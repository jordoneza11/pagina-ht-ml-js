function eliminarEspacios() {
    let cadena = document.getElementById("cadena").value;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    let cadenaSinEspacios = cadena.replace(/\s/g, "");
    resultado.innerHTML = `Cadena sin espacios: ${cadenaSinEspacios}`;
}
