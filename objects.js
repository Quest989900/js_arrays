let name = 'faidat'
let age = 13
let class_ = 'front-end'

let faidatData = ["faidat", 13, 'frontend']

faidatData[3]= 75000000

// console.log(faidatData)

// let personObj = {
//     fname : 'Mr.ibro',
//     surname: 'Musty',    
//     age : 13,
//     class_ : 'front-end',
//     likes: ['eating', 'coding', 'pingpong'],
//     friends: [{name: 'lutana', age: 11, stack: 'backend'},
//     {name: '2-dots', age: 101, stack: 'fullstack'},],
//     address:{
//         no: 9,
//         street: 'aduke',
//         city: "lagos"
//     },
//     isMale: true,
//     laugh:()=>(`Aaaaaahhhh! 😂`)
// }
// let fullname = personObj.fname + ' ' + personObj.surname
// console.log(fullname)
// console.log(personObj.name)
// console.log(personObj.friends[0].stack.charAt(0).toUpperCase()+personObj.friends[0].stack.slice(1))
// console.log(personObj.laugh())


var searchInsert = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            return i
        }else if(nums[i]>target){
            return i
            break
        }else if(target>nums[i] && nums[0]<=nums[nums.length-1] && nums[nums.length-1]<target ){
            nums.push(target)
            return nums.indexOf(target)
        }
    }
};

// console.log(searchInsert([1],2))



let person = {
    name: 'John',
    likes: ['eating', 'coding', 'pingpong-ing', 'sleeping', 'chatting'],
    friends: [
        {                      
         name: 'lutana',    //person.friends[0].friends[1].likes[1][1]   -waj/ibr/faidat
         age: 11,           // xxxperson.friends[0].friends[1].likes[1].game  - arasi/sal/alh/2dot
         stack: 'backend',  // person.friends[0].friends[1].likes[1][1]   - gov
         likes: [['skating', 'bowling'], ['running', 'jogging'],['chess', 'checkers']],
         friends: [          // xxxperson.friends[2].likes[1][1].game  - femi
            {                  // xxxperson.friends[0].friends[1].likes.game  - musty
                name: 'lutana123', 
                age: 111, 
                stack: 'backend',
                likes: [['skating123', 'bowling123'], ['running123', 'jogging123'],['chess123', 'checkers123']]
            },
            {
                name: 'lutana234', 
                age: 17, 
                stack: 'backend',
                likes: [['skating', 'bowling'], ['running', {game: 'sudoku', level: 'hard'},'jogging'],['chess', 'checkers']]
            },
            {
                name: 'lutana345', 
                age: 110, 
                stack: 'backend',
                likes: [['skating345', 'bowling345'], ['running345', 'jogging345'],['chess345', 'checkers']]
            }
            ]
        },
        {
         name: '2-dots', 
         age: 101, 
         hobbies: [['skatinglet', 'bowlinglet'], ['sprunning', 'logging'],['scrabble', 'draft']],
         mates: [{},{}]
         },
    ]

}

person.height = 5.5

// console.log(Object.values(person.friends[0]))






// console.log(person)



let obj = {
    a: 1,
    b: 2,
    c: 5
}

// let customersList = []
let user = {}
user.firstname = 'maymauha',
user.surname = 'adeyemi',
user.email = 'meme@something.com',
user.phone = '08023457892'
// customersList.push(user)

// console.log(customersList)



let customersList = [
    {
        firstname: 'John',
        surname: 'Doe',
        email: 'john@example.com',
        phone: '123',
        accNo: '001234567',
        accBalance: 100000

    }, 
    {
        firstname: 'Maymunah',
        surname: 'Adeyemi',
        email: 'meme@example.com',
        phone: '12334567',
        accBalance: 10000001
    }, 
    {
        firstname: 'Femi',
        surname: 'Adgoke',
        email: 'femi@example.com',
        phone: '1233344679',
        accBalance: 7000000
    }
]
let customer= customersList.find( (el,i,arr)=> el.email === 'femi@example.com')
Object.freeze(customer)

customersList[2].accBalance = 5000

console.log(customersList[2].accBalance)



let account = {
    name: 'zulfah',
    type: 'current',
    number: 1234567890,
    balance: 234567890,
    isLinkedToATM: true,
}

let accountKeys = Object.keys(account)

accountKeys[1] = accountKeys[1].toUpperCase()

// console.log(accountKeys)


let obj2 = {
    a: 2,
    b: 6, 
    c: 9
}


// console.log(obj2)
// console.log(Object.keys(obj2)[1])

// ['a','b', 'c'][1]

//OBJECT VALUE          EURNS AN ARAY OF THE VALUES ON THE OBJECT PROPERTIES
let objValues= Object.values(obj2)

// console.log(objValues)

let accValues = Object.values(account)

// console.log(accValues)

//OBJECT ENTRIES    RETURNS AN ARRAY CONTAINING EACH KEY-VALUE PAIR, EACH IN THEIR OWN ARRAY

