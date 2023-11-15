// script.js
const firebaseConfig = {
  apiKey: "AIzaSyAdczlIYMWxgyEgfJRGEKJojHTmMo1XSqM",
  authDomain: "jobportal-511ca.firebaseapp.com",
  databaseURL: "https://jobportal-511ca-default-rtdb.firebaseio.com",
  projectId: "jobportal-511ca",
  storageBucket: "jobportal-511ca.appspot.com",
  messagingSenderId: "663106122162",
  appId: "1:663106122162:web:6ca420c652cfcdd04e74ab"
};
firebase.initializeApp(firebaseConfig);

var jobportalDB=firebase.databaseURL().ref("jobportal");

document.getElementById('signup').addEventListener("submit",submitForm)

function submitForm(e){
  e.preventDefault();
  var name = document.getElementVal("s_name");
     var email = document.getElementVal("s_email");
     var number = document.getElementVal("number");
     var password = document.getElementVal("s_password");
     var confirmPassword = document.getElementVal("confirm_password"); 
     console.log(name,email,number,password,confirmPassword);
}
const getElementVal=(id)=>{
  return document.getElementById(id).value
}
// function check() {
//     // Get the input values
//     var name = document.getElementById("s_name").value;
//     var email = document.getElementById("s_email").value;
//     var number = document.getElementById("number").value;
//     var password = document.getElementById("s_password").value;
//     var confirmPassword = document.getElementById("confirm_password").value;
  
//     // Check if all fields are filled
//     if (name !== "" && email !== "" && number !== "" && password !== "" && confirmPassword!="") {
//         var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         var mobileRegex = /^\d{10}$/;
//         var usernameRegex = /^[a-zA-Z0-9_]{4,16}$/;
//         var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-=_+{}[\]|;:"<>,./?]).{6,}$/;
//         if(email.match(emailRegex)&&name.match(usernameRegex)&&number.match(mobileRegex)&&password.match(passwordRegex)&&password=== confirmPassword)
//         {
//             window.location.href = "job.html";
            
//         }else{
//             alert("Invalid Details!!");
//         } 
//     } else {
//       // Display an error message or perform any other validation logic
//       alert("Please fill in all the details.");
//     }
    
//   }

//     function myFunction(x) {
//         x.style.background = "pink";
//       }
  