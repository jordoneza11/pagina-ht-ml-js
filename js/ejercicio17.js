function contarOcurrencias() {
    let numerosInput = document.getElementById("numeros").value;
    let numerosArray = numerosInput.split(",").map(num => parseInt(num.trim(), 10));
    let numeroBusqueda = parseInt(document.getElementById("numeroBusqueda").value, 10);
    let resultado = document.getElementById("resultado");

    if (numerosArray.length !== 10) {
        resultado.innerHTML = "Debe ingresar exactamente 10 números separados por comas.";
        return;
    }

    let contador = 0;

    for (let i = 0; i < numerosArray.length; i++) {
        if (numerosArray[i] === numeroBusqueda) {
            contador++;
        }
    }

    resultado.innerHTML = `El número ${numeroBusqueda} aparece ${contador} veces en el arreglo.`;
}
