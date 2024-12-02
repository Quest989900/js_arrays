let newStorage = ['house','car','bag', 67, true, [], {},6,4,5,5,6,7,8,99,0]

// accessing values in an array
let item1 = newStorage[0]
let item3 = newStorage[2]
let item5 = newStorage[4]
let itemLast = newStorage[newStorage.length - 1]

// console.log(itemLast)

//property of an array - only 1
let arrLength = newStorage.length
// console.log(arrLength)


//methods of an array
let newStorage2 = ['house','car','bag', 67, true, [], {}]

let item1Index = newStorage2.indexOf('house')
let item3Index = newStorage2.indexOf('car')
let itemIndex = newStorage2.indexOf('Car')
// console.log(item3Index)

newStorage2.push([2,'two'])
// console.log(newStorage2)
newStorage2[7].push([2.1,'two.one'])
// console.log(newStorage2[7][2][0])

newStorage2.unshift(true, 1)
// console.log(newStorage2)

let itemPopped = newStorage2.pop()
newStorage2.pop()
// console.log(newStorage2)
// console.log(itemPopped)


let itemShifted = newStorage2.shift()
// console.log(newStorage2)
// console.log(itemShifted)

let isIncluded = newStorage2.includes('car')
let isIncluded2 = newStorage2.includes('cart')
// console.log(isIncluded)

// newStorage2.slice(startIndex, endIndex+1)
let itemSliced = newStorage2.slice(0,3)
let itemSliced2 = newStorage2.slice(0)
let itemSliced3 = newStorage2.slice(3)
// console.log(itemSliced)
// console.log(newStorage2)

// newStorage2.splice(starrtIndex, howManyToRemove, itemsToAdd)
let itemSpliced = newStorage2.splice(2,1)
let itemSpliced2 = newStorage2.splice(2,1, 'bicycle')
// console.log(itemSpliced)
console.log(newStorage2)
newStorage2.splice(3,0,'cart')
console.log(newStorage2)
// let itemSpliced3 = newStorage2.toSpliced(3,2)
// console.log(itemSpliced3)
// console.log(newStorage2)

newStorage2[3] = 'chart'
console.log(newStorage2)

newStorage2
// .forEach()
// .map()
// .filter()
// .find()
// .reduce()
// .sort()
