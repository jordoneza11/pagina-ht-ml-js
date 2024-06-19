function numerosComprendidosPares(){
    let n=document.getElementById("n").value;
    let n2=document.getElementById("n2").value;
    let resultado=document.getElementById("resultado");
    n = parseInt(n);
    n2 = parseInt(n2);
    let comprendidos = [];
    let contador=n+1;
    if (n>n2) {
        [n, n2] = [n2, n];
    }
    while (contador<n2) {
        if (contador%2===0){
        comprendidos.push(contador);
        }
        contador++;
        
    }
    if (comprendidos.length > 0) {
        resultado.innerHTML=comprendidos
    }
    else {
        resultado.innerHTML = "No hay numeros comprendidos" 
    }
}