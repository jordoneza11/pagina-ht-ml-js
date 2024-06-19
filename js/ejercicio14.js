function calcularPromedio() {
    let numerosInput = document.getElementById("numeros").value;
    let numerosArray = numerosInput.split(",").map(num => parseFloat(num.trim()));
    let resultado = document.getElementById("resultado");

    if (numerosArray.length !== 6) {
        resultado.innerHTML = "Debe ingresar exactamente 6 números separados por comas.";
        return;
    }

    let suma = numerosArray.reduce((acc, curr) => acc + curr, 0);
    let promedio = suma / numerosArray.length;

    resultado.innerHTML = `El promedio de los números ingresados es: ${promedio.toFixed(2)}`;
}
