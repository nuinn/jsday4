// Crea una función resta que espere dos parámetros a y b, y que devuelva la resta de los mismos.
// function resta (a,b){
//     return a%b
// }
// console.log(resta(13,4))

// Crea una función la cual te pregunte por una nota del 0 al 10 y, dependiendo del número, te devuelva la siguiente clasificación.
//Nota: Debes de usar el Switch.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.
// function nota() {
// let num = prompt ("Introducir nota")
//     switch (true) {
//         case num >= 9 && num <= 10:
//             return "sobresaliente"
//         case num >= 7 && num < 9:
//             return "notable"
//         case num >= 5 && num < 7:
//             return "suficiente"
//         case num >= 0 && num < 5:
//             return "insuficiente"
//         default:
//             return "Debes introducir una nota valida"    
//     }
// }

// Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’.
// function duplicaNumero(){
//     let num = prompt ("enter number:")
//     num = +num
//     if (isNaN(num)){
//         return "Debo ser ejecutada con un número"
//     }
//     return num*2
// }

// Crea la función caracterInicial. Debe recibir un tipo string y devolver un string con el primer carácter. 
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'. 
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'.
// function caracterInicial(word) {
//     if (typeof word !== "string"){
//         return "Debo ser ejecutada con un string"
//     }

//     else if (!word[0]){
//         return "Debo ser ejecutada con un string no vacío"
//     }
//     else{
//     return word[0];
//     }
// }
// console.log(caracterInicial("Miercoles"))

// Crea la función ultimoCaracter. Debe recibir un tipo string y devolver un string con el último carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'.
// function ultimoCaracter(word){
//     if (typeof word !== "string"){
//         return "Debo ser ejecutada con un string"
//     }

//     else if (!word[0]){
//         return "Debo ser ejecutada con un string no vacío"
//     }
//     else{
//     return word[word.length-1];
//     }
// }
// console.log(ultimoCaracter(true))

// Crea la función cuentaCaracteres. Debe recibir un tipo string y devolver un number con el número de carácteres.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// function cuentaCaracteres(word){
//     if (typeof word !== "string"){
//         return "Debo ser ejecutado con un string"
//     }
//     return word.length;
// }
// console.log(cuentaCaracteres(true))

// Un palíndromo es una palabra que se escribe igual del derecho que del revés, por ejemplo: orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
// Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'.
// function isPalindrome(word){
//     if (typeof word !== "string" || word.length == 0){
//         return "No es formato correcto"
//     }
//     let reverse = word.split("")
//     reverse = reverse.reverse()
//     reverse = reverse.join("")
//     if (word == reverse){
//         return `Yes, "${word}" is a palindrome!`
//     }
//     else{
//         return `Sorry, "${word}" isn't a palindrome :(`
//     }
// }
// console.log(isPalindrome("orejero")

// Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €. 
// Si la función no recibe un número debería devolver devolver 'no es un formato correcto'.
// function getPrecioMostrar(num){
//     if (typeof num !== "number"){
//         return "no es un formato correcto"
//     }
//     else {
//         return num.toFixed(2) +" €";
//     }
// }
// console.log(getPrecioMostrar(true))

// Crea la función division que acepte como argumento dos números y devuelva el resultado de su división.
// function division(a,b){
//     return a/b;
// }
// console.log(division(5,2))

// Crea una función que, dada una array de números, devuelva una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8].
// function fiveOrMore(arr){
//     const moreThanFive = [];
//     for (number of arr){
//         if (number >= 5){
//             moreThanFive.push(number)
//         }
//     }
//     return moreThanFive;
// }
// console.log(fiveOrMore([3, 6, 8, 2]))

// Crea una aplicación que nos pida un número por prompt y, con un método, se lo pasemos por parámetro para que nos indique si es o no un número primo. Debe devolver true si es primo, sino false. 
// Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.
// function isPrime(){
//     let num = prompt ("Enter a number:")
//     num = +num
//     if (isNaN(num) == true || num == 0){
//         return "Please enter a valid number"
//     }
//     else if (num == 1){
//         return false
//     }
//     for (let i = 2; i < num; i++){
//         if (num%i == 0){
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime())

// Extras

// Crear la función obtenerImpares que acepte como argumento un array de números y devuelva un array con los elementos impares.
// function obtenerImpares(arr){
//     const impares = [];
//     for (number of arr){
//         if (number%2 != 0){
//             impares.push(number)
//         }
//     }
//     return impares
// }
// const test = [0,1,2,3,4,5,6,7,8,9,10,11]
// console.log(obtenerImpares(test))

// Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6.
// function sumarArray(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum;
// }
// const test = [1,2,3,4,5,6]
// console.log(sumarArray(test))

// Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24.
// function multiplicarArray(arr){
//     let total = arr[0];
//     for (let i = 1; i < arr.length; i++){
//         total *= arr[i];
//     }
//     return total;
// }
// const test = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// console.log(multiplicarArray(test))

// // Crea una función checkPassword con una variable tipo string que contenga una contraseña cualquiera. Después, se te pedirá que introduzcas la contraseña (usando prompt), con 3 intentos. Cuando aciertes, ya no pedirá más la contraseña y mostrará un mensaje diciendo “Enhorabuena” (ej. un alert). Piensa bien en la condición de salida (3 intentos y, si acierta, sale aunque le queden intentos).
// function checkPassword(){
//     const password = "TheBridge";
//     for (let i = 1; i <= 3; i++) {
//         const guess = prompt("Enter password:")
//         if (guess == password) {
//             return alert("Enhorabuena")
//         }
//     }
// }
// console.log(checkPassword())