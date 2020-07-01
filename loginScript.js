function loginValidation(){
    var emails = document.getElementById('InputEmail').value;
    var pass = document.getElementById('InputPassword').value;
    console.log(emails);
    console.log(pass.length);
    // if (pass =="" &&  emails ==""){
      
    //     document.getElementById('passw').innerHTML = " ** Please fill the password field";
    //     document.getElementById('emailids').innerHTML = " ** Please fill the email id field";
    //     return false;
    // }
   
    if (emails == "") {
        document.getElementById('emailids').innerHTML = " ** Please fill the email id field";
        return false;
    }
    //  else {
    //     document.getElementById('emailids').innerHTML = "";
    //     return false;

    // }
    if (emails.indexOf('@') <= 0) {
        document.getElementById('emailids').innerHTML = " ** @ Invalid Position";
        return false;
    }

    if ((emails.charAt(emails.length - 4) != '.') && (emails.charAt(emails.length - 3) != '.')) {
        document.getElementById('emailids').innerHTML = " ** . Invalid Position";
        return false;
    }

    if (pass == "") {
        document.getElementById('passw').innerHTML = " ** Please fill the password field";
        return false;
    }
    if ((pass.length <= 5) || (pass.length > 20)) {
        document.getElementById('passw').innerHTML = " ** Passwords lenght must be between  5 and 20";
        return false;
    }

}