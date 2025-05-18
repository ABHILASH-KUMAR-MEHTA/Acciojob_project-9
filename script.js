const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

function validateEmail(email) {
  return email.length > 3 && email.includes('@') && email.includes('.');
}

function validatePassword(password) {
  return password.length > 8;
}

emailInput.addEventListener('input', () => {
  const email = emailInput.value;
  if (!validateEmail(email)) {
    emailError.textContent = 'Make sure email is more than 3 characters and has @ and a .';
    successMessage.textContent = '';
  } else {
    emailError.textContent = '';
    if (validatePassword(passwordInput.value)) {
      successMessage.textContent = 'All good to go';
    }
  }
});

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  if (!validatePassword(password)) {
    passwordError.textContent = 'Make sure password is more than 8 characters.';
    successMessage.textContent = '';
  } else {
    passwordError.textContent = '';
    if (validateEmail(emailInput.value)) {
      successMessage.textContent = 'All good to go';
    }
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  if (validateEmail(email) && validatePassword(password)) {
    const confirmSubmit = confirm('Do you want to sign up?');
    if (confirmSubmit) {
      alert('Successful signup!');
    } else {
      form.reset();
      emailError.textContent = '';
      passwordError.textContent = '';
      successMessage.textContent = '';
    }
  } else {
    if (!validateEmail(email)) {
      emailError.textContent = 'Make sure email is more than 3 characters and has @ and a .';
    }
    if (!validatePassword(password)) {
      passwordError.textContent = 'Make sure password is more than 8 characters.';
    }
    successMessage.textContent = '';
  }
});
