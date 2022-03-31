/* Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo. */

let numberInput, count
count = 0
while (count < 1) {
    numberInput = parseInt(prompt(`inserisci numero`))
    if (numberInput % 2 == 0) {
        console.log(`il numero è pari`);
    } else {
        numberInput = numberInput + 1;
        console.log(numberInput);
        console.log(`il numero è dispari`);
    }
    count++
}