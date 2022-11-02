let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let operation = document.getElementById("operation");
let result = document.getElementById("result");
let danger = document.getElementById("resDanger");

document.querySelector(".btn").addEventListener("click", () => {
  danger.style.color = "#e4e6eb";

  let calc;
  if (number1.value !== "" && number2.value !== "") {
    if (operation.value === "sun") {
      calc = Number(number1.value) + Number(number2.value);
      danger.innerHTML = `${number1.value} mais ${number2.value} é:`;
      result.innerHTML = `${calc}`;
    } else if (operation.value === "subtraction") {
      calc = Number(number1.value) - Number(number2.value);
      danger.innerHTML = `${number1.value} menos ${number2.value} é:`;
      result.innerHTML = `${calc}`;
    } else if (operation.value === "multiplication") {
      calc = Number(number1.value) * Number(number2.value);
      danger.innerHTML = `${number1.value} vezes ${number2.value} é:`;
      result.innerHTML = `${calc}`;
    } else if (operation.value === "division") {
      calc = Number(number1.value) / Number(number2.value);
      danger.innerHTML = `${number1.value} dividido por ${number2.value} é:`;
      result.innerHTML = `${calc}`;
    } else if (operation.value === "percentage") {
      calc = (Number(number1.value) * Number(number2.value)) / 100;
      danger.innerHTML = `${number1.value}% por cento de ${number2.value} é:`;
      result.innerHTML = `${calc}`;
    }
  } else if (number1.value == "" || number2.value == "") {
    danger.innerText = "Digite dois valores para calcular";
    danger.style.color = "red";
    number1.value = "";
    number2.value = "";
    result.innerHTML = 0;
  }
});

document.querySelector(".btnClear").addEventListener("click", () => {
  number1.value = "";
  number2.value = "";
  result.innerHTML = 0;
  danger.innerHTML = "O resultado será exibido aqui.";
});
