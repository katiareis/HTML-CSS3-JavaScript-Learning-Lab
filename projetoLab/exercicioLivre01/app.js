// Perguntar a idade por meio de um prompt() e converter para int usando parseInt
var age = parseInt(prompt("Qual é a sua idade?"))

// Converter a idade para segundos
var ageInSeconds = age * 365 * 24 * 60 * 60

// Mostrar no console
console.log(ageInSeconds);

// Mostrar o resultado na página por meio do document.write
document.write("Em seus " + age + " de idade, se passaram " + ageInSeconds + " segundos.")
