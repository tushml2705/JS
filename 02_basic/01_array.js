// Array = [] 
//JavaScript arrays are resizable and can contain a mix of different data types.
// first element of an array is at index 0
// sallow copy -----> age refrence value m change krenge to original value m bhi change hoga

const myArr = [0,1,2,3,4,5,6,"tushar"]
// console.log(myArr)

const myArr2 = new Array("kajukatli","rashmali")
// console.log(myArr2)


// Array methods

// myArr2.push(1)  // Appends new elements to the end of an array
// myArr2.push(2)
// myArr2.push(3)
// console.log(myArr2) //[ 'kajukatli', 'rashmali', 1, 2, 3 ]
// myArr2.pop()   // Removes the last element from an array
// console.log(myArr2) //[ 'kajukatli', 'rashmali', 1, 2 ]

// console.log(myArr2) //[ 'kajukatli', 'rashmali' ]
// myArr2.unshift(1) //Elements to insert at the start of the array.(mtlb sari elements aghe ki trf shift ho jyenge)
// console.log(myArr2) //[ 1, 'kajukatli', 'rashmali' ]
                     
// myArr2.shift() //Removes the first element from an array and returns it.
// console.log(myArr2) //[ 'kajukatli', 'rashmali' ]  

// console.log(myArr2.includes("rasmali"))
// console.log(myArr2.indexOf("rashmali"))

// const newArr = myArr2.join() //Adds all the elements of an array into a string
// console.log(myArr2)  //output : [ 'kajukatli', 'rashmali' ]   ye array hai 
// console.log(newArr)  //output : kajukatli,rashmali     ye yha string m ay gya 




// slice , splice

console.log("A",myArr)   // output: A [ 0, 1, 2, 3, 4, 5, 6, 'tushar' ]

const myN1=myArr.slice(1,4)
console.log(myN1)       // output:[ 1, 2, 3 ]
console.log("B",myArr)  // output: after apply slice on this array --> B [ 0, 1, 2, 3, 4, 5, 6, 'tushar' ]

const myN2=myArr.splice(1,4)    // ye original array ko hi manipulate kr deta haai jish portion pr splice(1,4)apply hoga bha  tk ke elements ko aaray se alg kr deta hai
console.log(myN2)          // output:[ 1, 2, 3, 4 ]
console.log("C",myArr)     // output:C [ 0, 5, 6, 'tushar' ]  original array after apply splice --> ishme manipulation hua aarray m 


