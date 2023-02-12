//log out function
const logout = document.querySelector('.logout')

logout.addEventListener('click', function () {
    //method: 1
    window.location.href = 'index.html'

    //method: 02
    // location.replace('simpleBank.html')

})

const depositField = document.getElementById('deposit-field');
const depositDisplay = document.getElementById('show-deposit');

const balanceDisplay = document.getElementById('balance')


document.getElementById('deposit').addEventListener('click', function () {


    let newDepositAmount = parseFloat(depositField.value);
    if (newDepositAmount > 0) {
        const previousDepositeMoney = parseFloat(depositDisplay.innerText)
        console.log(previousDepositeMoney)

        const totalDeposit = previousDepositeMoney + newDepositAmount;
        depositDisplay.innerText = totalDeposit;

        //balance update
        const previousBalance = parseFloat(balanceDisplay.innerText)
        balanceDisplay.innerText = previousBalance + newDepositAmount;

        // reset
        depositField.style.border = ''
        depositField.style.backgroundColor = ''
        depositField.value = ''
    } else {
        // alert('Please input first')
        depositField.style.border = '2px solid red'
        depositField.style.backgroundColor = 'lightpink'
    }



})



//functionality added to withdraw button 
const withdrawField = document.getElementById('withdraw-field')
const withdrawDisplay = document.getElementById('show-withdraw')

document.getElementById('withdraw').addEventListener('click', function () {

    const newWithdrawAmount = parseFloat(withdrawField.value)
    const previousBalance = parseFloat(balanceDisplay.innerText)
    if (newWithdrawAmount > 0 && previousBalance>= newWithdrawAmount) {
        const previousWidthdrawAmount = parseFloat(withdrawDisplay.innerText)
        const totalWithdrawAmount = newWithdrawAmount + previousWidthdrawAmount;
        withdrawDisplay.innerText = totalWithdrawAmount;

        //balance update
        
        balanceDisplay.innerText = previousBalance - newWithdrawAmount;

       //reset
        withdrawField.value = ''
        withdrawField.style.border = ''
        withdrawField.style.backgroundColor = ''
    }
    else{
        withdrawField.style.border = '2px solid red'
        withdrawField.style.backgroundColor = 'lightpink'
    }
})



