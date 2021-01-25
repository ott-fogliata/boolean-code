const students = [
  {
    name: 'Gigi',
    surname: 'LaTrottola',
    age: 15,
    promosso: true,
    classe: 2
  },
  {
    name: 'Mario',
    surname: 'Merola',
    age: 14,
    promosso: false,
    classe: 1
  },
  {
    name: 'Otto',
    surname: 'Fogli',
    age: 17,
    promosso: true,
    classe: 4
  },
  {
    name: 'Lara',
    surname: 'Croft',
    age: 16,
    promosso: false,
    classe: 3
  },
  {
    name: 'Aran',
    surname: 'Ciata',
    age: 18,
    promosso: true,
    classe: 5
  }
]

console.log(students);

let newYearStudents = students.map((element, index, array) => {

  // con questa soluzione evitiamo di agire direttamente su element
  // così da NON modificare l'elemento originale.
  let {name, surname, age, promosso, classe} = element;

  if(promosso === true) {
    classe += 1;
  }

  return {
    name,
    surname,
    age,
    promosso,
    classe
  };

})

console.log(newYearStudents);

newYearStudents = newYearStudents.filter((element) => {
  return element.classe < 6;
});

console.log(newYearStudents);


// let newYearStudents = students.map((element, index, array) => {
//
//   if(element.promosso === true) {
//     element.classe += 1;
//   }
//
//   if(element.classe < 6) {
//     return element;
//   }
//
// })
//
// newYearStudents = newYearStudents.filter((element) => {
//   return typeof element !== 'undefined';
// })
//
// console.log(newYearStudents);
