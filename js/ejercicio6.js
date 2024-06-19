function divisores() {
    let n = document.getElementById("n").value;
    let resultado = document.getElementById("resultado");
    n = parseInt(n);
    let divisores = [];
    let contador = 1;
    while (contador < n) {
        if (n%contador===0){
        divisores.push(contador);
    }
    contador++;
    }
    resultado.innerHTML += divisores
}