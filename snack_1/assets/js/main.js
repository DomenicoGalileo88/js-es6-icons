/* Descrizione:

Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */

//Crea un array composto da 10 automobili.
//Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
const cars = [
  {
    marca: "Fiat",
    modello: "Punto",
    alimentazione: "diesel",
  },
  {
    marca: "Fiat",
    modello: "500",
    alimentazione: "elettrico",
  },
  {
    marca: "Bmw",
    modello: "Serie 1",
    alimentazione: "diesel",
  },
  {
    marca: "Pagani",
    modello: "Zonda",
    alimentazione: "benzina",
  },
  {
    marca: "Mercedes",
    modello: "Classe A",
    alimentazione: "benzina",
  },
  {
    marca: "Ford",
    modello: "Focus",
    alimentazione: "gpl",
  },
  {
    marca: "Pegeaut",
    modello: "208",
    alimentazione: "gpl",
  },
  {
    marca: "Renault",
    modello: "Megane",
    alimentazione: "metano",
  },
  {
    marca: "Lancia",
    modello: "delta",
    alimentazione: "metano",
  },
  {
    marca: "Citroen",
    modello: "C 3",
    alimentazione: "elettrico",
  },
];
//console.log(cars);

//Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.


let benzina = cars.filter((car) => {
  if (car.alimentazione === 'benzina') {
    return true
  } return false
});
console.log(benzina);

let diesel = cars.filter((car) => {
  if (car.alimentazione === "diesel") {
    return true;
  }
  return false;
});
console.log(diesel);

let altre = cars.filter((car) => {
  if (car.alimentazione !== 'diesel' && car.alimentazione !== 'benzina') {
    return true
  } 
  return false
})
console.log(altre);

//Infine stampa separatamente i 3 array. 