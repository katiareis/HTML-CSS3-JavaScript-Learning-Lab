/* 	2. Conversor de temperatura:
Crie um site que peça ao usuário a temperatura em graus Celsius (°C), utilizando prompt(), e devolva, no console, a temperatura em graus Farenheit (°F) utilizando console.log(). A fórmula matemática para converter de °C a °F é: T(°F) = ( T(°C) × 1.8 ) + 32.
*/

let celsius = parseFloat(prompt("Qual é a temperatura em Celsius?"));

let convertToFarenheit = (celsius * 1.8) + 32;
console.log("A temperatura em Farenheit é: " + convertToFarenheit);
