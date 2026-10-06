// dekhte hai keshe variable m consant declare krte hai

const accountId = 1222
let accountEmail = "tushar007@gmail.com"
var accountPass = "tushar@98"
accountCity = "Bulandshahr"

// hmne yha const , let , var use kiya hia alg alg place pr dekhtte hai kishme kya difference hai 

//  accountId = 1444   
// ye error de rha hai jb hmm accountId ki value change kr rhe hai means ...
// jha const likha hoga bha hm value change nhi kar skate 

accountEmail = "duhan@gmail.com"
accountPass = "tush@98"
accountCity = "Meerut"
// accountEmail ko update krne ke baad run krne pr koi error nhi ay rha ishka means JHA let,var use hoga ushki value ko hmm update kr sakte hai 

// console.log(accountId)
// console.log(accountEmail)

// Agr hme ek sath multiple things display krni ho tb 

console.table([accountEmail,accountId,accountPass,accountCity])

// Note---> jb constamt use krna ho tn use krnege "const" keyword
//          if variable then use let , Var keyword 
// var ki main problem: ye block-scoped nahi hota,
// isliye block ke andar kiya gaya change bahar bhi affect kar sakta hai.
// let aur const block-scoped hote hain, isliye scope zyada safe aur predictable hota hai.

var count = 0;

if (true) {
    var count = 10;
}


console.log(count); // output: 10   Yahan if ke andar wala count same variable ko change kar raha hai, kyunki var block-scoped nahi hai.(block ke bahar bhi affect kar sakta hai)


// ..............................................................

let count = 0;

if (true) {
    let count = 10;
}

console.log(count); // output: 0   Yahan if ke andar ka count alag variable hai, kyunki let block-scoped hai.(block { } tak limited rheta hai)



// NOT USE var