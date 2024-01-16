document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById("reservationForm");

    if (form) {
        form.addEventListener('submit', function (event) {
            // Prevent the default refresh
            event.preventDefault();

            if (validateForm()) {
                console.log('Form submitted successfully');
                
                
                // Redirect to the reservation.html page
            } else {
                console.log('Form validation failed');
            }
        });
    }

    var data = {
        elementType: 'p',
        content: 'This is a new paragraph created from JSON.',
        attributes: {
            class: 'new-paragraph',
            id: 'paragraphId'
        }
    };

    var newElement = document.createElement(data.elementType);
    newElement.textContent = data.content;

    for (var key in data.attributes) {
        newElement.setAttribute(key, data.attributes[key]);
    }

    // Appending new element to the body
    // document.body.appendChild(newElement);


    var submitButton = document.querySelector('[type="submit"]');
    submitButton.addEventListener('click', function() {
       // Change the location to reservation.html when the button is clicked
       window.location.href = 'reservation.html';
    });

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

    // Check if the selected date is today or in the future
    var selectedDate = new Date(date);
    var currentDate = new Date();

    if (selectedDate <= currentDate) {
        document.getElementById("dateError").innerHTML = "Reservation date must be today or in the future.";
        return false;
    }

    window.location.href = 'reservation.html'; 


    // If all validations pass, the form will be submitted
    return true;
}


