
//----------------------------Fut-------------------------
var botonFut=document.getElementById("botonFut");
botonFut.addEventListener("click", mostrarCanchaFut);
botonFut.addEventListener("dblclick", ocultarCanchaFut);


function mostrarCanchaFut() {
  ocultarCanchaBasket();
  var canchaFut=document.getElementById("areaFut").style.display= "block";
  return canchaFut;
}

function ocultarCanchaFut() {
  ocultarCanchaBasket();
  var canchaFut=document.getElementById("areaFut").style.display= "none";
  return canchaFut;
}

//------------------------------------Basket----------------------------
var botonBasket=document.getElementById("botonBasket");
botonBasket.addEventListener("click", mostrarCanchaBasket);
botonBasket.addEventListener("dblclick", ocultarCanchaBasket);


function mostrarCanchaBasket() {
  var canchaBasket=document.getElementById("areaBasket").style.display= "block";
  return canchaBasket;
  ocultarCanchaFut();
}

function ocultarCanchaBasket() {
  var canchaBasket=document.getElementById("areaBasket").style.display= "none";
  return canchaBasket;
  ocultarCanchaFut();
}
//--------------------------------Tennis-------------------------------------
var botonTennis=document.getElementById("botonTennis");
botonTennis.addEventListener("click", mostrarCanchaTennis);
botonTennis.addEventListener("dblclick", ocultarCanchaTennis);


function mostrarCanchaTennis() {
  var canchaTennis=document.getElementById("areaTennis").style.display= "block";
  return canchaTennis;
  ocultarCanchaFut();
}

function ocultarCanchaTennis() {
  var canchaTennis=document.getElementById("areaTennis").style.display= "none";
  return canchaTennis;
  ocultarCanchaFut();
}

/*llamar los botones por clases, llamar las canchas por clases y al hacer
eso se meten en un arreglo, y luego hacer una funcion que compare ambos arreglos
en sus respectivos indices y con ifs que si el el indice tal e muestre la cancha
 correspeondiente*/
