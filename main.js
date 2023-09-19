// JavaScript code for adding employee
document.getElementById('addEmployeeModal').addEventListener('submit', function (e) {
    e.preventDefault();
    // You can add code here to handle form submission and add a new employee.
    // For a simple example, you can log the form data to the console.
    const formData = new FormData(this);
    for (const [key, value] of formData.entries()) {
        console.log(key, value);
    }
    // Close the modal after form submission
    $('#addEmployeeModal').modal('hide');
});

// JavaScript code for editing employee
document.getElementById('editEmployeeModal').addEventListener('submit', function (e) {
    e.preventDefault();
    // You can add code here to handle form submission and edit an existing employee.
    // For a simple example, you can log the form data to the console.
    const formData = new FormData(this);
    for (const [key, value] of formData.entries()) {
        console.log(key, value);
    }
    // Close the modal after form submission
    $('#editEmployeeModal').modal('hide');
});

// JavaScript code for deleting employee
document.getElementById('deleteEmployeeModal').addEventListener('submit', function (e) {
    e.preventDefault();
    // You can add code here to handle the deletion of an employee.
    // For a simple example, you can display an alert or perform an AJAX request to delete the employee.
    // After the deletion is successful, you can close the modal.
    // For demonstration purposes, we'll just log a message here.
    console.log('Employee deleted');
    // Close the modal after deletion
    $('#deleteEmployeeModal').modal('hide');
});
