function agregarNumeros() {
    let numerosInput = document.getElementById("numeros").value;
    let numerosArray = numerosInput.split(",").map(num => parseInt(num.trim(), 10));
    let resultado = document.getElementById("resultado");

    if (numerosArray.length !== 5) {
        resultado.innerHTML = "Debe ingresar exactamente 5 números separados por comas.";
        return;
    }

    resultado.innerHTML = "Números ingresados: " + numerosArray.join(", ");
}
