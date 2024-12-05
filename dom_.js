// //DOCUMENT OBJECT MODEL   (DOM)

// const amountInput = document.getElementById('amount')
// const heading = document.querySelector('h1')
// console.log(heading.innerHTML)
// console.log(heading.innerText)
// console.log(heading.textContent)  1eur == 1.050337

// console.log(heading.style.color)

// heading.addEventListener('click', ()=>{
//     heading.style.color = 'yellow'
// })

// const firstInput = document.getElementById('amount')
// const secondInput = document.getElementsByClassName('form-items')[1]
// const convertBtn = document.getElementsByTagName('input')[2]
// const resetBtn = document.querySelectorAll('#reset')[0]
// const outputScreen = document.querySelector('#output-side > div')

// // const firstValue = Number(firstInput.value)
// // const secondValue = Number(secondInput.value)
// // console.log(firstValue, secondValue)
// // const screenValue = outputScreen.value
// const add = (a, b)=> {
//     let sum = a + b
//     return sum
// }

// convertBtn.addEventListener('click', (e)=>{
//     e.preventDefault()
//     console.log(e)
//     let firstValue = Number(firstInput.value)
//     let secondValue = Number(secondInput.value)    
//     let res = add(firstValue, secondValue)
//     outputScreen.innerText = res
//     outputScreen.style.fontSize = "30px"
//     outputScreen.style.color = 'green'
//     // console.log(res)
// } )

// resetBtn.addEventListener( 'click',()=> { 
// })


// const inputs = document.getElementsByTagName('input')
// // console.log(inputs)
// const formItems = document.getElementsByClassName('form-items')
// formItems[3]

// const heading = document.querySelector('h1')
// // console.log(document.querySelectorAll('label'))

// heading.innerText = 'Currency Converter'



const amountInput = document.getElementById('amount')
const yourCurrency = document.getElementById('y-currency')
const targetCurrency = document.getElementById('t-currency')
const convertButton = document.querySelector('#convert')
const resetButton = document.querySelector('#reset')
const outputDisplay = document.querySelector('#output-side div')
// const h1 = document.querySelector('h1')


/*
const currencyConverter = async(targetCurr, sourceCurr )=> {
    try {
        targetCurr = targetCurr.toUpperCase()
        let url = 'https://data.fixer.io/api/latest?access_key=d4d0a18c50eee394baec75bf06d10199&base='+ targetCurr
        console.log(url)
        let response = await fetch(url)
        let data = await response.json()
        // console.log(data.rates[currencyOfChoice].toFixed(2))
        return data.rates[sourceCurr]
}
catch (err) {
    console.log('errooooor:',err)
}
}



convertButton.addEventListener('click', async(e)=> {
    e.preventDefault()
    let amount = Number(amountInput.value)
    let currency = yourCurrency.value.toUpperCase()
    let target = targetCurrency.value.toUpperCase()
    let res = await currencyConverter(target,currency)
    let exchange = amount/res

    outputDisplay.innerText = '€' + exchange
})

*/

// https://data.fixer.io/api/latest?access_key=API_KEY&base=USD


const currencyConverter = async()=> {
    try {
        // targetCurr = targetCurr.toUpperCase()
        let url = 'https://data.fixer.io/api/latest?access_key=d4d0a18c50eee394baec75bf06d10199'
        console.log(url)
        let response = await fetch(url)
        let data = await response.json()
        // console.log(data.rates[currencyOfChoice].toFixed(2))
        return data.rates
}
catch (err) {
    console.log('errooooor:',err)
}
}


convertButton.addEventListener('click', async(e)=> {
    e.preventDefault()
    let amount = Number(amountInput.value)
    let currency = yourCurrency.value.toUpperCase()
    let target = targetCurrency.value.toUpperCase()
    let res = await currencyConverter()
    let currencyEuroRate = res[currency]
    let targetEuroRate = res[target]
    let exchange = (amount * targetEuroRate) / currencyEuroRate

    outputDisplay.innerText = target + ' ' + exchange.toFixed(2)


})


/*
1 eur = 1735 naira
1 naira = 1/1735
10000 = 10000/1735

*/


// currencyConverter('USD')




// const myFunc =()=>console.log(`It's a click!!!!!!`)

// const amount = parseInt(amountInput.value)
// const currencyInterest = currencyInput.value

// const converter = async ()=> {
//     const url = 'https://data.fixer.io/api/latest?access_key=d78782b1f9fd8844077ef50d3ae21a38';
//     let response = await fetch(url)
//     let data = await response.json()
//     // console.log(data.rates.NGN)
//     return data.rates
// }

// convertButton.addEventListener('click', async (e)=>{
//     e.preventDefault()
//     const result = await converter()
//     console.log(result)
//     const nairaRate = result.NGN
//     outputDisplay.innerText = nairaRate
//     // console.log(e)    
// } )


// resetButton.addEventListener('click', ()=>{

// })

// let obj = {
//     a: 7,
//     b:9,
//     f:"fail"
// }

// for(key in obj) {
//     console.log(obj[key])
// } 