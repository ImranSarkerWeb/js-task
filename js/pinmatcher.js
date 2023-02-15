function pinGenerator() {
    const randomPin = Math.round(Math.random() * 10000)
    return randomPin
}

function getPin() {
    const pin = pinGenerator()
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        getPin();
    }
}


//getting value from the input field
function getVauleFromInputFieldById(elementID) {
    const element = document.getElementById(elementID)
    return element.value;
}


//set generated value to the input field
function setValueInputFieldById(elementID, item) {
    const element = document.getElementById(elementID)
    element.value = item
}


//active all number button
/* const allNumBtn = document.getElementsByClassName('numBtn')

for (let i = 0; i < allNumBtn.length; i++) {
    allNumBtn[i].addEventListener('click', function () {

        setValueInputFieldById('pin-confirm-field', getVauleFromInputFieldById('pin-confirm-field') + allNumBtn[i].innerText)
    })
}
 */

//active all number button using event delegation
document.getElementById('calulator').addEventListener('click', function (event) {
    const number = event.target.innerText
    if (!isNaN(number)) {
        setValueInputFieldById('pin-confirm-field', getVauleFromInputFieldById('pin-confirm-field') + number);
    } else {
        if (number === 'C') {
            setValueInputFieldById('pin-confirm-field', '');

        } else if (number === '<') {
            const allDigits = getVauleFromInputFieldById('pin-confirm-field')
            const allDigisInArry = allDigits.split('')
            allDigisInArry.pop()
            setValueInputFieldById('pin-confirm-field', allDigisInArry.join(''))
        }
    }

})


//active clear button
// document.querySelector('.clear').addEventListener('click', function () {
//     setValueInputFieldById('pin-confirm-field', '')
// })



document.getElementById('generator').addEventListener('click', function () {

    setValueInputFieldById('pin-field', getPin())
    document.getElementById('tryCount').innerText = '3'
    document.getElementById('check-match').removeAttribute('disabled')
    document.getElementById('check-match').style.color = 'white'
})


document.getElementById('check-match').addEventListener('click', function () {
    const generatedPin = getVauleFromInputFieldById('pin-field')
    const confirmPin = getVauleFromInputFieldById('pin-confirm-field')
    const notMatchedField = document.getElementById('notMatched')
    const matchedField = document.getElementById('matched')
    if (generatedPin === confirmPin) {
      matchedField.style.display = 'block'
      notMatchedField.style.display = 'none'
    }else{
        matchedField.style.display = 'none'
        notMatchedField.style.display = 'block'
        tryCount()
    }



})

//number of try

function tryCount(){
    const tryCountElement =document.getElementById('tryCount')
    let countNumber = parseInt(tryCountElement.innerText)
    countNumber = countNumber -1
    if(countNumber < 0){
        document.getElementById('check-match').setAttribute('disabled', true)
        document.getElementById('check-match').style.color = 'red'
    }else{
        tryCountElement.innerText = countNumber
    }
}

