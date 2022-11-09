let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let result = document.getElementById("result");
let danger = document.getElementById("resDanger");

document.querySelector(".btn").addEventListener("click", () => {
  let operation = document.getElementById("operation");
  let calc;

  //valida se os inputs estão vazios e retorna a solicitação de números
  if (number1.value == "" || number2.value == "") {
    danger.innerText = "Digite dois valores para calcular";
    danger.style.color = "red";
    number1.value = "";
    number2.value = "";
    result.innerHTML = 0;
  }

  //Se os inputs forem diferentes de vazio, roda o cálculo
  if (number1.value !== "" && number2.value !== "") {
    danger.style.color = "#e4e6eb";

    switch (operation.value) {
      case "sun":
        calc = Number(number1.value) + Number(number2.value);
        danger.innerHTML = `${number1.value} mais ${number2.value} é:`;
        result.innerHTML = `${calc}`;
        break;

      case "subtraction":
        calc = Number(number1.value) - Number(number2.value);
        danger.innerHTML = `${number1.value} menos ${number2.value} é:`;
        result.innerHTML = `${calc}`;
        break;

      case "multiplication":
        calc = Number(number1.value) * Number(number2.value);
        danger.innerHTML = `${number1.value} vezes ${number2.value} é:`;
        result.innerHTML = `${calc}`;
        break;

      case "division":
        calc = Number(number1.value) / Number(number2.value);
        danger.innerHTML = `${number1.value} dividido por ${number2.value} é:`;
        result.innerHTML = `${calc}`;
        break;

      default:
        calc = (Number(number1.value) * Number(number2.value)) / 100;
        danger.innerHTML = `${number1.value}% por cento de ${number2.value} é:`;
        result.innerHTML = `${calc}`;
        break;
    }
  }
});

document.querySelector(".btnClear").addEventListener("click", () => {
  number1.value = "";
  number2.value = "";
  result.innerHTML = 0;
  danger.innerHTML = "O resultado será exibido aqui.";
  danger.style.color = "#e4e6eb";
});
