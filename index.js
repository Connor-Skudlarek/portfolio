function submitForm(event) {
  event.preventDefault();
  let fullName = document.getElementById("full-name").value;
  let email = document.getElementById("email").value;
  let reason = document.getElementById("reason").value;

  console.log("Full Name: " + fullName);
  console.log("Email: " + email);
  console.log("Reason for Contact: " + reason);

  // Add code here to send form data to server
  alert("Thank you, I will get back to you as soon as possible.")
}
