let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", () => {

  let num : number = Number (dato1.value);
  if (num === 0) {
      console.log("El " + num + " no es par ni impar");
  } else if ( num % 2 === 0) {
      console.log("El " + num + " es par");
  } else {
      console.log("El " + num + " es impar");
  }
});