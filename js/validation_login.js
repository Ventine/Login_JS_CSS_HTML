const aform = document.getElementById('a-form');
const bform = document.getElementById('b-form');
const user = document.getElementById('user');
const email = document.getElementById('email');
const password = document.getElementById('password');
const email_c = document.getElementById('email_c');
const password_c = document.getElementById('password_c');



const setErrors = (message, field, isError = true) => {
  if (isError) {
    field.nextElementSibling.classList.add("error");
    field.nextElementSibling.innerText = message;
  } else {
    field.nextElementSibling.classList.remove("error");
    field.nextElementSibling.innerText = "";
  }
}

const validateEmptyField = (message, e) => { 
  const field = e.target;
  const fieldValue = e.target.value;
  if (fieldValue.trim().length === 0) {
    setErrors(message, field);
  } else {
    setErrors("", field, false);
  }
}

const validateEmailFormat = e => {
  const field = e.target;
  const fieldValue = e.target.value;
  const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  if (fieldValue.trim().length > 9 && !regex.test(fieldValue)) {
    setErrors("Ingrese un correo valido", field);
  } else {
    setErrors("", field, false);
  }
}

user.addEventListener("blur", (e) => validateEmptyField("Agregue un nombre", e));
password.addEventListener("blur", (e) => validateEmptyField("Ingrese una contraseña", e));
email.addEventListener("blur", (e) => validateEmptyField("Escriba un correo", e));
password_c.addEventListener("blur", (e) => validateEmptyField("Ingrese una contraseña", e));
email_c.addEventListener("blur", (e) => validateEmptyField("Escriba un correo", e));

email.addEventListener("input", validateEmailFormat);
email_c.addEventListener("input", validateEmailFormat);