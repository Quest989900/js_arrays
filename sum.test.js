// const {test, expect, toBe} = require('jest'); not necessary for jest
const subtract = require('./subtract.js')
// const {add, multiply} = require('./sum.js')  //obj destructuring
// const sum_ = require('./sum.js')
// const multiply_ = require('./sum.js')

// // const sum = sum_.sum
// // const multiply = multiply_.multiply

// test('sum of 3, 4 should be 7', ()=> {
//     expect(add(3,4)).toBe(7)
// })

// test("sum of -1, -1 should be -2", ()=> {
//     expect(add(-1, -1)).toBe(-2)
// })

// //unit test for mutiply()
// test('product of 0 and 2 should be 0', ()=> {
//     expect(multiply(0,2)).toBe(0)
// })

// test('product of 1 and 2 should be 2', ()=> {
//     expect(multiply(1,2)).toBe(2)
// })

// test('product of 5 and 2 should be 10', ()=> {
//     expect(multiply(5,2)).toBe(10)
// })
// const jest = require('jest');
//unit test for subtract
test('subtract 0 from 0 should be 0', ()=> {
    expect(subtract(0,0)).toBe(0)
})  
test('subtract -6 from -2 should be 4', ()=> {
    expect(subtract(-2,-6)).toBe(4)
})
test('subtract -2 from 6 should be 8', ()=> {
    expect(subtract(6,-2)).toBe(8)
})
test('subtract 5 from 11 should be 6', ()=> {
    expect(subtract(11,5)).toBe(6)
})



// .expect()
// .toBe()
// .describe()
// .notToBe()