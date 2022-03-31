/* Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. */

const array1 = [1, 2, 3, 4, 5, 6]
const array2 = [7, 8, 9, 10, 11, 12, 13, 14, 15]
let plusElement



while (array1.length != array2.length) {

    if (array1.length < array2.length) {
        plusElement = parseInt(prompt(`aggiungi elementi all'array 1`))
        const plus = array1.push(plusElement);
    } else {
        console.log(`arra2 è minore`);
        const plus = array2.push(plusElement);
    }
}
console.log(array1.length);

console.log(array2.length);