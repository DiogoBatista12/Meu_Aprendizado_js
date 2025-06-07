let interruptor = true;

while (interruptor) {
  let pergunta = prompt("Qual número você quer ver a tabuada de 1 a 10?");
  if (pergunta > 10 || pergunta < 0) {
    console.log("Número não é permitido");
  }

  for (let i = 0; i < 11; i++) {
    console.log(`${pergunta} * ${i} = ${pergunta * i}`);
  }

  let pergunta2 = prompt("Deseja ver outra tabuada?");

  if (pergunta2 == "sim") {
     interruptor;
  } else {
     console.log("Ok");
     interruptor = false;
  }
}
