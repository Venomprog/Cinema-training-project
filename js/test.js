// const films = [
//   {
//       name: 'Titanic',
//       rating: 9
//   },
//   {
//       name: 'Die hard 5',
//       rating: 5
//   },
//   {
//       name: 'Matrix',
//       rating: 8
//   },
//   {
//       name: 'Some bad film',
//       rating: 4
//   }
// ];


// function showGoodFilms(arr) {
//   const bestFilms = arr.filter(function(item) {
//     return item.rating >= 8;
//   })

//   return bestFilms
// }

// console.log(showGoodFilms(films))
// console.log(showListOfFilms(films))
// console.log(setFilmsIds(films))

// function showListOfFilms(arr) {
//   const newArr = []

//   for (let i = 0; i < arr.length; i++){

//     newArr[i] = arr[i].name
//   }
//   const res = newArr.reduce((sum, current) => {
//     return `${sum}, ${current}`
//   })

//   return res
// }

// function setFilmsIds(arr) {
//   let i = 0;
//   const res = arr.map(item => {
//     item.id = i
//     i++
//     return item
//   })

//   return res
// }

// const tranformedArray = setFilmsIds(films);
// console.log(checkFilms(tranformedArray))
// checkFilms(tranformedArray)
// function checkFilms(arr) {
  
//   const res = arr.every(item => typeof(item.id) === 'number')

//   return res
// }