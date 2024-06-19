function mensaje() {
    let mensaje = document.getElementById("m").value; // Obtener el mensaje del input
    let resultado = document.getElementById("resultado");
    let n = 5; 
    let msg = "";
    let c = 0;
    while (c < n) {
        msg += mensaje + "\n";
        c=c+1
    }
    resultado.innerHTML = msg
}