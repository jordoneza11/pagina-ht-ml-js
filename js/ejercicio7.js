function suma(){
    let resultado = document.getElementById("resultado");
    let tablaSumar=[]
    let contador=1

    while (contador <= 12) {
        tablaSumar.push(`10 + ${contador} = ${10 + contador}`);
        contador++;
    }
    resultado.innerHTML = tablaSumar.join("<br>");
}