//  comparision 
// console.log(2==1);   // false
// console.log(2 !=1); // true

// comparision between different type 
// console.log("2">1);
// console.log('02'<1);

// null 
// console.log(null > 0)  //false
// console.log(null == 0) //false
// console.log(null >= 0) // true why?---->

// reason ye hai ki equality check (==) and comparision > , < , => , =< etc work differently
// comaprision convert null into number , then treating AS A  Zero(0). thats why null >= 0 is true and null > 0 is false 


// === strict check   ---> check value strictly and data type also

console.log("2"===2); // false dega bcz datatype hi alg hai
