function ordenInverso() {
    let numerosInput = document.getElementById("numeros").value;
    let numerosArray = numerosInput.split(",").map(num => parseFloat(num.trim()));
    let resultado = document.getElementById("resultado");

    if (numerosArray.length !== 5) {
        resultado.innerHTML = "Debe ingresar exactamente 5 números separados por comas.";
        return;
    }

    let numerosInverso = numerosArray.reverse();

    resultado.innerHTML = `Números en orden inverso: ${numerosInverso.join(", ")}`;
}
