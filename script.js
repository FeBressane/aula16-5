function CalQuadrado(){
    let numero= document.getElementById("numero").value;
    numero = numero.split(",");
    for(i=0; i<numero.length; i++){
        quadrado = parseInt(numero[i])*parseInt(numero[i]);
        document.write("O quadrado de " +numero[i]+ " é "+quadrado+"<br>")
    }
}