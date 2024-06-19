function separarPositivosNegativos() {
    let numerosInput = document.getElementById("numeros").value;
    let numerosArray = numerosInput.split(",").map(num => parseFloat(num.trim()));
    let resultado = document.getElementById("resultado");

    if (numerosArray.length !== 10) {
        resultado.innerHTML = "Debe ingresar exactamente 10 números separados por comas.";
        return;
    }

    let positivos = [];
    let negativos = [];

    for (let i = 0; i < numerosArray.length; i++) {
        if (numerosArray[i] >= 0) {
            positivos.push(numerosArray[i]);
        } else {
            negativos.push(numerosArray[i]);
        }
    }

    resultado.innerHTML = `
        <p>Números positivos ingresados: ${positivos.join(", ")}</p>
        <p>Números negativos ingresados: ${negativos.join(", ")}</p>
    `;
}
