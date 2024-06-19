function numerosPositivos() {
    let n = document.getElementById("n").value;
    let resultado = document.getElementById("resultado");
    n = parseInt(n);
    let numerosPositivos = [];
    let contador = 1;

    while (numerosPositivos.length < n) {
        numerosPositivos.push(contador);
        contador++;
    }
    resultado.innerHTML += numerosPositivos
}
