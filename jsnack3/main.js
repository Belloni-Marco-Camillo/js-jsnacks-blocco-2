/* Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
 */

const nameList = [`marco`, `antonio`, `gabriele`, `nicolas`]
const secondNameList = [`rossi`, `bianchi`, `belloni`]



for (i = 0; i < 10; i++) {
    let randomName = Math.floor(Math.random() * nameList.length);
    let randomSecondName = Math.floor(Math.random() * secondNameList.length);
    let listInvited = nameList[randomName] + ` ` + secondNameList[randomSecondName];
    console.log(listInvited);
}