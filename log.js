// script.js

function check() {
    // Get the input values
    var email = document.getElementById("s_email").value;
    var password = document.getElementById("s_password").value;
  
    // Check if all fields are filled
    if (email !== "" && password !== "") {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(email.match(emailRegex)){
            window.location.href = "job.html";
        }else{
            alert("Invalid Details!!");
        }
    } else {
      // Display an error message or perform any other validation logic
      alert("Please fill in all the details.");
    }
  }
    function myFunction(x) {
        x.style.background = "pink";
      }
  