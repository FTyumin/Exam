document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById("reservationForm");

    if (form) {
        form.addEventListener('submit', function (event) {
            // Prevent the default refresh
            event.preventDefault();

            if (validateForm()) {
                console.log('Form submitted successfully');
                
                // Store reservation data in localStorage
                
                // Redirect to the reservation.html page
                window.location.href = 'reservation.html'; // Change the URL as needed
            } else {
                console.log('Form validation failed');
            }
        });
    }
});

var reservations = [];

function validateForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var people = document.getElementById("people").value; 

    // Clear previous error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("dateError").innerHTML = "";
    document.getElementById("timeError").innerHTML = "";

    if (name === "") {
        document.getElementById("nameError").innerHTML = "Please enter your name.";
        return false;
    }

    if (phone === "") {
        document.getElementById("phoneError").innerHTML = "Please enter your phone number.";
        return false;
    }

    if (date === "") {
        document.getElementById("dateError").innerHTML = "Please select a reservation date.";
        return false;
    }

    

    
   

   

    // Check if the selected date is today or in the future
    var selectedDate = new Date(date);
    var currentDate = new Date();

    if (selectedDate <= currentDate) {
        document.getElementById("dateError").innerHTML = "Reservation date must be today or in the future.";
        return false;
    }

    if (time === "") {
        document.getElementById("timeError").innerHTML = "Please select a reservation time.";
        return false;
    }

    // If all validations pass, the form will be submitted
    return true;
}



