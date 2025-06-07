let num1 = parseInt(prompt("Digite o primeiro número: "))
let num2 = parseInt(prompt("Digite o segundo número"))
let pergunta = prompt( "Escolha a operação que deseja fazer entre os dois númros.");

// USAR O parseInt(prompt()) PARA CONVERTER A STRING DEVOLVIDA PELO PROMPT PARA NUMBER;

let result = 0;
switch (pergunta) {
  case "+":
    result = num1 + num2;
    console.log(result);
    break;

  case "-":
    result = num1 - num2;
    console.log(result);
    break;

  case "*":
    result = num1 * num2;
    console.log(result);
    break;

  case "/":
    if (num2 != 0) {
      result = num1 / num2;
      console.log(result);
      break;
    } else {
      console.log("Não pode divisão por zero");
    }

  default:
    console.log("Você inseriu um caractér errado");
    break;
}
