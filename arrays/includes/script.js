let nomes = ["Diogo", "Marcio", "fael"];

console.log(nomes.includes("Marcio"));
console.log(nomes.includes("Rafael"));

x = true;

while (x) {
  let email = prompt("Digite seu email: ");

  if (!email.includes("@") || !email.includes(".com")){
    alert("Tem que possuir caracteres especiais ou o . com");
  }else{
    alert("Você está logado");
    x = false;
  }
}
