// Function to handle login
function login(email, password) {
    var loginData = {
        email: email,
        password: password,
    };
    console.log(loginData)
    // Post the login data to the server
    fetch('https://4edf-72-255-39-45.ngrok-free.app/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
        .then(response => {
            // if (!response.ok) {
            //     throw new Error('Network response was not ok');
            // }
            return response.json();
        })
        .then(data => {
            // Check the response from the server
            if (data.message) {
                // Login successful, navigate to the employee registration page
                console.log(data.message)
                openEmployeeRegistrationPage();
            } else {
                // Login failed, show an error message
                alert('Login failed. Check your email and password.');
            }
        })
        .catch(error => {
            console.error('Error registering company:', error.message);
           
        });
}

// Function to open the employee registration page
function openEmployeeRegistrationPage() {
    // Redirect to the employee registration page or show/hide sections as needed
    window.location.href = 'empl.html'; // Change the URL as needed
}

// Example usage
document.getElementById('loginButton').addEventListener('click', function () {
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;

    // Validate and make the login API call
    if (email && password) {
        login(email, password);
    } else {
        alert('Please enter both email and password.');
    }
});
