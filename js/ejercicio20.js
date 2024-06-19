function encontrarDuplicados() {
    let numerosInput = document.getElementById("numeros").value;
    let numerosArray = numerosInput.split(",").map(num => parseFloat(num.trim()));
    let resultado = document.getElementById("resultado");

    if (numerosArray.length !== 10) {
        resultado.innerHTML = "Debe ingresar exactamente 10 números separados por comas.";
        return;
    }

    let duplicados = [];

    // Utilizamos un objeto para contar las ocurrencias de cada número
    let contador = {};
    for (let i = 0; i < numerosArray.length; i++) {
        let numero = numerosArray[i];
        if (contador[numero]) {
            contador[numero]++;
        } else {
            contador[numero] = 1;
        }
    }

    // Buscamos los números que tienen más de una ocurrencia (duplicados)
    for (let num in contador) {
        if (contador[num] > 1 && parseFloat(num) === 0) {
            duplicados.push(num);
        }
    }

    if (duplicados.length > 0) {
        resultado.innerHTML = `Los ceros duplicados son: ${duplicados.join(", ")}`;
    } else {
        resultado.innerHTML = "No se encontraron ceros duplicados en la lista.";
    }
}
