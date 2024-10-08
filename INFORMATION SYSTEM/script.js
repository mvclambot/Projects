function toggleElement() {
  const element = document.querySelector(".menuOptions"); // Selects element with class "menuOptions"
  
  if (element.style.left === "0px") {
      element.style.left = "-500px"; // Hide the element by moving it off-screen
  } else {
      element.style.left = "0px"; // Show the element by moving it back on-screen
  }
}


// Initialize an empty array to hold user credentials
let users = JSON.parse(localStorage.getItem('users')) || [];

// Function to handle registration
document.getElementById('registerButton').addEventListener('click', function() {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const secretQuestion = document.getElementById('secretQuestion').value;
    const secretAnswer = document.getElementById('secretAnswer').value;

    if (email && password && secretQuestion && secretAnswer) {
        // Check if the email already exists
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            alert('Email already registered!');
        } else {
            // Save the user to the array and local storage
            users.push({ email: email, password: password, secretQuestion: secretQuestion, secretAnswer: secretAnswer });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful!');
            // Close the modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
            modal.hide();
        }
    } else {
        alert('Please fill out all fields.');
    }
});

// Function to handle login
document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('loginEmailInput').value;
    const password = document.getElementById('loginPasswordInput').value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // If user is found, redirect to adminDashboard.html
        window.location.href = './pages/adminDashboard.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

// Function to handle forgot password
document.querySelector('.formInput a').addEventListener('click', function() {
    const email = prompt("Please enter your email:");

    const user = users.find(user => user.email === email);
    if (user) {
        const answer = prompt(`What is your secret answer for the question: "${user.secretQuestion}"?`);
        if (answer === user.secretAnswer) {
            const newPassword = prompt("Please enter your new password:");
            user.password = newPassword; // Update the password
            localStorage.setItem('users', JSON.stringify(users)); // Save updated users to local storage
            alert('Password updated successfully! You can now log in with your new password.');
        } else {
            alert('Incorrect answer. Please try again.');
        }
    } else {
        alert('Email not found.');
    }
});


  



  function changeIframeSrc(url) {
    const iframe = document.getElementById('myIframe');
    iframe.src = url;
}


  // // Create a JavaScript object with default user and password
  // const defaultCredentials = {
  //   username: "Sample",
  //   password: "Password"
  // };

  // // Get references to the form elements
  // const loginForm = document.querySelector("form");
  // const usernameInput = document.getElementById("loginEmailInput");
  // const passwordInput = document.getElementById("loginPasswordInput");
  // const loginButton = document.getElementById("loginButton");

  // // Add an event listener to the login button
  // loginButton.addEventListener("click", function(event) {
  //   event.preventDefault(); // Prevent form submission

  //   // Get the entered username and password
  //   const enteredUsername = usernameInput.value;
  //   const enteredPassword = passwordInput.value;

  //   // Check if the entered credentials match the default credentials
  //   if (enteredUsername === defaultCredentials.username && enteredPassword === defaultCredentials.password) {
  //     // If valid, open the desired HTML page
  //     window.location.href = "pages/adminDashboard.html"; // Replace "success.html" with your desired page
  //   } else {
  //     // If invalid, display an error message
  //     alert("Invalid username or password.");
  //   }
  // });


// THIS IS FOR THE CRUD

