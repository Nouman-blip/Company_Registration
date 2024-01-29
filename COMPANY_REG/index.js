function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'flex';
}

 function showLoginForm() {
    window.location.href = ".company_login/login.html";  // Redirect to the login page
    return false;
}



document.getElementById('fetchRegBtn').addEventListener('click', function () {
    var companyName = document.getElementById('name').value;
    var companyDesc = document.getElementById('desc').value;
    var companyEmail = document.getElementById('companyEmail').value;
    var companyUsername = document.getElementById('username').value;
    var companyPassword = document.getElementById('companyPass').value;

    // Validate and store company registration data on the server
    if (companyName && companyDesc && companyEmail && companyUsername && companyPassword) {
        var companyData = {
            companyName: companyName,
            companyDescription: companyDesc,
            email: companyEmail,
            employeeName: companyUsername,
            password: companyPassword,
        };

        // Post the new company data to the server
        fetch('https://2c21-182-176-157-31.ngrok-free.app/company/register', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(companyData)
        })
            .then(response => response.json())
            .then(() => {
                alert('Company registered successfully!');
                showLoginForm();
            })
            .catch(error => {
                console.error('Error registering company:', error.message);
                alert('Error registering company. Check the console for details.');
            });
    } else {
        alert('Please fill in all fields in the company registration form.');
    }
});



