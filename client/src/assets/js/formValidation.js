export const getInputs = () => {
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const password2 = document.getElementById('password2');
  if(username === null) {
    return [email, password]
  } else {
    return [username, email, password, password2]
  }
}
// Show input error message
function showError (input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-group error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Check email valid
export const checkEmail = (input, errors) => {
  // eslint-disable-next-line
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    errors.length = 0;
  } else {
    showError(input, "Email is not valid");
    errors.push('error');
  }
}

// Show success outline
function showSuccess (input) {
  const formControl = input.parentElement;
  formControl.className = "form-group success";
}

// Cheack required fields
export const checkRequired = (inputArray, errors)=> {
  inputArray.forEach(function (input) {
    if (input.value.trim() === "") {
      if(input.name !== 'password2'){
        showError(input, `${getFieldName(input)} is required`);
        errors.push('error');
      } else {
        showError(input, `Password is required`);
        errors.push('error');
      }
    }
  });
  if(errors.length > 0){
    return false;
  } else {
    return true;
  }
  
}
// Get field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check input length
export const checkLength = (input, min, max, errors) => {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    errors.push('error');
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than  ${max} characters`);
    errors.push('error');
  } else {
    showSuccess(input);
    errors.length = 0;
  }
}

// Check passwords match
export const checkPasswordsmatch = (input, pass1, pass2, errors) => {
  if (pass1 === pass2) {
    showSuccess(input);
    errors.length = 0;
  } else {
    showError(input, "Passwords do not match");
    errors.push('error');
  }
}