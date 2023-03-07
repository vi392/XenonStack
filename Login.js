function checkPassword() {
    let password = document.getElementById("password").value;
    let cnfrmPassword = document.getElementById("cnfrm-password").value;
    console.log(password,cnfrmPassword);
    let message = document.getElementById("message");

    if(password.length != 0){
        if(password == cnfrmPassword){
            message.innerText ="Password match";
            message.style.backgroundColor ="#3ae374";
        }else{
            message.innerText ="Password don't match";
            message.style.backgroundColor ="#ff4d4d";
        }
    }
    else{
        alert("Password can't be empty!")
        message.innerText ="";
    }
}