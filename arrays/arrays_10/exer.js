let contatos = {
  nome: "Diogo",
  senha: "1",
};

let x = true;
console.log(typeof contatos.senha);
while (x) {
  console.log("ENTRADA");
  let entrada = prompt("DIGITE SEU NOME: ");
  let entrada2 = prompt("DIGITE SUA SENHA: ");

  if (!entrada || !entrada2) {
    alert("POR FAVOR PREENCHA TODOS OS CAMPOS!!!");
    continue;
  }

  if (entrada === contatos.nome && entrada2 === contatos.senha) {
    console.log("VOCÊ PODE ENTRAR");
    setTimeout(function () {
      alert("SEJÁ BEM VINDO!!!");
      window.location.href = "https://github.com/DiogoBatista12";
    }, 1000);

    x = false;
    break;
  } else {
    alert("VOCE NÃO PODE ENTRAR");
    x = true;
  }
}
