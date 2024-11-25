//ARRAY DESTRUCTURING

// let arr1 = ['sola','bode', 'bola', 'jide', 'femi']

// let name1 = arr1[0]
// console.log(name1)

// let name2 = arr1[1]
// console.log(name2)

// let name3 = arr1[2]
// console.log(name3)

// let name4 = arr1[3]
// console.log(name4)

// let name5 = arr1[4]
// console.log(name5)   arr.forEach( (index)=> )

let arr1 = ['sola','bode', 'bola', 'jide', 'femi']

// let [name1,name2] = arr1
let [um,,,ibrahim] = arr1

// console.log(um)


//THE SPREAD OPERATOR
//write a function that returns the max number in any array of nums.

let arr4 = [23,4,67,2,334,6,34,8,90, 65767]

const getMax = (arr)=> {
    return Math.max(...arr)
    }
    
// console.log(getMax(arr4))


let arr5 = ['lilly', 'tulip','hibiscus', 'rose', 'marigold']

let arr6 = [...arr5, 2,5, ...arr5]     

// console.log(arr6)

function sum(x, y, z) {
  return x + y + z;
}


// console.log(sum(...[5,8,3]))

let animals = ['cat','horse','camel','fish']
let class_abu = [...animals]
// console.log(class_abu)


// let[name1,name2,name3,name4] =animals

// console.log(name1)

let arr = [1,2,3,5,6,7,8,90]
// let [a,b,...result] = arr
// console.log(result)

function add(...more){
   let sum = 0
   more.forEach((el)=> sum+=el)
    return sum
    
    
    }
    // console.log(add(2,3,5))
    
// if(3+2 === 5){
//     console.log("yes!!!")
// }else {
//     console.log("nooo!!!")
// }
// 3 + 2 === 0 ? console.log("yes!!!"): console.log("nooo!!!")


// let smth = 1
let smth2 = 2 && 1 && 'something' && 0
// console.log(smth2)




//OBJECT DE-STRUCTURING

let arr7 = [1,3,5,7,9]

let [num1, num2,,num5] = arr7


// let obj1 = {"a": "a", "b": "b", "c": "c" } === {"a","b", "c"}
// let femi= {username: "femo", email: "femolala@y.com", age: 99}

// let femisUsername = femi.username
// let femisEmail = femi.email
// let femisAge = femi.age

// let { email } = femi
// console.log(email)


// let femi= {username: "femo", email: "femolala@y.com", age: 99}
// let obj2 = {...femi}

// console.log(obj2)




// let prop1 = obj1.a
// let prop2 = obj1.b
// let prop3 = obj1.c


// let {a,b,d} = obj1

// console.log(d)




let str1 = null
let str2 = str1 ?? 'anything'
// console.log(str2)

