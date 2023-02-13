const firstBtn = document.getElementById('1stBtn')
const secondBtn = document.getElementById('2ndBtn')


function getGivenData(givenDataFieldId) {
    const dataFieldElement = document.getElementById(givenDataFieldId)
    const amount = parseFloat(dataFieldElement.innerText)
    return amount
}

function dataCalc(amount) {
    return amount * .7;
}


function displayCalculatedData(positionElementId, amount) {
    const showDataElement = document.getElementById(positionElementId)
    showDataElement.innerText = amount;
}

firstBtn.addEventListener('click', function () {
    const btnText = document.getElementById('1stBtn')
    btnText.innerText = 'Applied'
    const amount = dataCalc(getGivenData('1stPrice'))
    displayCalculatedData('1stOption', amount)
})


secondBtn.addEventListener('click', function () {
    const inputField = document.getElementById('coupon')
    if (inputField.value == 'DISC30') {
        const btnText = document.getElementById('2ndBtn')
        btnText.innerText = 'Applied'
        const amount = dataCalc(getGivenData('2ndPrice'))
        displayCalculatedData('2ndOption', amount)
        inputField.style.border = ''
    } else{
        inputField.style.border = '2px solid red'
    }

})


//redirect page

const redirectBtn = document.getElementById('go3rd')
redirectBtn.addEventListener('click', function(){
    location.replace('challenge3.html')
})
