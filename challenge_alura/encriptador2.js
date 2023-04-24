function encriptar(){
    var texto = document.getElementById("tex_entrada").value.toLowerCase()
    //e es conertida en "enter"
    var textoCifrado= texto.replace(/e/igm,"enter")
    //la letra i es convertida en "imes"
    var textoCifrado= textoCifrado.replace(/i/igm,"imes")
    //la letra a es convertida en ai
    var textoCifrado=textoCifrado.replace(/a/igm,"ai")
    //la letra o es convertida en "ober"
    var textoCifrado=textoCifrado.replace(/o/igm,"ober")
    //la letra u es convertida en "ufat"
    var textoCifrado=textoCifrado.replace(/u/igm,"ufat")

    document.getElementById("Muñeco").style.display="none"
    document.getElementById("texto_1").style.display="none"
    document.getElementById("tex_derecho").innerHTML= textoCifrado;
    document.getElementById("tex_derecho").style.display="show"
    document.getElementById("bto_copia").style.display="inherit"
}
function desencriptar(){
    var texto=document.getElementById("tex_entrada").value.toLowerCase()

    var textoCifrado=texto.replace(/enter/igm,"e")
    var textoCifrado=textoCifrado.replace(/imes/igm,"i")
    var textoCifrado=textoCifrado.replace(/ai/igm,"a")
    var textoCifrado=textoCifrado.replace(/ober/igm,"o")
    var textoCifrado=textoCifrado.replace(/ufat/igm,"u")

    document.getElementById("Muñeco").style.display = "none";
    document.getElementById("texto_1").style.display = "none";
    document.getElementById("tex_derecho").innerHTML= textoCifrado;
    document.getElementById("bto_copia").style.display = "show";
    document.getElementById("bto_copia").style.display = "inherit";
}

function copiar() {
    let contenido = document.getElementById("tex_derecho").value
    navigator.clipboard.writeText(contenido) 
    alert("Mensaje Encontrado")
    document.getElementById("tex_derecho").textContent =" "
}