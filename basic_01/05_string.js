// basic string declare
const name = "Tushar"
const age = 21

// console.log(name + " and Age is" + age) // ye to basic hai pr hme ye todi acchi command line use krni hai ishi same kaam ke liye

// console.log(`hello my name is ${name} and my age is ${age}`); // ye jada confortable and readable hai aur ishme hm alg se ek time pr kuch method lg sakte hai
// console.log(`hello my name is ${name.toUpperCase()} and my age is ${age}`)  // jeshe name ko upper case m change kr diya 


// method 2 to decalar string aur ye hme bht sre function provide krta hi like string ki lenght, indax , char position etc

// const foodName = new String("Rashmali")

// console.log(foodName.length)
// console.log(foodName[0])
// console.log(foodName.toUpperCase())
// console.log(foodName.charAt(2)) // output s  ye btyega ki kish position pr konsa char hoga 
// console.log(foodName.indexOf('m')) // output 4  ye btyega ki kish char ki position kya hai 

// const newString = foodName.substring(0,5) // output: Rashm  (aur indexing 0 se start hoti hai )
// console.log(newString)                             //01234  ---> hme end 5 value di pr ishne 4 tk hi output diya means 5 exclude hai 



// const newFood = new String("Kaju-katli")

// const anotherString = newFood.slice(-10,5)
// console.log(anotherString)  // Kaju-

// const anotherString = newFood.split("-")
// console.log(anotherString) //[ 'Kaju', 'katli' ]

const newFood = "    Kaju-katli    " // jeshe yha bht space hai dono trf to hm nhi chate ki jada space ho db m store krna (white space pr hi kaam krta hai ye seerf)
console.log(newFood)        //output:      Kaju-katli    
console.log(newFood.trim())  //output: Kaju-katli

// Replce 
const url = "https://github.com/tush%20ml2705"
console.log(url)                   //output: https://github.com/tush%20ml2705 (page not found )
console.log(url.replace("%20","")) // output: https://github.com/tushml2705   (working)

// agr kuch check krna ho ki present hai ki nhi 

console.log(url.includes("ml")) // true