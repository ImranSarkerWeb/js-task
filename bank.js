const email = document.getElementById("login-email")
const password = document.getElementById("login-password")
const submit = document.getElementById("btn-submit")



submit.addEventListener('click', function(){
    let userEmail = email.value;
    let userPassword = password.value;

    if(userEmail =="imransarker.web@gmail.com" && userPassword =='imran'){
        location.replace("bank.html")
    }
    else{
        alert("you are not valid user")
    }
   
})




