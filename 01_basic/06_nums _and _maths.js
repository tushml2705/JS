// ---------------- Number ----------------
// const score = 100
// console.log(score) // 100

// other way to declare ye uppeer wale se toda diff hai ye type bhi dete hai 

// const balance = new Number(100)
// console.log(balance) // [Number: 100]  ishka ye output hai means ye value ke sath ushka type bhi dega 

// apply other methods
//  console.log(balance.toString().length)  // 3 : phle string m change krega then ushki length dega 
//  console.log(balance.toFixed(2)) // 100.00  decimal ke baad 2 digit tk 00 add kiya 

// const newNumber = 100000000000
// console.log(newNumber.toLocaleString('en-IN')) //1,00,00,00,00,000


// +++++++++++++++++++ Maths +++++++++++++++++++++++++++++
// apply Mathematical logic like absolute value, roundoff, mean , sum , sub , div etcccc,.

// console.log(Math.abs(-0.243)) // 0.243
// console.log(Math.round(24.3)) // 24
// console.log(Math.round(0.243)) // 0
// console.log(Math.sqrt(81)) // 9
// console.log(Math.sqrt(95).toFixed(2)) // 9.75
// console.log(Math.max(9,8,6,8,5)) // 9 
// console.log(Math.min(9,8,6,8,5)) // 5


// hum maths lib ka random method jada use krenege 

// console.log(Math.random())  // give any value between [0 to 1]
// console.log((Math.random()*10)+1) // zero wale case ko ignore krne ke liye 1 add kiys 
// console.log(Math.floor(Math.random()*10)+1) // floor value lega 

// bht baar esha hota hai ki min , max according krna hota hi then keshe krnege 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+min) // ye jo output dega min , max ki range m dega aur 0 wala case remove kr dega 