/* 	3. Ganhos e perdas: 
Crie um programa que peça os ingressos, os custos e o % de impostos, e calcule o ganho depois de impostos. Deve imprimir o resultado no site com o símbolo $ na frente.
*/
let income = parseFloat(prompt("Qual é o valor da entrada: "));
let costs = parseFloat(prompt("Qual é o valor da saíde? "));
let taxesPercent = parseFloat(prompt("Qual é a porcentagem dos impostos? "));
let grossProfit = income - costs;
let tax = (grossProfit * taxesPercent) / 100;
let netIncome = grossProfit - tax;
document.write("Sua renda líquida é de R$ " + netIncome);
