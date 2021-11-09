/* Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

/* richiamiamo la costante per stamoare dentro i numeri in html */

const containerNumPc = document.getElementById("containernumpc");

const containerNumUser = document.getElementById("containernumuser");

const containerCheck = document.getElementById("indovinato");

/* creiamo un'array vuota per inserirci i numeri che verranno generati dal pc */

const arrNumPc = [];

/* creiamo un ciclo per generare i numeri casuali che non possono essere duplicati */

while (arrNumPc.length < 5){

    let numPc = Math.floor(Math.random() * 99) + 1;

    p = arrNumPc.includes(numPc);

    if (!p){

        arrNumPc.push(numPc)

    }

}
console.log(arrNumPc);

/* andiamo a stampare in pagina 5 numeri casuali generati dal computer */

arrNumPc.forEach((elementPc) => {

    containerNumPc.innerHTML += `
    <div class="container">

        <span>${elementPc}</span>

    </div>
    `

});

/* andiamo a creare una funzione che dopo 30 secondi fa sparire il div */

setTimeout(pcNumFunction, 3000)

function pcNumFunction() {

    containerNumPc.remove()

}

/* creiamo un ciclo per i prompt per chiedere all'utente di inserire i numeri che ha visto generarsi */

const arrNumUser = [];

setTimeout(promptRequest, 4000)

function promptRequest(){
    for (let i = 0; i < 5; i++){
        const numRequest = parseInt(prompt("inserisci il numero generato precendentemente"));

        containerCheck.innerHTML = `<h2>Hai indovinato:</h2>`

        /* se i numeri generati sono uguali a quelli del pc allora li aggiungiamo in pagina e controlliamo quanti ne ha indovinati */

        if (numRequest === arrNumPc[i]){
            arrNumUser.push(numRequest);

            containerNumUser.innerHTML += `

            <div class="container">

                <span>${numRequest}</span>

            </div>
            `
        };
    }
}