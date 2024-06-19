function sumarNumeros() {
    let numerosInput = document.getElementById("numeros").value;
    let numerosArray = numerosInput.split(",").map(num => parseInt(num.trim(), 10));
    let resultado = document.getElementById("resultado");

    if (numerosArray.length !== 8) {
        resultado.innerHTML = "Debe ingresar exactamente 8 números separados por comas.";
        return;
    }

    let suma = numerosArray.reduce((acc, curr) => acc + curr, 0);

    resultado.innerHTML = `La suma de los números ingresados es: ${suma}`;
}
