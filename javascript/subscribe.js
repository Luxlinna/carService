/* === SUBSCRIPTION FOR PROMOTION === */
// Initialize emailjs with your user ID
emailjs.init("ye4t_YLIfjjewn-VZ");

// Function to subscribe
function subscribe() {
    var emailInput = document.getElementById('email-input');
    var messageElement = document.getElementById('subscription-message');

    // Check if the email is valid
    if (validateEmail(emailInput.value)) {
        // Send the email
        emailjs.send("service_e6xs64m", "template_5ko303l", {
            to_email: "ylinna168@gmail.com",
            user_email: emailInput.value,
        })
        .then(function(response) {
            messageElement.innerHTML = 'Subscription successful! You will receive notification.';
            messageElement.style.color = '#4caf50';
        }, function(error) {
            messageElement.innerHTML = 'Failed to subscribe. Please try again later.';
            messageElement.style.color = '#ff0000';
        })
        .finally(function() {
            // Clear the input field after submission
            emailInput.value = '';

            // Hide the message after 5 seconds
            setTimeout(function() {
                messageElement.innerHTML = '';
            }, 5000);
        });
    } else {
        messageElement.innerHTML = 'Invalid email. Please enter a valid email address.';
        messageElement.style.color = '#ff0000';

        // Hide the message after 5 seconds
        setTimeout(function() {
            messageElement.innerHTML = '';
        }, 5000);
    }
}

// Function to validate email format
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}