let accEntries = Object.entries(account)
// console.log(accEntries)

// OBJECT FREEZE

let obj3 = {
    a: 700,
    b: 500,
    c: 100
}

obj3.a = 3000

// console.log(obj3)

Object.freeze(obj3)

obj3.a = 1000

// console.log(obj3)

// let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]


let plusOne = function(digits) {
    let digitsplus1 = (BigInt(digits.join('')) + BigInt(1))       // .toString().split('').map( (el)=> Number(el))
    console.log(digitsplus1)
    let outputStrArr = digitsplus1.toString().split('')
    let output = outputStrArr.map( (el)=> Number(el))
    return output
};

console.log(plusOne([6,1,4,5,3,9,0,1,0,1,9,5,1,8,6,7,0,5,5,4,3]))


// let obj3_ = {a:1, b:2, c:3, d:4, e:5, f:6,}
// Object.freeze(obj3_)
// obj3_.d = 7
// obj3_.g = 11
// let obj4 = Object.create(obj3_)
// obj4.h = 9

// console.log(obj3_)


let anObj = {
    name: 'foo',
    age: 34,
    height: 34.0,
}

anObj.email = 'foo@example.com'
anObj.height = 6.40

Object.freeze(anObj)
// Object.seal(anObj)

anObj.phone = '00944556123'
anObj.age = 13

// console.log(anObj)

// console.log(Object.isFrozen(anObj))
// console.log(Object.isSealed(anObj))



// let obj = {
//     isConfigurable: true,
//     isWritable: true,
// }

// let person1 = {
//     username: 'Johnny',
//     email: 'John@example.com',
//     phone: '090876543123'

// }

let person2 = {
    firstname: 'John'
}

let person3 = {}

// Object.assign(target, source1, source2,....sourceN)
// Object.assign(person2, person1)
// Object.assign(person3, person1)

// console.log(person1)

let person4 = {
    address: '11,kowope str. ',
    lga: 'kosofe'
}

let person5 = {
    city: 'Ikeja',
    state: 'Lagos'
}

Object.assign(person3, person4, person5)
// console.log(person3)

let person6 = Object.create(person3)
person6.country = "Nig"
// console.log(person6)
// console.log(person6.username.add)
// console.log(Object.keys(person6))


let obj5 = {
    a: 1,
    b: 2,
}

// Object.freeze(obj5)
// obj5.c = 3
// obj5.b = 4
// console.log(obj5)

Object.seal(obj5)
obj5.d = 7
obj5.b = 8
// console.log(obj5)

//FOR...IN    === WHEN YOU NEED TO LOOP THROUGH AN OBJECT
let person1 = {
    username: 'Johnny',
    email: 'John@example.com',
    phone: '090876543123'

}
// console.log(person1.username)
// console.log(person1['username'])

for(let key in person1){
    // console.log(person1[key])
}


/* Quick practice
1. make an object with a few properties
2. Use the necessary methods to get the keys and values of the object
3. Use the necessary method to copy the properties of your obj into another object
4. Use another object static method to create a new object from your obj
5. Loop through the properties of the object to get the values that are longer than five
characters.
6. Use a method you choose to prevent writing into your object.
7. Write a function to determine how many properties an object has... 

*/
let obj7= {}
// console.log(person1.hasOwnProperty('name'))
// console.log(Object.getOwnPropertyNames(person3))
// Object.defineProperty(obj7, 'name', {
//     value: 'Mutunda',
//     writable: false,
//     configurable: false
// })
// obj7.surname = "Opoola"
// console.log(obj7.name)

/*
I. Write a function to find the value of the price property and if it is greater than 100, 
discount it by 10%. If that’s not the case, discount it by 7%. 
Update the object with : the new property - discount and the 
corresponding value (7% or 10%) and the new discounted price.

Eg:
let product = { 
    name: "headphones",    
    price: 100    
}

II. Write a second function to check if the product has 'discouted price' property. 
If it has, print "Already discounted by (discount value)". Otherwise, do what you did 
in I above. 
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

const merge = function(nums1, m, nums2, n) {
    //  for (i = 0; i < arr.length; i++)
    //  for (i = arr.length-1; i > 0; i--)
        for(i=m-1, j=n-1, k=m+n-1; j>=0; k--){
        if(i >= 0 && nums1[i] > nums2[j]){
            nums1[k] = nums1[i]
            i--
        }else {
            nums1[k] = nums2[j]
            j--
        }
        
    }
    return nums1
// [1,2,3,0,0,0]   [2,5,6]






    
    
    // let i = m - 1;
    // let j = n - 1;
    // let k = m + n - 1;
    
    // while (j >= 0) {
    //     if (i >= 0 && nums1[i] > nums2[j]) {
    //         nums1[k--] = nums1[i--];
    //     } else {
    //         nums1[k--] = nums2[j--];
    //     }
    // }

};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))