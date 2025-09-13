document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const roleInput = document.getElementById('role');
    const successMessage = document.getElementById('successMessage');

    // Error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const roleError = document.getElementById('roleError');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous error messages
        clearErrors();
        
        // Validate form
        let isValid = true;
        
        // Validate name
        if (!nameInput.value.trim()) {
            showError(nameError, 'Name is required');
            isValid = false;
        }
        
        // Validate email
        if (!emailInput.value.trim()) {
            showError(emailError, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showError(emailError, 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate role
        if (!roleInput.value) {
            showError(roleError, 'Please select a role');
            isValid = false;
        }
        
        // If all validations pass
        if (isValid) {
            showSuccessMessage();
            form.reset();
        }
    });

    function clearErrors() {
        nameError.textContent = '';
        emailError.textContent = '';
        roleError.textContent = '';
        successMessage.style.display = 'none';
    }

    function showError(element, message) {
        element.textContent = message;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showSuccessMessage() {
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    }
});