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

// MILESTONE 2 -----------------------------------------------------------------------

const femaleCats = cats.filter((element) => {
  return element.gender === 'female'
})

const maleCats = cats.filter((element) => {
  return element.gender === 'male'
})

const boxFemale = document.getElementsByClassName('box-female')[0];
const boxMale = document.getElementsByClassName('box-male')[0];

femaleCats.forEach((element) => {

  const {age, color, name} = element

  const opacity = age / maxAge;

  boxFemale.innerHTML += `
    <div>
      <i class="fas fa-cat" style="color:${color}"></i>
      <i class="fas fa-ribbon" style='color:pink; opacity:${opacity}'></i>
      ${name}
    </div>
  `
});


maleCats.forEach((element) => {

  const {age, color, name} = element

  const opacity = age / maxAge;

  boxMale.innerHTML += `
    <div>
      <i class="fas fa-cat" style="color:${color}"></i>
      <i class="fas fa-ribbon" style='color:blue; opacity:${opacity}'></i>
      ${name}
    </div>
  `
});


// const insertCat = function(catList, box, genderColor) {
//   catList.forEach((element) => {
//
//     const {age, color, name} = element
//
//     const opacity = age / maxAge;
//
//     box.innerHTML += `
//       <div>
//         <i class="fas fa-cat" style="color:${color}"></i>
//         <i class="fas fa-ribbon" style='color:${genderColor}; opacity:${opacity}'></i>
//         ${name}
//       </div>
//     `
//   });
// }
//
// insertCat(femaleCats, boxFemale, 'pink')
// insertCat(maleCats, boxMale, 'blue')
