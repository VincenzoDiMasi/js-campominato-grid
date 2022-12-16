console.log('JS OK')

/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto 
un messaggio in console con il numero della cella cliccata.
MILESTONE 1
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. 
Al click del bottone play, 
vengono generate 100 celle in 10 righe da 10 celle ciascuna.
MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, 
poi coloriamo la cella d'azzurro!
*/

// Creo funzione per generare celle
function createCell(number){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.append(number);
    return cell;
}


// Prendo elementi dal DOM
const button = document.querySelector('.btn');
const container = document.querySelector('.container');
const grid = document.querySelector('.grid');
const h2 = document.querySelector('h2');

const rows = 10;
const cols = 10;
const totalCells = rows * cols; 


// Creo event listener al button
button.addEventListener('click', function(){

    // Rimuovo h2
    container.removeChild(h2);

    // Creo ciclo per aggiungere le celle
    for(let i = 1 ; i <= totalCells; i++){
        const cell = createCell(i);
        
        cell.addEventListener('click', function(){
            cell.classList.toggle('clicked');
            console.log('cella n:' + i);
        });
        grid.appendChild(cell);
    }
    
    
});
