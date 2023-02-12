const textAreaIzquierdo = document.querySelector(".textarea")
const textAreaDerecho = document.querySelector(".mensaje");
const botonCopiar = document.querySelector(".boton-copiar");

// copia en tiempo real del textArea izquierdo al derecho
function mostrar(valor) {
    textAreaDerecho.innerHTML = valor;
    // desaparece la imagen y muestra el boton copiar
    textAreaDerecho.style.backgroundImage = "none"
    botonCopiar.style.display = "inline-block"
}

// boton copiar
function copiar() {
    textAreaDerecho.select();
    navigator.clipboard.writeText(textAreaDerecho.value);
}

// boton encriptar usando replace y expresiones regulares
function encriptar(){
let text = textAreaDerecho.value;

text = text.replace(/e/igm,"enter");
text = text.replace(/i/igm,"imes");
text = text.replace(/a/igm,"ai");
text = text.replace(/o/igm,"ober");
text = text.replace(/u/igm,"ufat");

textAreaDerecho.innerHTML = text;
}

// boton desencriptar usando replace y expresiones regulares
function desencriptar(){
let text = textAreaDerecho.value;
  
text = text.replace(/enter/igm,"e");
text = text.replace(/imes/igm,"i");
text = text.replace(/ai/igm,"a");
text = text.replace(/ober/igm,"o");
text = text.replace(/ufat/igm,"u");
  
textAreaDerecho.innerHTML = text;
}