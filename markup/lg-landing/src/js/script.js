"use strict";

const ERROR_CODES = {
  INVALID_NAME: 'INVALID_NAME',
  INVALID_PHONE: 'INVALID_PHONE',
  INVALID_EMAIL: 'INVALID_EMAIL',
  MISSING_PROMOTIONS: 'MISSING_PROMOTIONS',
  MISSING_MAILING: 'MISSING_MAILING',
  SERVER_ERROR: 'SERVER_ERROR',
}

const patterns = {
  phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
  name: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
  email: /[^@]+@[^\.]+\..+/
}

const errors = {};

window.onload = init;

function init() {
  const form = document.querySelector('.registration-form');
  form.addEventListener('submit', validateForm);

  const nameInput = form.elements.name;
  nameInput.addEventListener('input', () => hideError(ERROR_CODES.INVALID_NAME));
  nameInput.addEventListener('blur', validateName);

  const phoneInput = form.elements.phone;
  phoneInput.addEventListener('input', () => hideError(ERROR_CODES.INVALID_PHONE));
  phoneInput.addEventListener('blur', validatePhone);

  const emailInput = form.elements.email;
  emailInput.addEventListener('input', () => hideError(ERROR_CODES.INVALID_EMAIL));
  emailInput.addEventListener('blur', validateEmail);

  const promotionsInput = form.elements.promotions;
  promotionsInput.addEventListener('change', validatePromotions);

  const mailingInput = form.elements.mailing;
  mailingInput.addEventListener('change', validateMailing);

  const accordions = document.querySelectorAll('.accordion');
  accordions.forEach(accordion => {
    accordion.addEventListener('click', toggleAccordion, true)
  });
}

function submit(name, phone, email, promotions, mailing) {
  console.log('SUBMIT: ', {
    name,
    phone,
    email,
    promotions,
    mailing,
  });

  try {
    displayForm(false);
    displayModal(true);
    // do server request
    // if OK - clear form
  } catch (err) {
    // check error
    console.log('Server request failed!', err.message);
    showError(ERROR_CODES.SERVER_ERROR, err.message);
  }
}

function validateForm(event) {
  event.preventDefault();

  try {
    const name = validateName();
    const phone = validatePhone();
    const email = validateEmail();
    const promotions = validatePromotions();
    const mailing = validateMailing();

    if (name && phone && email && promotions && mailing) {
      return submit(name, phone, email, promotions, mailing);
    }
  } catch (err) {
    console.log('Validation error!', err.message, err.code);
  }
}

function validateName() {
  const name = document.querySelector('#name').value;
  if (!name) {
    return showError(ERROR_CODES.INVALID_NAME, 'Необходимо ввести имя')
  }

  // if (name.length < 2) {
  //   return showError(ERROR_CODES.INVALID_NAME, 'Минимум 2 символа')
  // }
  //
  // if (!name.match(patterns.name)) {
  //   return showError(ERROR_CODES.INVALID_NAME, 'Невалидное имя')
  // }

  return name;
}

function validatePhone() {
  const phone = document.querySelector('#phone').value;
  if (!phone) {
    return showError(ERROR_CODES.INVALID_PHONE, 'Необходимо ввести номер телефона');
  }
  // if (!phone.match(patterns.phone)) {
  //   return showError(ERROR_CODES.INVALID_PHONE, 'Неверный номер')
  // }
  return phone;
}

function validateEmail() {
  const email = document.querySelector('#email').value;
  if (!email) {
    return showError(ERROR_CODES.INVALID_EMAIL, 'Необходимо ввести email');
  }
  if (!email.match(patterns.email)) {
    return showError(ERROR_CODES.INVALID_EMAIL, 'Невалидный email');
  }
  return email;
}

function validatePromotions() {
  const checked = document.querySelector('#promotions').checked;
  const label = document.querySelector('#promotions-label');
  if (!checked) {
    label.classList.remove('label-active');
    showError(ERROR_CODES.MISSING_PROMOTIONS, 'Не отмечено согласие с Политикой конфиденциальности.')
  } else {
    label.classList.add('label-active');
    hideError(ERROR_CODES.MISSING_PROMOTIONS)
  }
  return checked;
}

function validateMailing() {
  const checked = document.querySelector('#mailing').checked;
  const label = document.querySelector('#mailing-label');
  if (!checked) {
    label.classList.remove('label-active');
    showError(ERROR_CODES.MISSING_MAILING, 'Не отмечено согласие с Политикой конфиденциальности.')
  } else {
    label.classList.add('label-active');
    hideError(ERROR_CODES.MISSING_MAILING)
  }

  return checked;
}

function checkButtonState() {
  const form = document.querySelector('.registration-form');
  const name = form.elements.name.value;
  const phone = form.elements.phone.value;
  const email = form.elements.email.value;
  const mailing = form.elements.mailing.checked;
  const promotions = form.elements.promotions.checked;
  const button = form.elements.submit;

  const activeErrors = [];
  for (let key in errors) {
    if (errors[key]) {
      activeErrors.push(key);
    }
  }

  const hasErrors = activeErrors.length > 0;
  const hasEmptyFields = !name || !phone || !email || !mailing || !promotions;

  if (hasErrors || hasEmptyFields) {
    button.classList.add('disabled');
  } else {
    button.classList.remove('disabled')
  }
}

function showError(code, message) {
  const input = getInputByCode(code);
  input.classList.add('invalid');
  errors[code] = true;

  const errorSpan = getErrorSpanByCode(code);
  if (errorSpan) {
    errorSpan.innerHTML = message;
  }

  checkButtonState();
}

function hideError(code) {
  const input = getInputByCode(code);
  input.classList.remove('invalid');
  errors[code] = false;

  const errorSpan = getErrorSpanByCode(code);
  if (errorSpan) {
    errorSpan.innerHTML = '';
  }

  checkButtonState();
}

function getInputByCode(code) {
  const form = document.querySelector('.registration-form');
  switch (code) {
    case ERROR_CODES.INVALID_NAME:
      return form.elements.name;
    case ERROR_CODES.INVALID_PHONE:
      return form.elements.phone;
    case ERROR_CODES.INVALID_EMAIL:
      return form.elements.email;
    case ERROR_CODES.MISSING_MAILING:
      return form.elements.mailing;
    case ERROR_CODES.MISSING_PROMOTIONS:
      return form.elements.promotions;
    default:
      console.log('Unhandled error: ', code);
  }
}

function getErrorSpanByCode(code) {
  switch (code) {
    case ERROR_CODES.INVALID_NAME:
      return document.querySelector('#name + .form-error');
    case ERROR_CODES.INVALID_PHONE:
      return document.querySelector('#phone + .form-error');
    case ERROR_CODES.INVALID_EMAIL:
      return document.querySelector('#email + .form-error');
    case ERROR_CODES.MISSING_MAILING:
      return document.querySelector('#mailing-error');
    case ERROR_CODES.MISSING_PROMOTIONS:
      return document.querySelector('#promotions-error');
    default:
      return null;
  }
}

function toggleAccordion(event) {
  const block = event.target;
  block.classList.toggle('accordion-open');
}

function displayModal(visible){
  const modal = document.querySelector('#modal-results');
  modal.style.display = visible ? 'block' : 'none';
}

function displayForm(visible){
  const formContainer = document.querySelector('.page-wrapper-form-lg');
  formContainer.style.display = visible ? 'block' : 'none';
}
