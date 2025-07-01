const somarNotas = (...args) => {
  let vezes = 0;
  let ancora = 0;
  for (let i = 0; i < args.length; i++) {
    ancora += args[i];
    vezes += 1;
  }
  if (ancora / vezes >= 7) {
    console.log(`Sua Média foi ${ancora} e você está aprovado`);
  } else {
    console.log(`Sua Média foi ${ancora} e você está reprovado`);
  }
};

somarNotas(8.5, 10, 2.5);
