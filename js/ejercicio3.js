function multiplos() {
    let base = document.getElementById("base").value;
    let limite = document.getElementById("limite").value;
    let resultado = document.getElementById("resultado");
    base = parseInt(base);
    limite = parseInt(limite);
    let multiplos = [];
    let contador = 1;

    while (contador <= limite) {
        if (contador % base === 0) {
            multiplos.push(contador);
        }
        contador++;
    }
 resultado.innerHTML += multiplos
}
