function validate_email() {
    let Email = document.myForm.email.value;
    at = Email.indexOf('@');
    dot = Email.lastIndexOf('.');

    if(at<1 || (dot - at <2)) {
        document.getElementById("email_error").style.display="block";
        document.myForm.email.style.border="1px solid red";
        document.myForm.email.style.label="email";


    }
    else{
        document.getElementById("email_error").style.display="none";
        document.myForm.email.style.border="1px solid #eeefff";
        
    }

}

