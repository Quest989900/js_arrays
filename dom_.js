// //DOCUMENT OBJECT MODEL   (DOM)

// const amountInput = document.getElementById('amount')

// const inputs = document.getElementsByTagName('input')
// // console.log(inputs)
// const formItems = document.getElementsByClassName('form-items')
// formItems[3]

// const heading = document.querySelector('h1')
// // console.log(document.querySelectorAll('label'))

// heading.innerText = 'Currency Converter'



const amountInput = document.getElementById('amount')
const currencyInput = document.getElementById('currency')
const convertButton = document.querySelector('#convert')
const resetButton = document.querySelector('#reset')
const outputDisplay = document.querySelector('#output-side div')

const amount = parseInt(amountInput.value)
const currencyInterest = currencyInput.value

const converter = async ()=> {
    const url = 'https://data.fixer.io/api/latest?access_key=d78782b1f9fd8844077ef50d3ae21a38';
    let response = await fetch(url)
    let data = await response.json()
    // console.log(data.rates.NGN)
    return data.rates
}

convertButton.addEventListener('click', async (e)=>{
    e.preventDefault()
    const result = await converter()
    console.log(result)
    const nairaRate = result.NGN
    outputDisplay.innerText = nairaRate

} )


resetButton.addEventListener('click', ()=>{

})