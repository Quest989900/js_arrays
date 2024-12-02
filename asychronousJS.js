
// let result= fetch("https://api.coindesk.com/v1/bpi/currentprice1.json")
// console.log(result)
// result.then((res)=>{
//     let resParsed = res.json()
//     // console.log(resParsed)
//     return resParsed
// })
// .then((data)=>{
//     console.log(data.bpi.USD.rate)
// })
// .catch((err)=>{
//     console.log('I got hereeeeeeeee:', err)
// })


// ASYNC.........AWAIT

const getCoinRates = async ()=> {
    try {
        let result = await fetch("https://api.coindesk.com/v1/bpi/currentprice1.json")
        let data = await result.json()
        console.log(data.bpi.USD.rate)
    }catch(err) {
        console.log('I got hereeeeeeeee:', err)
    }
    
}

// getCoinRates()



const getKhaalid = async ()=>{
    try {
        let res = await fetch("https://api.coindesk.com/v1/bpi/currentpric1e.json")
        let data = await res.json()
        console.log(data.bpi.USD.rate)
        
    }catch(err){
        // console.log('This is errooooor!', err.message)
        
    }
}

getKhaalid()



let outCome = fetch ("https://api.coindesk.com/v1/bpi/currentprice.json")
 outCome.then((response) => {
    let result = response.json()
    return result
 })
 .then((ibro)=>{
    // console.log(ibro.bpi.GBP.rate)
 })
 .catch((err)=>{
    console.log(err)
 })
//  console.log(outCome)



let inCome = async (res,rej)=>{
try{
    
    let result =await fetch ("https://api.coindesk.com/v1/bpi/currentprice.json")
    let answer =await result.json()
    let data = answer.bpi.USD.code
    return data
}
catch(err){
    console.log(err)
}
}

(async () => {
 console.log(await inCome())
})()










// 'https://data.fixer.io/api/latest?access_key=d78782b1f9fd8844077ef50d3ae21a38'


// "https://api.coindesk.com/v1/bpi/currentprice.json"





// const apiUrl = 'https://api-football-v1.p.rapidapi.com/v2/odds/league/865927/bookmaker/5?page=2'


// const options = {
// 	method: 'POST',
// 	headers: {
// 		'x-rapidapi-key': 'a2cad8015emshd80ef224784c310p1fd101jsn98d74e332566',
// 		'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
// 		'Accept-Encoding': 'application/gzip'
// 	},
// 	// body: data
// };
// const url = 'https://data.fixer.io/api/latest?access_key=d78782b1f9fd8844077ef50d3ae21a38&symbols=NGN,GBP,USD';

// let response = fetch(url)

// response.then((res)=> {
//     // console.log(res)
//     return res.json()
// })
// .then((data)=>{
//     console.log(data)
// })

// console.log("aaaaa")


