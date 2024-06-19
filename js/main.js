class Tarea{
    mensaje(){
        // console.log("mensaje desde tarea")
        debugger;
        let n,r,c=1,msg="",m
        n = document.getElementById("n").value
        m = document.getElementById("msg").value
        n = parseInt(n)
        r = document.getElementById("resp")

        while (c <= n){
            msg = msg + m+"<br>"
            c=c+1
        }
        r.innerHTML = msg

    }
    arregloPar() {
        // console.log("mensaje desde tarea")
        debugger;
        let arreglo, num, c = 0, msg = "", cad="",r
        cad = document.getElementById("numeros").value // "12;10;20"
        arreglo = cad.split(";")// ["12","10","20"]
        //                           0     1   2 length=3
        while (c < arreglo.length){
            num = parseInt(arreglo[c])
            if (num % 2 == 0){
                msg = msg + num + "<br>"
            }
            c = c + 1
        }
        r = document.getElementById("resp")
        r.innerHTML = msg
    }
}

let tarea = new Tarea() //crea una variable igual que la clase
// tarea.mensaje()
