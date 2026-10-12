// jb do array ke content ko combine krna ho to simple push use nhi krenge bcz usse ek valid output nhi ayega 
// thats why we use concate or spread

const heros = ['h1',"h2","h3"]
const heros2 = ["h4","h5","h6"]

// heros.push(heros2)
// console.log(heros) // [ 'h1', 'h2', 'h3', [ 'h4', 'h5', 'h6' ] ]     output m array ke andr dusri array ay gyi 


//concat
// const all_hero = heros.concat(heros2)
// console.log(all_hero) //[ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ]  ye shi output hai all elements ek hi array m ay gye  


// spread
const all_new_heros = [...heros,...heros2]
// console.log(all_new_heros) // [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ]



// NOTE: Spread operator (...) se multiple arrays ke elements
// ko ek naye array mein combine kar sakte hain.


// ab ishme many arrays hai to hm yhi chaiyenge ki ye ek hi array m ay jye so ,, use flat method
const another_array = [1,2,3,4,[7,8,9],7,[3,6,5,8]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)  //[1, 2, 3, 4, 7,8, 9, 7, 3, 6,5, 8]


// agr man lo hmare pas koi string hai uuse array bnani hai then .....

console.log(Array.from("Tushar")) //[ 'T', 'u', 's', 'h', 'a', 'r' ]

// console.log(Array.from({name:"Tushar"})) 
// intresting concept yh output m empty array[] print hogi bcz 
// jb key:value ki baat hogi then hme btana hota hai ki array kish ka bnana hai key or value 


// agr kuch  values diya ho to hmm ushe nhi array m convert kr sakte hai
let s1 = 100
let s2 = 200
let s3 = 300
let s4 = 400
let s5 = 500

console.log(Array.of(s1,s2,s3,s4,s5)) // [ 100, 200, 300, 400, 500 ]

