// let score = "4"

// console.log(typeof score);
// // console.log(typeof(score));

// // man lo hme ye score  number type m chiye then.....
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // output : number
// console.log(valueInNumber); // output : 4


// what if score = "4abc"
// let Score = "4abc"

// console.log(typeof Score);

// // man lo hme ye score  number type m chiye then.....
// let ValueInNumber = Number(Score)
// console.log(typeof ValueInNumber); // output : number
// console.log(ValueInNumber); // output : NaN(not a number) aya ye bhi ek alg type hai 



// what if score = null

// let score = null

// console.log(typeof score);

// // man lo hme ye score  number type m chiye then.....
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // output : number
// console.log(valueInNumber); // output : 0  aya bcz null empty hai   



//................. NOTE .....................
// JB hm ye krte hai to ye observation miliiii

// "4" => 4   
// "4abc" => NaN(not a number --> numper+alpha ishliye ye convert hi nhi ho paya )
// true => 1 ; false=> 0




// reverse conversion
// letisNotPass=0
// let isPass = 1

// let inBoolean = Boolean(isPass)
// console.log(typeof inBoolean)
// console.log(inBoolean) // output : true




//what if isPass = "" (empty string)

let isPass = ""

let inBoolean = Boolean(isPass)
// console.log(typeof inBoolean)
console.log(inBoolean) // output: false


//........ NOTE ............

// 1 -> true ; 0 -> false
// "" -> false  (for empty string )
// "something" -> true