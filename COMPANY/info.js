document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch and display company details
    document.getElementById('fetch').addEventListener('click',function fetchAndDisplayCompanyDetails() {
        var companyName = document.getElementById('companyNameInput').value;

        if (!companyName) {
            alert('Please enter a company name.');
            return;
        }
        const companyDetails = { companyName: companyName }; // Creating a JSON object with the company name
         const company_name=JSON.stringify(companyDetails)
        fetchCompanyDetails(company_name);
    })
  
    // Function to fetch company details
    function fetchCompanyDetails(company_name) {
        fetch(`https://d8e8-182-176-157-31.ngrok-free.app/company?companyName=${encodeURIComponent(company_name)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                // Display the company details
                displayCompanyDetails(data);
                console.log(data)
            })
            .catch(error => {
                console.error('Error fetching company details:', error.message);
                alert('Error fetching company details. Check the console for details.');
            });
    }

    // Function to display company details
    function displayCompanyDetails(companyDetails) {
        var companyDetailsContainer = document.getElementById('companyDetails');
        companyDetailsContainer.innerHTML = '';

        for (var key in companyDetails) {
            if (companyDetails.hasOwnProperty(key)) {
                var detailItem = document.createElement('div');
                detailItem.innerHTML = `<strong>${key}:</strong> ${companyDetails[key]}`;
                companyDetailsContainer.appendChild(detailItem);
            }
        }
    }
});
