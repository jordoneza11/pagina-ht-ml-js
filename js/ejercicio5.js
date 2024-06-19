function numerosPares() {
    let n = document.getElementById("n").value;
    let resultado = document.getElementById("resultado");
    n = parseInt(n);
    let numeros = [];
    let contador = 1;
    let numero = 2;
    while (contador <= n) {
        numeros.push(numero);
        numero+=2;
        contador++;
    }
    resultado.innerHTML += numeros
}
