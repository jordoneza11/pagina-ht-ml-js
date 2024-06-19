function filtrarNumerosPares() {
    let numerosInput = document.getElementById("numeros").value;
    let numerosArray = numerosInput.split(",").map(num => parseInt(num.trim(), 10));
    let resultado = document.getElementById("resultado");

    if (numerosArray.length !== 10) {
        resultado.innerHTML = "Debe ingresar exactamente 10 números separados por comas.";
        return;
    }

    let numerosPares = numerosArray.filter(num => num % 2 === 0);

    if (numerosPares.length === 0) {
        resultado.innerHTML = "No se encontraron números pares.";
    } else {
        resultado.innerHTML = `Números pares ingresados: ${numerosPares.join(", ")}`;
    }
}
