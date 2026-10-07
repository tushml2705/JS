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
// console.log(inBoolean) // output: false


//........ NOTE ............

// 1 -> true ; 0 -> false
// "" -> false  (for empty string )
// "something" -> true









// ******************operation**********************************

// 1. Basic operation

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2%2)
// console.log(2**2)
// console.log(2//2)

// same for add 2 or more string 

let str1 = "Hello "
let str2 = "Guys"
let str3 = str1 + str2
// console.log(str3)           // output : Hello Guys  

// yha tk to sb thik hai .....tb kya hoga jb ek string aur ek number aapas m add ho lets try..........

let num1 = 2
let str = "2"
let combine = num1+str
// console.log(combine) // output aya 22 

// console.log("1"+2)         // 12
// console.log(1+"2")        // 12
// console.log("1"+"2")      // 12
// console.log("1"+2+2)     // 122
// console.log(1+2+"2")    // 32  abhi tk sb string ki thre treat ho rhe the pr ishme suru ke add ho gye fir string ki thre treat hue bcz(starting with a number and second is also number thats why)
// console.log(1+"2"+2)    //122






// ************ prefix or postfix incremental********
//x++    ,  ++x

let x1 = 2
const y1=x1++  // phle pass kro y1  m x1 ko , then increase x1
// console.log(x1,y1) // 3 , 2 (x ek se increase hua , but y same rha )

let x2 = 2
const y2=++x2   // phle increase kro x2 ko  then updated x2 ko pass kro  y2 m 
console.log(x2,y2) // 3 , 3 (ishme dono increase hue )



