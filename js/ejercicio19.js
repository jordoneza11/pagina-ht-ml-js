function filtrarMayores() {
    let numerosInput = document.getElementById("numeros").value;
    let numerosArray = numerosInput.split(",").map(num => parseFloat(num.trim()));
    let valor = parseFloat(document.getElementById("valor").value);
    let resultado = document.getElementById("resultado");

    if (numerosArray.length !== 8) {
        resultado.innerHTML = "Debe ingresar exactamente 8 números separados por comas.";
        return;
    }

    let mayoresQueValor = numerosArray.filter(numero => numero > valor);

    resultado.innerHTML = `Números mayores que ${valor}: ${mayoresQueValor.join(", ")}`;
}
