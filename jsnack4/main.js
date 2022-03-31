/* Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari */

const numeriInteri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
let count = 0
let somma = 0

/* while (count <= numeriInteri.length) {
    let numeroIntero = numeriInteri
    somma = somma + numeroIntero
    console.log(somma);
} */
for (i = 0; i < numeriInteri.length; i++) {
    let numeroIntero = numeriInteri[i]
    if (numeroIntero % 2 !== 0) {
        somma = somma + numeroIntero
    }
}
console.log(somma);