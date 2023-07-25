const showError = (input, message) => {
  const formControl = input.parentElement;
  const error = formControl.querySelector(".form__field-error");
  error.innerText = message;
  formControl.classList.add("error");
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  const error = formControl.querySelector(".form__field-error");
  error.innerText = "";
  formControl.classList.remove("error");
};

const isEmpty = (value) => {
  return value.trim().length === 0;
};

const checkEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailValue = email.value;
  let isValid = false;
  if (isEmpty(emailValue)) {
    showError(email, `Email is a required field.`);
  } else if (!re.test(emailValue.toLowerCase())) {
    showError(email, `Email has a wrong format.`);
  } else {
    isValid = true;
    showSuccess(email);
  }
  return isValid;
};

export default checkEmail;
