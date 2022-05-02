
// se llama a esconder elementos tales como caja de transferencia y boton copiar

esconderElemento("caja_2");
esconderElemento("boton_3");

// se llama a esconder elementos tales como caja de transferencia y boton copiar

// funciones 

function encriptar(caja1) {
  var frase = caja1.value;
  var transformacion = "";
  var validacion = false;
  validacion = validarTexto(frase);

  if (validacion == false) {
    for (var i = 0; i < frase.length; i++) {
      var caracter = frase.charAt(i);
      switch (caracter) {
        case "a":
          transformacion = transformacion + "ai";
          break;
        case "e":
          transformacion = transformacion + "enter";
          break;
        case "i":
          transformacion = transformacion + "imes";
          break;
        case "o":
          transformacion = transformacion + "ober";
          break;
        case "u":
          transformacion = transformacion + "ufat";
          break;
        default:
          transformacion = transformacion + caracter;
      }
    }
  }

  if (transformacion != "") {
    borrarTexto("caja1");
    traspasoTexto(transformacion);
    esconderElemento("imagentexto");
    mostrarElemento("caja_2");
    mostrarElemento("boton_3");
  }
}

function desencriptar(caja1) {
  var frase = caja1.value;
  var transformacion = "";
  var validacion = false;
  validacion = validarTexto(frase);
  if (validacion == false) {
    for (var i = 0; i < frase.length; i++) {
      if (frase[i] == "a" && frase[i + 1] == "i") {
        transformacion = transformacion + "a";
        i = i + 1;
      } else if (frase[i] == "e" && frase[i + 4] == "r") {
        transformacion = transformacion + "e";
        i = i + 4;
      } else if (frase[i] == "i" && frase[i + 3] == "s") {
        transformacion = transformacion + "i";
        i = i + 3;
      } else if (frase[i] == "o" && frase[i + 3] == "r") {
        transformacion = transformacion + "o";
        i = i + 3;
      } else if (frase[i] == "u" && frase[i + 3] == "t") {
        transformacion = transformacion + "u";
        i = i + 3;
      } else {
        transformacion = transformacion + frase[i];
      }
    }
  }

  if (transformacion != "") {
    esconderElemento("imagentexto");
    traspasoTexto(transformacion);
    borrarTexto("caja1");
    mostrarElemento("caja_2");
    mostrarElemento("boton_3");
  }
}

function traspasoTexto(texto) {
  document.getElementById("caja2").value = texto;
}

function borrarTexto(idcaja) {
  document.getElementById(idcaja).value = "";
}

function esconderElemento(elemento) {
  document.getElementById(elemento).style.display = "none";
}

function mostrarElemento(elemento) {
  document.getElementById(elemento).style.display = "flex";
}

function copiarTexto() {
  var contenido = document.getElementById("caja2");
  contenido.select();
  document.execCommand("copy");
}

function validarTexto(frase) {
  var formato = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]|[A-Z]|[0-9]|[áéíóú]/;
  var validacion = formato.test(frase);
  if (validacion == true) {
    borrarTexto("caja1");
    alert(
      "Solo letras minusculas, no se permiten caracteres especiales, acentos o numeros."
    );
    return true;
  } else {
    return false;
  }
}

// funciones 
