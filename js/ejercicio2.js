function mostrarMultiplos() {
    let n = document.getElementById("n").value;
    let resultado = document.getElementById("resultado");

    n = parseInt(n);
    let msg=""
    let multiplos = [];
    let c = 1;

    while (multiplos.length < n) {
        if (c % 7 === 0) {
            multiplos.push(c);
        }
        c=c+1
        msg+=multiplos
    }
    resultado.innerHTML = multiplos
}
