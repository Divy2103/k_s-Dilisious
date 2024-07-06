document.querySelectorAll('input').forEach((item) => {
    item.addEventListener("focus", function () {
        item.previousElementSibling.className = 'label-selected';
    })
    item.addEventListener("blur", function () {
        console.log(item.value);
        if (item.value === '') {
            item.previousElementSibling.className = '';
        }
    })
})

document.getElementById("registerLink").addEventListener("click", function () {
    if (window.innerWidth < 600) {
        document.getElementById("signUp").style.display = 'block';
        document.getElementById("login").style.display = 'none';
    }
    else {
        document.getElementById("overlay").style.transform = 'translate(525px , -25px)';
    }
})
document.getElementById("loginLink").addEventListener("click", function () {
    if (window.innerWidth < 600) {
        document.getElementById("login").style.display = 'block';
        document.getElementById("signUp").style.display = 'none';
    }
    else {
        document.getElementById("overlay").style.transform = 'translate(0px , -25px)';
    }
})


// dropdown menu 
 
const dropdown = document.querySelector('.dropdown');
// dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');
// })

select.addEventListener('click',()=>{
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
})
options.forEach(option => {
    option.addEventListener('click',()=>{
          selected.innerText = option.innerText;
    
          select.classList.remove('select-clicked');
          caret.classList.remove('caret-rotate');
          menu.classList.remove('menu-open');
          option.forEach(option=>{
            option.classList.remove('active');
          })
          option.classList.add('active');
    })
})



// verification

function clearErrors() {
    errors = document.getElementsByClassName('formerror');
    // colorerror = document.getElementsByClassName('input-box');
    for (let item of errors) {
        item.innerHTML = "";
    }
    // for (let color of colorerror) {
    //     color.style.border = " 1px solid rgb(76, 76, 240)";
    // }
}

function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
    // element.getElementsByClassName('input-box')[0].style.border = "1px solid red";
}

function validateForm() {
    clearErrors();

    let password = document.getElementById('fpass');
    let minlength = 7;
    let maxlength = 12;
    let cpassword = document.getElementById('fcpass');

    let a = pass_validation(password, minlength, maxlength);
    let b = cpass_validation(password, cpassword, minlength, maxlength);

    if (a && b) { 
        let c =   document.getElementById("submitform");
        c.reset();
        window.location.href = "./index.css";
        alert("your account created successfully");
        return true;
    }

    else {
        return false;
    }
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