// Event listener for Name
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () {
    let namRegex = new RegExp(/^[A-Z][a-z]{2,}$/);
    if (namRegex.test(text.value))
        textError.textContent = "";
    else
        textError.textContent = "Invalid Name";
})

// Event listener for salary range
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
})
