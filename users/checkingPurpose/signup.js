function clearErrors() {
    errors = document.getElementsByClassName('formerror');
    colorerror = document.getElementsByClassName('input-box');
    for (let item of errors) {
        item.innerHTML = "";
    }
    for (let color of colorerror) {
        color.style.border = " 1px solid rgb(76, 76, 240)";
    }
}

function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
    element.getElementsByClassName('input-box')[0].style.border = "1px solid red";
}

function validateForm() {
    clearErrors();
    let phone = document.myForm.fphone;
    let name = document.myForm.fname;
    let password = document.myForm.fpass;
    let minlength = 7;
    let maxlength = 12;
    let cpassword = document.myForm.fcpass;

    let a = name_validation(name, 1);
    let b = pass_validation(password, minlength, maxlength);
    let c = cpass_validation(password, cpassword, minlength, maxlength);
    let d = phone_validation(phone);

    if (a && b && c && d) { 
        let a =   document.getElementById("submitform");
        a.reset();
        window.location.href = "../home.html";
        alert("your account created successfully");
        return true;
    }
    else {
        return false;
    }
}

function phone_validation(phone) {
    let number = /^\d{10}$/;
    if (phone.value.length == 0) {
        seterror("input_phone", "phone can not be empty !");
        return false;
    }
    else if (phone.value.length != 10) {
        seterror("input_phone", "phone should be of 10 digit");
        return false;
    }
    else if (!phone.value.match(number)) {
        seterror("input_phone", "phone number contains only number");
        return false;
    }
    else if (!phone.value.match(/[6-9]{1}[0-9]{9}/)) {
        seterror("input_phone", "please enter valid phone number");
        return false;
    }
    return true;
}

function name_validation(name, minlength) {
    let name1 = name.value;
    let letter = /^[A-Za-z]+$/;
    if (name1.length == 0) {
        seterror("input_name", "name can not be empty !");
        return false;
    }
    else if (!name1.match(letter)) {
        seterror("input_name", "name contain only letter");
        return false;
    }
    else if (name1.length < minlength) {
        seterror("input_name", "minimum length is 7 ");
        return false;
    }
    return true;
}

function pass_validation(password, minlength, maxlength) {
    let passw_length = password.value.length;
    let passmatch = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,12}$/;
    if (passw_length == 0) {
        seterror("input_pass", "password is compalsary !");
        return false;
    }
    if (passw_length < minlength || passw_length > maxlength) {
        seterror("input_pass", "password  length be between " + minlength + " to " + maxlength);
        return false;
    }
    if(!password.value.match(passmatch)){
        seterror("input_pass", "contain lowercase, uppercase, numeric and special character ");
        return false;
    }
    return true;
}

function cpass_validation(password, cpassword, minlength, maxlength) {
    let pass_value = password.value;
    let cpass_value = cpassword.value;
    if (pass_value.length >= minlength && pass_value.length <= maxlength && cpass_value.length == 0) {
        seterror("input_cpass", " plese conform your password !");
        console.log('hello');
        return false;
    }
    else if (cpass_value.length != 0 && pass_value != cpass_value) {
        seterror("input_cpass", " password not match ");
        return false;
    }
    return true;
}