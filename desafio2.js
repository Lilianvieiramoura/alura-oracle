function HelloWorld() {
  console.log('Olá mundo!');
};

HelloWorld();

function saudacao(nome) {
  console.log(`Olá ${nome}`);
};

saudacao('Lílian');

function dobro(num) {
  return num * 2;
};

console.log(dobro(10));

function media(num1, num2, num3) {
  let soma = num1 + num2 + num3;
  return soma / 3;
};

console.log(media(10, 8, 7));

function maiorNumero(n1, n2) {
  return n1 > n2 ? n1 : n2;
}

console.log(maiorNumero(10, 20));

function exponenciacao(n) {
  return n * n;
}

console.log(exponenciacao(10));