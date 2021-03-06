// Event listener for salary range
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
})

// Validate Name
const name = document.querySelector('#name');
const nameError = document.querySelector('.text-error');
name.addEventListener('input', function () 
{
    let nameRegex = new RegExp(/^[A-Z][a-z]{2,}$/);
    if (nameRegex.test(name.value))
        nameError.textContent = "";
    else
        nameError.textContent = "Invalid Name";
});

// Validate Email ID
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function () 
{
    let emailRegex = new RegExp(/^[a-z0-9A-Z]+([._+-][a-z0-9A-Z]+)*[@][a-z0-9A-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3})?$/);
    if (emailRegex.test(email.value))
        emailError.textContent = "";
    else
        emailError.textContent = "Invalid Email ID";
});

// Validate Mobile number
const tel = document.querySelector('#tel');
const telError = document.querySelector('.tel-error');
tel.addEventListener('input', function () 
{
    let phoneRegex = new RegExp(/^[0-9]{2}[ ][6-9]{1}[0-9]{9}$/);
    if (phoneRegex.test(tel.value))
        telError.textContent = "";
    else
        telError.textContent = "Invalid Phone number";
});

// Validate Password
const password = document.querySelector('#pwd');
const passwordError = document.querySelector('.password-error');
password.addEventListener('input', function () 
{
    let passwordRegex = new RegExp(/(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).{8,}/);
    if (passwordRegex.test(password.value))
        passwordError.textContent = "";
    else
        passwordError.textContent = "Invalid Password";
});