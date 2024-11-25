let student = {
    fname: "Techie",
    surname: "Teejay",
    dept: "criminology",
    matricNo: "zee007",
    isPresent: false,
    courses: [{courseName: "sql", code: 'sql001'}, {courseName: 'js', code: 'js002'}, {cName: 'git', code: 'git003'}],
    attendClass: ()=>{ return "I am attending class!"}
}

// console.log(student.surname)
// console.log(student.attendClass())

// for(let key in student){
//     console.log(key)
// }
for(let key in student){
    // console.log(key, student[key])
}
/*Write a for...in loop to itrate over an object you have constructed 
and log each key and value to the console.

eg: Key: name, Value: Alice
    Key: age, Value: 20
    Key: course, Value: SQL
    etc...
*/

let keyArray = Object.keys(student)

// console.log(keyArray)
// console.log(keyArray.length)

let valuesArr = Object.values(student)

// console.log(valuesArr[5][0].courseName)

let entriesArr = Object.entries(student)

// console.log(entriesArr[5][1][0])

/*
I. Find the value of the price property and if it is greater than 100, 
discount it by 10%. If that’s not the case, discount it by 7%. 
Update the object with : the new property - discount and the 
corresponding value (7% or 10%) and the new discounted price.

let products = { 
    name: "headphones", 
    price: 100, 
    discount: 0
}
*/
let products = { 
    name: "headphones", 
    price: 100, 
    discount: 0,
    discountedPrice: 100
}

const  setDiscount = (obj) => {
    if(obj.price <=100) {
        obj.discount = 7/100
    }
    else {
        obj.discount = 10/100
    }
        obj.discountValue = Math.round(obj.price * obj.discount)
        obj.discountedPrice = obj.price - obj.discountValue    
        
    return obj
}

// console.log(setDiscount(products))


/*II. Write a second function to check if the product has 'discouted price' property. 
If it has, print "Already discounted by (discount value)". Otherwise, do what you did 
in I above. 

*/

const confirmDiscount = (obj)=> {
    // if(obj.discountedPrice) {
    //     return "Already discounted by " + obj.discount * 100 + "%.";
    // }
    // let objKeys = Object.keys(obj)
    // console.log(objKeys)

    if (Object.keys(obj).includes("discountedPrice")) {
        return "Already discounted by " + Math.round(obj.discount * 100) + "%."
    }
    else {
        return setDiscount(object)
    }
}

// console.log(confirmDiscount(products))
