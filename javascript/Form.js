// Event listener for salary range
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
})

// Validate Name
const name = document.querySelector('#name');
const error = document.querySelector('.text-error');
name.addEventListener('input', function () 
{
    let nameRegex = new RegExp(/^[A-Z][a-z]{2,}$/);
    if (nameRegex.test(name.value))
        error.textContent = "";
    else
        error.textContent = "Invalid Name";
});
