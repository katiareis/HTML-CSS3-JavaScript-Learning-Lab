/* 	4. Iniciais: 
Crie um programa que peça o nome e sobrenome do usuário. O usuário deve introduzir duas palavras separadas por um espaço, por exemplo: "Ana Martinez". O programa deve devolver as iniciais em maiúsculas. Vamos ver alguns exemplos: "ana martinez" e "Ana Martinez" devolvem as iniciais "AM". "Michelle Seguil" e "michelle seguil" devolvem "MS".
*/
let userName = prompt("Qual é o seu nome e sobrenome? ")
let firstInitial = userName.slice(0,1)
let secondInitialPosition = userName.indexOf(" ") + 1;
let secondInitial = userName.slice(secondInitialPosition,secondInitialPosition + 1);
document.write("Suas iniciais são: " + firstInitial.toUpperCase() + secondInitial.toUpperCase());
