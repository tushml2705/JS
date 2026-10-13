// create object 

// const study = new Object()

const study = {}    // ye hmara object hai ab ishme key : value dena start krnege 
study.id = "123xyz"
study.name = "xyz"
study.email = "duh@gmail.com"
study.pass = true


// console.log(study)



// yha hmm neasted object bhi bna sake hai 

const regularUser ={
    email:"xyz@gmail.com",
    fullname:{
        userfullname:{
            firstname : "Tushar",
            lastname:"Duhan"
        }
    }
}


// console.log(regularUser)  

//output:{
//   email: 'xyz@gmail.com',
//   fullname: { userfullname: { firstname: 'Tushar', lastname: 'Duhan' } }
// }

// keshe neasted object ke content ko accese krte hai?

// console.log(regularUser.fullname) //   { userfullname: { firstname: 'Tushar', lastname: 'Duhan' } }

// console.log(regularUser.fullname.userfullname)   // { firstname: 'Tushar', lastname: 'Duhan' }

// console.log(regularUser.fullname.userfullname.firstname) // Tushar



// Agar hme array jeshe hi agr many objects ko combine krna ho then......

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

// different ways to combine 
// const obj4 = {obj1,obj2}  koi jada benifits nhi 

const obj4 = Object.assign({},obj1,obj2,obj3) // ishme {} treat as a target and obj1, obj2,obj3 are source and these sources get store in taget{}
console.log(obj4)  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// BEST WAY ----SPREAD 
//NOTE: Spread operator (...) se multiple OBJECT  ke elements..
// ko ek naye OBJECT  mein combine kar sakte hain.

const finalObj = {... obj1, ...obj2, ... obj3}
console.log(finalObj)    // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


// Array ke ander bht sare objects hai to kesje deal krenge 
// main motive ye hia ki object array datatype m change ho jate hai jisse hm easily array ke operation , loops etc use kr sakte hai directly

const user =[
    { 
        id:1,
        email:"us@gmail.com"


    },
    {
        id : 2,
        email:"we@gmail.com"
    }
]

console.log(user[0].email)
console.log(study)  // { id: '123xyz', name: 'xyz', email: 'duh@gmail.com', pass: true }

// other way 
console.log(Object.keys(study))  //  ye hme ssari keys de dega of study object
                                // [ 'id', 'name', 'email', 'pass' ]  Array form m 

console.log(Object.values(study))  // give all vaules of an object
console.log(Object.entries(study)) 
/*output 
[
  [ 'id', '123xyz' ],
  [ 'name', 'xyz' ],
  [ 'email', 'duh@gmail.com' ],
  [ 'pass', true ]
]

*/