
let result= fetch("https://api.coindesk.com/v1/bpi/currentprice.json")

result.then((res)=>{
    let resParsed = res.json()
    // console.log(resParsed)
    return resParsed
})
.then((data)=>{
    console.log(data.bpi.USD.rate)
})
.catch((err)=>{
    console.log(err)
})




console.log("AAAAAA")   














// const apiUrl = 'https://api-football-v1.p.rapidapi.com/v2/odds/league/865927/bookmaker/5?page=2'

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'a2cad8015emshd80ef224784c310p1fd101jsn98d74e332566',
// 		'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
// 	}
// };

// let response = fetch(apiUrl, options)

// response.then((res)=> {
//     // console.log(res)
//     return res.json()
// })
// .then((data)=>{
//     console.log(data)
// })

// console.log("aaaaa")