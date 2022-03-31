let i, count, numeroInput, somma
somma = 0
i = 0
count = 0

for (i = 0; i < 5; i++) {
    numeroInput = parseInt(prompt(`inserisci numero`))
    somma = somma + numeroInput
}
console.log(somma);


/* 
while (count < 5) {
    numeroInput = parseInt(prompt(`inserisci numero`))
    somma = somma + numeroInput

    count++
}
console.log(somma); */