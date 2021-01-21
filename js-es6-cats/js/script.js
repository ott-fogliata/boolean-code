const maxAge = 20;
const cats = [
  {
    name: 'Bit',
    age: 5,
    color: 'grey',
    gender: 'female'
  },
  {
    name: 'Adam',
    age: 2,
    color: 'black',
    gender: 'male'
  },
  {
    name: 'Emily',
    age: 12,
    color: 'orange',
    gender: 'female'
  },
  {
    name: 'Mike',
    age: 9,
    color: 'red',
    gender: 'male'
  }
];

const appContainer = document.getElementById('container');

cats.forEach((element) => {

  appContainer.innerHTML += `
  <div>
    <i class="fas fa-cat" style="color:${element.color}"></i>
    ${element.name}
  </div>
  `

})


/*
raggiungere questo numero per l'opacità
0.8
0.1
0.5
*/
