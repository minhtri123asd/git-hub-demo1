// var myDog = {
//     name: 'Kiki',
//     age: 4,
//     isAlive: false,
//     bark: function() {
//         console.log('ten tao la ' + this.name + ' Tao ' + this.age + 'tuoi')
//     }
// }
// console.log(myDog.bark())
// console.log(myDog.name)

// var dog = [
//     dog1 = {
//         type: 'husky',
//         name: 'dan',
//         age: 16
//     },
//     dog2 = {
//         type: 'shiba',
//         name: 'ngu',
//         age: 12
//     },
//     dog3 = {
//         type: 'pundle',
//         name: 'dot',
//         age: 11
//     }
// ]
// console.log(dog[1])
// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * x);

// console.log(map1);


// var array = [2, 5, 10, 50];
// var map1 = array.map(y => y * y);

// console.log(map1)
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(name => name.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]