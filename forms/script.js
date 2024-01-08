// Access the form element
const registrationForm = document.getElementById("registrationForm");

// Add an event listener to trigger storage when the form is submitted
registrationForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  // Collect form data into an object
  const formData = {
    fullName: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  // Store the form data in local storage, converting to JSON for proper storage
  localStorage.setItem("registrationData", JSON.stringify(formData));

  // Provide feedback to the user
  console.log("Form data stored successfully in local storage!");
  alert("Form data saved!"); // Or display a more user-friendly message
});
