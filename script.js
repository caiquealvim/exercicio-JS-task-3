// exercicio 1
const nome = prompt("Escreva seu nome");
alert("Seu nome é " +nome);
console.log(nome);



// exercicio 2

const num1 = parseInt(prompt("Digite um numero"));
const num2 = parseInt(prompt("Digite outro numero"));
const soma = num1 + num2;
alert("O resultado da sua soma é " + soma)
console.log(soma);



// exercicio 3
const nota1 = parseInt(prompt("Digite sua primeira nota"));
const nota2 = parseInt(prompt("Digite a sua segunda nota"));
const media = (nota1 + nota2) / 2;
alert("A sua média é " + media);
console.log(media);



// exercicio 4 

const anoNascimento = parseInt(prompt("Digite o ano do seu nascimento"));
const hoje = new Date();
const anoAtual = hoje.getFullYear();
const idade = anoAtual - anoNascimento;
alert("Sua idade é " + idade);
console.log(idade);



// exercicio 5

const salarioHora = parseInt(prompt("Digite o seu salário por hora"));
const horasTrabalhadas = parseInt(prompt("Digite a horas trabalhadas no mês"));
const salario = (salarioHora * horasTrabalhadas)
alert("O salário do mês foi " + salario);
console.log(salario);
