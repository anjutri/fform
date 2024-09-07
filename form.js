document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const statusMessage = document.getElementById("statusMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const email = document.getElementById("email").value;
        const feedback = document.getElementById("feedback").value;

        // Perform form validation (you can add more checks if needed)
        if (firstName && lastName && phoneNumber && email && feedback) {
            // Display a success message
            statusMessage.textContent = "Thank you for your feedback, " + firstName + "!";
            statusMessage.style.color = "#5cb85c"; // Green color for success

            // Clear the form
            contactForm.reset();
        } else {
            // If some fields are missing, show an error message
            statusMessage.textContent = "Please fill out all fields.";
            statusMessage.style.color = "red"; // Red color for errors
        }
    });
});
