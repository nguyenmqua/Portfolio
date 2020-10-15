$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var name = $("input#name")
    var emailInput = $("input#email");
    var message = $("#message");
  
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        name: name.val().trim(),
        email: emailInput.val().trim(),
        message: message.val().trim()
      };
  
      if (!userData.email || !userData.name || !userData.message) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.name, userData.email, userData.message);
      name.val("");
      emailInput.val("");
      message.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(name, email, message) {
        console.log(name)
        console.log(email)
        console.log(message)
      $.post("/api/message", {
        name: name,
        email: email,
        message: message
      })
        .then(function(data) {
        
          window.location.replace("/")
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text("This email account is already in use.");
      $("#alert").fadeIn(500);
    }
  });
  