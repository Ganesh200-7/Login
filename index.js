let btns = document.querySelector('.btn');
btns.addEventListener('click', (evt) =>{ 
    evt.preventDefault(); 
    const username = document.getElementById('101').value;
    const password = document.getElementById('102').value;

    if (!username || !password) {
        alert("Please enter both username and password.");
    } else {

        alert("Form submitted");
        // Add your backend login logic or redirect here
    }
});