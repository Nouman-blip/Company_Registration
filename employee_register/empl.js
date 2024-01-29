document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch departments dynamically
    function fetchDepartments() {
        fetch('https://2c21-182-176-157-31.ngrok-free.app/company/get-departments',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
    
           
        })
            .then(response => response.json())
            .then(data => {
                // Populate the departments container with radio buttons
                populateDepartments(data.departments);
            })
            .catch(error => {
                console.error('Error fetching departments:', error.message);
            });
    }


// Function to populate departments dynamically
function populateDepartments(departments) {
    var departmentsContainer = document.getElementById('departmentsContainer');
    departmentsContainer.innerHTML = '';

    departments.forEach(department => {
        var departmentRadio = document.createElement('input');
        departmentRadio.type = 'radio';
        departmentRadio.id = department;
        departmentRadio.name = 'department';
        departmentRadio.value = department;

        var departmentLabel = document.createElement('label');
        departmentLabel.htmlFor = department;
        departmentLabel.textContent = department;

        departmentsContainer.appendChild(departmentRadio);
        departmentsContainer.appendChild(departmentLabel);
    });
}

// Call the function to fetch and populate departments when the page loads
fetchDepartments();

function registerEmployee() {
    var empName = document.getElementById('empName').value;
    var empEmail = document.getElementById('empEmail').value;
    var empPassword=document.getElementById('password').value;
    var companyName=document.getElementById('companyName').value;

    // Get the selected department
    var selectedDepartment = document.querySelector('input[name="department"]:checked');
    
    var department = selectedDepartment ? selectedDepartment.value : null;
   
    console.log(department)

    if (!empName || !empEmail || department.length=== null || !empPassword  ) {
        alert('Please fill in all fields and select at least one department in the employee registration form.');
        return;
    }

    var employeeData = {
        employeeName: empName,
        employeeEmail: empEmail,
        employeePassword: empPassword,
        companyName : companyName,
        departmentName: department,
    };
    console.log(employeeData)
    console.log(JSON.stringify(employeeData))
    // Post the new employee data to the server for registration
    fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employeeData)

       
    })
        .then(response => {
            // if (!response.ok) {
            //     throw new Error('Network response was not ok');
            // }
            return response.json();
        })
        .then(() => {
            alert('Employee registered successfully!');
            // Optionally, you can redirect to another page or perform other actions
        })
        .catch(error => {
            console.error('Error registering employee:', error.message);
            alert('Error registering employee. Check the console for details.');
        });
}

});