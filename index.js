// Select the button and all input elements
const submitBtn = document.getElementById("submit-btn");
const inputs = document.querySelectorAll("input");

// Add event listener to the button
submitBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission

  let hasError = false; // Tracks errors in the form
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation

  // Iterate over all inputs to validate
  inputs.forEach((input) => {
    const errorMessage = input.nextElementSibling.nextElementSibling; // Select the error message
    const inputWrapper = input.parentElement; // Parent element
    const inputIcon = inputWrapper.querySelector(".input-icon"); // Input icon

    if (input.value.trim() === "") {
      // If the input is empty
      errorMessage.style.visibility = "visible"; // Show error message
      inputIcon.style.visibility = "visible"; // Show input icon
      input.classList.add("error"); // Add error styling
      input.style.borderColor = "red"; // Change border color to red

      if (input.type === "email") {
        input.placeholder = "Email Address"; // Reset placeholder for email
        input.style.color = "red"; // Change input text color
      }

      hasError = true; // Mark error
    } else if (input.type === "email" && !emailRegex.test(input.value)) {
      // If the input is an email and the format is invalid
      errorMessage.textContent = "Looks like this is not an email."; // Update error message
      errorMessage.style.visibility = "visible"; // Show error message
      inputIcon.style.visibility = "visible"; // Show input icon
      input.classList.add("error"); // Add error styling
      input.style.borderColor = "red"; // Change border color to red
      input.style.color = "red"; // Change input text color
      hasError = true; // Mark error
    } else {
      // If the input is valid
      errorMessage.style.visibility = "hidden"; // Hide error message
      inputIcon.style.visibility = "hidden"; // Hide input icon
      input.classList.remove("error"); // Remove error styling
      input.style.borderColor = ""; // Reset border color
      input.style.color = ""; // Reset text color
    }
  });

  // If no errors, proceed with further logic
  if (!hasError) {
    console.log("Form submitted successfully!");
  }
});

// Add event listener to each input for dynamic error clearing
inputs.forEach((input) => {
  input.addEventListener("input", function () {
    const errorMessage = input.nextElementSibling.nextElementSibling; // Select the error message
    const inputWrapper = input.parentElement; // Parent element
    const inputIcon = inputWrapper.querySelector(".input-icon"); // Input icon

    errorMessage.style.visibility = "hidden"; // Hide error message
    inputIcon.style.visibility = "hidden"; // Hide input icon
    input.classList.remove("error"); // Remove error styling
    input.style.borderColor = ""; // Reset border color
    input.style.color = ""; // Reset text color
  });
});
