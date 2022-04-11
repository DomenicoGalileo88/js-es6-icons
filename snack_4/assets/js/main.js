/* 
Snack 4:
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/


//Crea un array di oggetti che rappresentano delle persone.
const persons = [
  {
    nome: "Luca",
    cognome: "Iorio",
    eta: 17,
  },
  {
    nome: "Consiglia",
    cognome: "Barra",
    eta: 22,
  },
  {
    nome: "Alessio",
    cognome: "Vergara",
    eta: 26,
  },
  {
    nome: "Elena",
    cognome: "Felice",
    eta: 16,
  } 
];


//Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
const patentati = [];
persons.forEach((person) => {
  
  if (person.eta >= 18) {// se l'età della persona è >= di 18 allora stampami in console, il suo nome, il suo cognome e scrivi che può guidare
    console.log(person.nome, person.eta);
    patentati.push(`${person.nome} ${person.cognome} Puoi guidare`)
  } else {
    // Altrimenti l'età della persona è < di 18, allora stampami in console, il suo nome, il suo cognome e scrivi che non può guidare
    console.log(person.nome, person.eta);
    patentati.push(`${person.nome} ${person.cognome} Non puoi guidare`);
  }
})

console.log(patentati);
const patentatiScreen = document.querySelector('.patentati');
patentatiScreen.innerHTML = patentati;