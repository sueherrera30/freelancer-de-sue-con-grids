
// navegador
var navegador =document.getElementById('barra');
document.addEventListener("scroll",bajar);

function bajar(){
  var distancia = window.scrollY;
  if(distancia>100) {
  navegador.style.padding= 15 + "px";
  }
 else {
  navegador.style.padding= 30 + "px";
 }
}

// FORMULARIO
var telefono = document.getElementById('telefono');
telefono.addEventListener("click",aparecer);

function aparecer(){
  if(typeof telefono !== "number"){
    alert("esta entrada no es válida");
  }
}
