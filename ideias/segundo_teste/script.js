const verificacao_nome = (nome) => {
  if (nome.length < 3 || /\d/.test(nome)) {
    alert(
      "Seu nome não pode ter menos que três caracteres e seu nome não pode conter números"
    );
    return false;
  }
  return true;
};

const verificacao_email = (email) => {
  if (!email.includes("@") || !email.includes(".com")) {
    alert("Seu email deve incluir '@' e '.com'");
    return false;
  }
  return true;
};

const verificacao_senha = (senha, senha2, nome) => {
  if (senha.length < 3 || senha == nome) {
    alert(
      "Sua senha não pode ser igual a seu nome e sua senha deve possuir mais de 3 caracteres"
    );
    return false;
  }

  if (senha != senha2) {
    alert("As senhas não são iguais");
    return false;
  }
  return true;
};

let cadastro = [];
x = true;
while (x) {
  const nome = prompt("Digite seu nome: ").toLowerCase().trim();
  if (!verificacao_nome(nome)) {
    continue;
  }
  const email = prompt("Digite seu email: ").toLowerCase().trim();
  if (!verificacao_email(email)) {
    continue;
  }
  const senha = prompt("Digite sua senha: ").toLowerCase().trim();
  const senha2 = prompt("Confirme sua senha: ").toLowerCase().trim();
  if (!verificacao_senha(senha, senha2, nome)) {
    continue;
  }

  cadastro.push({ nome, email, senha });
  alert("Cadastro efetuado!!!");

  let pergunta = prompt("Deseja cadastrar outra pessoa? ").toLowerCase().trim();
  if (pergunta == "sim") {
    x = true;
  } else {
    console.log(cadastro);
    x = false;
  }
}
