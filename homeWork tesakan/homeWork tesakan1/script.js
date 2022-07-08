//ex1
// const fill = (arraySize, value) => {
//     let arr = []
//     for (let i = 0; i <arraySize ; i++) {
//         arr[arr.length]=value
//     }
//     console.log(arr);
// }
// fill(3,'a')


//ex2
// const reverse = (array) => {
//     let reverseArr = []
//     for (let i = array.length-1; i >= 0; i--) {
//         reverseArr[reverseArr.length] = array[i]
//     }
//     console.log(reverseArr);
// }
// reverse([1,2,3,4])


//ex3
// const compact = (array) => {
//     let compactArr = []
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]){
//             compactArr[compactArr.length] = array[i]
//         }
//     }
//     console.log(compactArr);
// }
// compact([0, 1, false, 2, undefined, '', 3, null ])


//ex4
// const fromPairs = (array) => {
//     let obj = {}
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             obj[array[i][0]] = array[i][1]
//         }
//     }
//     console.log(obj);
// }
// fromPairs([['a', 1], ['b', 2]])


//ex5
// const arr = [1,[2,3,6] ,2, [3, 4, [5, 6]]];

// function flatDeep(arr, d = 1) {
//     return( 
//      d > 0 ? arr.reduce((acc, val) => {
//       return acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val)}, []): arr.slice())

// };
//  console.log(flatDeep(arr, Infinity))



//ex6
// function general() {
//     let count = 0;
//     return {
//       add: ()=> {
//         return ++count;
//       },
//       sub: ()=> {
//         return --count;
//       }
//     }
//   }
  
//   let count = general();
//   console.log(count.add());
//   console.log(count.add());
//   console.log(count.add());
//   console.log(count.sub());
//   console.log(count.sub());