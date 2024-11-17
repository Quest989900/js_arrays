/*
- variables
- strings and its methods (toUppercase, includes, concat, chartAt, 
    indexOf, replace, trim, substring, slice, split,endsWith,charCodeAt, repeat, at)
- functions
- loops: for and while
- arrays and its methods (splice, slice, join, push, pop, shift, unshift, flat, 
    concat, includes, indexOf,forEach, map, filter, find, sort, reduce, reverse, at)
- flow control: if-else statements
- arrow functions
- template literal
- ternary operators

flat, loops, arrow function, template literal, forEach

LEETCODE     OR    HACKERANK     CODEWAR
*/

// for(let i = 0; i < arr.length; i++) {
// }

let firstname = 'numan'
let surname = 'Adepoju'
// console.log("I am a boy. my name is " + firstname + " " + surname)
// console.log(`I am a boy. My name is ${firstname} ${surname}.`)

let twoSum = function(nums, target) {
    let output = []
    for(let i = 0; i < nums.length; i++) {
        for(j=i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                output.push(i,j)
                break
            }else {
                continue
            }
        }
    }
        return output
    }

    console.log(twoSum([3, 3, -3, -9 ], -12))