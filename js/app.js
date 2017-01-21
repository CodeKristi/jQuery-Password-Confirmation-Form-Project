//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times

var $password = $("#password");
var $confirmPassword = $("#confirm_password");

// HIDE HINTS
$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent(){
  // FIND OUT IF PASSWORD IS VALID
  if(isPasswordValid()) {
    // HIDE HINT IF VALID
    $password.next().hide();
  } else {
    // ELSE SHOW HINT
    $password.next().show();
  }
}

function confirmPasswordEvent() {
  // FIND OUT IF PASSWORD AND CONFIRMATION MATCH
  if(arePasswordsMatching()) {
    // HIDE HINT IF MATCH
    $confirmPassword.next().hide();
  } else {
    // ELSE SHOW HINT
     $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
} 

// WHEN EVENT HAPPENS ON PASSWORD INPUT
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

// WHEN EVENT HAPPENS ON CONFIRMATION
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
 
enableSubmitEvent();











