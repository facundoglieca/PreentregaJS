
function convertir() {
    let valor = document.getElementById("valor").value.trim();
    if (valor === "" || isNaN(valor)) {
      alert("Debes ingresar un número válido.");
      return;
    }
  
    valor = parseInt(valor);
    let resultado = 0;
    let dolar = 495;
    let euro = 538;
    let yen = 143;
  
    if (document.getElementById("uno").checked) {
      resultado = valor / dolar;
      alert(`El cambio de pesos a dólares es: $ ${resultado.toFixed(2)}`);
    } else if (document.getElementById("dos").checked) {
      resultado = valor / euro;
      alert(`El cambio de pesos a euros es: $ ${resultado.toFixed(2)}`);
    } else if (document.getElementById("tres").checked) {
      resultado = valor / yen;
      alert(`El cambio de pesos a yenes es: $ ${resultado.toFixed(2)}`);
    } else {
      alert("Debes seleccionar un tipo de moneda.");
    }
  
    alert("¡Gracias por cotizar en Pullman!!");
  }