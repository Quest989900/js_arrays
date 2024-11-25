 const add = (a,b, ...more)=> {
    let res = a+b
    more.forEach((el)=>res+=el)
    return res
}


// console.log(sum(3,5,7,7))


const multiply = (a,b, ...more)=> {
    let res = a*b
    more.forEach((el)=>res*=el)
    return res
}






module.exports = {add, multiply}

// console.log(module)