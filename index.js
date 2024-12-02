const amount = document.querySelector('#amount')
// const amount = document.getElementById('amount')
const currency = document.querySelector('#currency')
const convertBtn = document.querySelector('#convert')
const resetBtn = document.querySelector('#reset')
// const result = document.querySelector('#result')





const converter = async ()=> {
    const url = 'https://data.fixer.io/api/latest?access_key=d78782b1f9fd8844077ef50d3ae21a38&symbols=NGN,GBP,USD';
    let response = await fetch(url)
    let data = await response.json()
    console.log(data.rates)
    return data.rates.NGN
}

// convertBtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     // console.log(e,'I am clicked')
//     document.querySelector('#result').innerText = 'A button is clicked'

// })

convertBtn.addEventListener('click', async(e) => {
    e.preventDefault()
    console.log(e,'I am clicked')
    let output = await converter()
    document.querySelector('#result').innerText = output
    // document.querySelector('#result').innerHTML = '<h2>I am clicked</h2>'
    let amountInNaira = parseInt(amount.value)
    console.log(amountInNaira)

})


// const converter = async ()=> {
//     const url = 'https://data.fixer.io/api/latest?access_key=d78782b1f9fd8844077ef50d3ae21a38&symbols=NGN,GBP,USD';

//     let response = fetch(url)

//     response.then((res)=> {
//     // console.log(res)
//         return res.json()
//     })
//     .then((data)=>{
//         return data
//     })
// }