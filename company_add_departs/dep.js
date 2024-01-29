function addDepartmentToCompany() {
    var companyName = document.getElementById('companyName').value;
    var departmentName = document.getElementById('departmentName').value;

    if (!companyName || !departmentName) {
        alert('Please fill in both the Company Name and Department Name.');
        return;
    }

    var departmentData = {
        companyName: companyName,
        departmentName: departmentName,
    };

    console.log(departmentData)

    // Post the new department data to the server
    fetch('https://2c21-182-176-157-31.ngrok-free.app/company/add-department', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(departmentData)
    })
        .then(response => {
            // if (!response.ok) {
            //     throw new Error('Network response was not ok');
            // }
            return response.json();
        })
        .then(() => {
            alert('Department added to company successfully!');
            // Optionally, you can redirect to another page or perform other actions
        })
        .catch(error => {
            console.error('Error adding department to company:', error.message);
            alert('Error adding department to company. Check the console for details.');
        });
}
