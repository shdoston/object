// let personObj = {
//     name : "Dostobek",
//     from : 'Uzbekistan',
//     age : 24,
//     study : 'unversitet',
// }
// function sipkAbaut(obj) {
// console.log(`solom mening ismim ${ obj.name} yoshim ${obj.age} yashash joyim ${obj.from}`)
// }
// sipkAbaut(personObj)

// uy ishi

// function getAverageAge(arr) {
//     let ages = 0
//     for(let i = 0; i < arr.length;i++)
// ages += arr[i].age
//     return ages/ arr.length
// }

//   console.log(getAverageAge(people))
// 2
// function isMarried(arr,age){
//     let obj = []
//     for(let i = 0; i<arr.length; i++){
//         arr[i].age > age ? (arr[i].isMarried = true) : (arr[i].isMarried = false)
//         obj.push(arr[i])
//     }
//     return obj
// }

// const people = [
//     { name: "Abdulaziz", age: 33 },
//     { name: "Erkin", age: 22 },
//     { name: "Temur", age: 34 },
//     { name: "Sardor", age: 20 },   
// ];
// console.log(isMarried(people,25))
// 3
// function getNameMaxMinAge(arr) {
//     let kattYosh = 0
//     let yoshim = 0
//     let kichikYosh = 0
//     let kichiky= 0
//     for(let i = 0; i <arr.length; i++){
//         if(kattYosh === 0 || arr[i].age > kattYosh) {
//           kattYosh= arr[i].age
//           yoshim =  (arr[i].name) 
//         }
//         if(kichikYosh === 0 || arr[i].age < kichikYosh) {
//         kichikYosh= arr[i].age
//         kichiky =  (arr[i].name) 
//         }
//     }


// return {
//    yoshim ,kichiky
//   }
// }

//  let people= [
//     { name: "Abdulaziz", age: 33, isMarried: true},
//     { name: "Erkin", age: 22, isMarried: false },
//     { name: "Temur", age: 34, isMarried: true },
//     { name: "Sardor", age: 20, isMarried: false },
//   ];
//   console.log(getNameMaxMinAge(people))
// 5
// function getUniqueKeys(obj1, obj2) {
//   const objk = {};
//   for (let key in obj1) {
//       if (!(key in obj2)) {
//           objk[key] = obj1[key];
//       }
//   }
//   for (let key in obj2) {
//       if (!(key in obj1)) {
//           objk[key] = obj2[key];
//       }
//   }

//   return objk;
// }
// const obj1 = { a: 3, b: 10, c: 5, d: 7 };
// const obj2 = { a: 10, d: 4, e: 6, f: 15 };

// console.log(getUniqueKeys(obj1, obj2));

// 1.1
// const me = {
//     firstName: "Abdulaziz",
//     lastName: "Toshpulatov",
//     age: 23,
//     languages: ["js", "python", "c++", "nodejs"],
//     friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
    
    
//     toString() {
//       return `firstName: ${this.firstName}:` +`lastName: ${this.lastName}` +`age: ${this.age}` +`languages: ${this.languages.join('')}` + `friends: ${this.friends.join('+')}`;
//     }
//   };
  

//   console.log(me.toString());
// 2.2

// let input = 5;
// function generateSquares(n) {
//     const result= {}
  
//     for (let i = 1; i <= n; i++) {
//       result[i] = i **2;  
//     }
  
//     return result;
//   
  
// const ismlar = ["Abdulaziz", "Safarmurod", "Orol", "Jahongir"];

// function createLengthObject(arr) {
//     const result = {};
  
    
//     for (let i = 0; i < arr.length; i++) {
//       result[arr[i]] = arr[i].length; 
  
//     return result;
//   }
// }
  
  
//   const s = createLengthObject(ismlar);
//   console.log(s);
// 2.2
// let kalit =  {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
// let prices = Object.values(kalit)
// const narx = prices.reduce((sum, values) => sum + values, 0)
//   let son = Object.keys(kalit)
//   let sum = son.reduce((sum,keys) => sum+ keys.length,0)

//   let narxl =narx + sum 
// console.log(narxl);
// 4.4
// let ismlar = ["Abdulaziz", "Safarmurod", "Orol", "Jahongir"];
// function createLengthObject(arr) {
//    let result = {};
//     for (let i = 0; i < arr.length; i++) {
//       result[arr[i]] = arr[i].length; 
//     }
  
//     return result;
//   }
  
 
//   let sa = createLengthObject(ismlar);
//   console.log(sa);


// for (let i = 0; i<arr.length; i++){
//     if(max === undefined || arr[i]>max) max = arr[i]
//     if (min === undefined || min>arr[i]) min = arr[i]
// }
// console.log(max)
// 3.3
// function getNameMaxMinAge(arr) {
//     let kattYosh = 0
//     let yoshim = 0
//     let kichikYosh = 0
//     let kichiky= 0
//     for(let i = 0; i <arr.length; i++){
//         if(kattYosh === 0 || arr[i].age > kattYosh) {
//           kattYosh= arr[i].age
//           yoshim =  (arr[i].name) 
//         }
//         if(kichikYosh === 0 || arr[i].age < kichikYosh) {
//         kichikYosh= arr[i].age
//         kichiky =  (arr[i].name) 
//         }
//     }


// return {
//    yoshim ,kichiky
//   }
// }

//  let people= [
//     { name: "Abdulaziz", age: 33, isMarried: true},
//     { name: "Erkin", age: 22, isMarried: false },
//     { name: "Temur", age: 34, isMarried: true },
//     { name: "Sardor", age: 20, isMarried: false },
//   ];
//   console.log(getNameMaxMinAge(people))
// 5.5
const products = { "Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000 };
const prices = Object.values(products);
const narx = prices.reduce((sum, price) => sum + price, 0);
console.log(narx);


 











  
  
    
  
  
             
            

