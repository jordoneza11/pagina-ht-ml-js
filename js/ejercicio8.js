function multiplicar(){  
    let numero = document.getElementById("n").value;
    let inicio = document.getElementById("i").value;
    let final = document.getElementById("f").value;
    let resultado = document.getElementById("resultado");
    numero = parseInt(numero);
    inicio = parseInt(inicio);
    final = parseInt(final);
    let multiplicacion=[]
    let contador=inicio
    
    while (contador <= final) {
        multiplicacion.push(`${numero}x${contador}=${numero*contador}`);
        contador++;
    }
    resultado.innerHTML = multiplicacion.join("<br>");
}