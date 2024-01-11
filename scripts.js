// script.js

function validateForm() {
    var form = document.getElementById("reservationForm");
  
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
  

    if (name === "") {
      document.getElementById("nameError").innerHTML = "Please enter your name.";
      return false;
    }
  
    if (email === "") {
      document.getElementById("emailError").innerHTML = "Please enter your email.";
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
    currentDate.setHours(0, 0, 0, 0);
  
    if (selectedDate < currentDate) {
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
  