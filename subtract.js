const subtract = (a,b, ...more)=> {
    let res = a-b
    more.forEach(el=>res-=el)
    return res    
}





module.exports = subtract