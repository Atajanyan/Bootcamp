// const obj = {};
// obj.a = 1;
// console.log(Object.getOwnPropertyDescriptor(obj,'a'))

// const obj1 = {};
//  Object.defineProperty(obj1,'a',{value:1, writable:true,enumerable:true,configurable:false})
// // console.log(Object.getOwnPropertyDescriptor(obj1,'a'));
// delete obj1.a
// console.log(obj1);
  


// let obj = {name:'ooo'}
// function foo(obj,key,value){
//     let obj1 = Object.getOwnPropertyDescriptor(obj,key)
//     if(obj1.writable){
//         obj[key]=value
//         return obj
//     }
//     return false
// }
// console.log(foo(obj,'name',20));


// let obj = {
//    name:'nmjn',
//    age:5
// }


// console.log(Object.entries(obj));
// function foo(){
// let arr = Object.keys(obj)
// let arr1 = Object.values(obj)
// console.log(arr,arr1);
// }
// foo()


// function entries(obj) {
//     let arr = []
//     for (const key in obj) {
//         let a = []
//         a.push(key,obj[key])
//         arr.push(a)
//     }
//    console.log(arr);
// }
// entries(obj)


// function assign(obj1,obj) {
//     return Object.assign(obj1,obj)
// }
// console.log(assign({l:'oo'},obj));


// let n = 12
// n = 12
// n=n++
// n=n++//12


// function concat(arr1,arr2) {
//     let arr = []
//     for (let i = 0; i < arr1.length; i++) {
//         arr.push(arr1[i])
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         arr.push(arr2[i])
//     }
//     return arr
// }
// console.log(concat([1,2,3],[2,3,6]));



// let arr = [1,2,3,4,5,6]
// let obj = {}
// for (const key of arr) {
//     obj[key] = key
// }
// console.log(obj);


// function every(arr,call) {
//     for (let i = 0; i < arr.length; i++) {
//         const conditian = call(arr[i],i,arr)
//         if (!conditian) return false
//     }
//     return true
// }
// every(even,(item,ind,arr)=>{
//     console.log(item,ind,arr);
//     return true
// })



// function map(arr,call){
//     let arr1 = []
//     for (let i = 0; i < arr.length; i++) {
//         arr1.push(call(arr[i],i,arr))
//     }
//     return arr1
// }
// console.log(map([1,2,3],(item)=>item+1));



// function filter(arr,call){
//     let arr1 = []
//     for (let i = 0; i < arr.length; i++) {
//         let res = call(arr[i],i,arr)
//         if(res) arr1.push(arr[i])
//     }
//     return arr1
// }
// console.log(filter([1,2,3,4],(item)=>item>2));



// function reduee(arr,call,init) {
//     let arr1 = []
//     let res 
//     for (let i = 1; i < arr.length; i++) {
//        if(!init){
//         arr1.push(call(arr[0],arr[i]))
//     }
//   }
//   return arr1
// }
// console.log(reduee([1,2,3,4],(a,b)=>a+b));



const studentsArray = [
    {
        name: 'Armen',
        age: 20,
        gpa: 3,
        grades: [1,50,30,55,88,100]
    },
    {
        name: 'Anna',
        age: 28,
        gpa: 4,
        grades: [1,3,5,7]
    },
    {
       name: 'Kim',
        age: 24,
        gpa: 1,
        grades: [6,88,5,99]
    }
]


// let even = studentsArray.map(e=>e.gpa)
// console.log(every(even),(it,ind,arr)=>{it>2});

let arr = studentsArray.map(e=>e.grades)
let arr1 = arr.map(e=>e.reduce((a,b)=>(a+b)/length))

console.log(arr1);