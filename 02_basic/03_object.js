// oblect ko declare krne ke 2 ways hai , phla literal ki thre and second one is constructor 
// jb object ko constructor se declare krte hai then called ..singleton

// object = {}

// const Jsuser = {
//     name:"Tushar",
//     "full_name" : "Tushar Duhan",
//     age:21,
//     location:"Meerut",
//     email : "tuhsar@gmail.com",

// }

// 2 ways hai acces krne ke liye 

// console.log(Jsuser.email)

// jeshe man lo full_name ki key string formate m hai to jeshe upper acces kiya ishke case m eshe acces nhi hoga so use .....

// console.log(Jsuser["full_name"])

// symbol ko define krke use key ki thre use krna aur ushka type bi symbol hi hona chiye 


const mySymbole = Symbol("mykey")

const Jsuser = {
    name:"Tushar",
    "full_name" : "Tushar Duhan",
    [mySymbole]:"mykey",
    age:21,
    location:"Meerut",
    email : "tuhsar@gmail.com",

}

// console.log(Jsuser[mySymbole])

// value change krni ho to 

Jsuser.email = "tusharduhan@gmail.com"

// man lo hmare  object m koi changes na ho aur kre then use freeze()
// Object.freeze(Jsuser)
Jsuser.email = "duhan@gmail.com" 

console.log(Jsuser)

// object m function 

Jsuser.greeting = function(){
    console.log("hello , Tushar what are you doing right now !")
}
console.log(Jsuser.greeting())

// jb ame object m kuch access krna ho to use "This" keywprd
Jsuser.greeting2 = function(){
    console.log(`hello Boy , ${this.name},you are  ${this.age} years old`)
}
console.log(Jsuser.greeting2())
