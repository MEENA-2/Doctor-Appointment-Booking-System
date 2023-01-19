function validate(){
    var Username = document.getElementById("Username");
    var Password = document.getElementById("Password");
    var length = document.getElementById("length");

    if(Username.value == "Meena_2"){
        if(Password.value=="Mina#021"){
            window.location.assign("NewLandingPage.html");
            return false;
        }
    }
    else{
        alert("Login Failed");
    }
    
}