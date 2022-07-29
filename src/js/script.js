var inputHeight = document.querySelector("#height");
var inputWeight = document.querySelector("#weight");
var btnCalculate = document.querySelector("#btn-calculate");

window.addEventListener("submit", render);
btnCalculate.addEventListener("click", render);

function calculateIMC() {
  var height = inputHeight.value;
  var weight = inputWeight.value;
  var imc = parseFloat((weight / height ** 2) * 10000).toFixed(2);
  return imc;
}

function validate(imc) {
  const height = inputHeight.value;
  const weight = inputWeight.value;
  let text = null;
  let className = null;

  if (height <= 0 || weight <= 0) {
    text = "A altura e o peso devem ser preenchidos e maior que zero";
    className = "error";
  } else if (imc < 18.5) {
    text = "IMC: " + imc + " - Abaixo do peso";
    className = "warning";
  } else if (imc === 18.5 || imc <= 24.9) {
    text = "IMC: " + imc + " - Peso normal";
    className = "normal";
  } else if (imc === 25 || imc <= 29) {
    text = "IMC: " + imc + " - Sobrepeso";
    className = "alert";
  } else if (imc === 30 || imc <= 34.9) {
    text = "IMC: " + imc + " - Obesidade grau 1";
    className = "warning";
  } else if (imc === 35 || imc <= 39.9) {
    text = "IMC: " + imc + " - Obesidade grau 2";
    className = "warning";
  } else {
    text = "IMC: " + imc + " - Obesidade grau 3";
    className = "warning";
  }
  console.log(text, className);
  return { text, className };
}

function render(event) {
  event.preventDefault();
  const imc = calculateIMC();
  const message = validate(imc);
  const divResult = document.querySelector("#container__result");
  const spanResult = document.querySelector(".container__message");
  spanResult.textContent = "";

  if (event.type === "click" || event.key === "Enter") {
    divResult.className = `${message.className}`;
    spanResult.textContent = message.text;
  }
}
