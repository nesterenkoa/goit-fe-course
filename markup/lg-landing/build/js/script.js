"use strict";

var ERROR_CODES = {
  INVALID_NAME: 'INVALID_NAME',
  INVALID_PHONE: 'INVALID_PHONE',
  INVALID_EMAIL: 'INVALID_EMAIL',
  MISSING_PROMOTIONS: 'MISSING_PROMOTIONS',
  MISSING_MAILING: 'MISSING_MAILING',
  SERVER_ERROR: 'SERVER_ERROR'
};
var patterns = {
  phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
  name: /^['A-Za-z\u0410-\u044F][ '\x2DA-Za-z\u0410-\u044F]+['A-Za-z\u0410-\u044F]?$/,
  email: /[^@]+@[^\.]+\..+/
};
var errors = {};
window.onload = init;

function init() {
  var form = document.querySelector('.registration-form');
  form.addEventListener('submit', validateForm);
  var nameInput = form.elements.name;
  nameInput.addEventListener('input', function () {
    return hideError(ERROR_CODES.INVALID_NAME);
  });
  nameInput.addEventListener('blur', validateName);
  var phoneInput = form.elements.phone;
  phoneInput.addEventListener('input', function () {
    return hideError(ERROR_CODES.INVALID_PHONE);
  });
  phoneInput.addEventListener('blur', validatePhone);
  var emailInput = form.elements.email;
  emailInput.addEventListener('input', function () {
    return hideError(ERROR_CODES.INVALID_EMAIL);
  });
  emailInput.addEventListener('blur', validateEmail);
  var promotionsInput = form.elements.promotions;
  promotionsInput.addEventListener('change', validatePromotions);
  var mailingInput = form.elements.mailing;
  mailingInput.addEventListener('change', validateMailing);
  var accordions = document.querySelectorAll('.accordion');
  accordions.forEach(function (accordion) {
    accordion.addEventListener('click', toggleAccordion, true);
  });
}

function submit(name, phone, email, promotions, mailing) {
  console.log('SUBMIT: ', {
    name: name,
    phone: phone,
    email: email,
    promotions: promotions,
    mailing: mailing
  });

  try {
    displayForm(false);
    displayModal(true); // do server request
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
    var name = validateName();
    var phone = validatePhone();
    var email = validateEmail();
    var promotions = validatePromotions();
    var mailing = validateMailing();

    if (name && phone && email && promotions && mailing) {
      return submit(name, phone, email, promotions, mailing);
    }
  } catch (err) {
    console.log('Validation error!', err.message, err.code);
  }
}

function validateName() {
  var name = document.querySelector('#name').value;

  if (!name) {
    return showError(ERROR_CODES.INVALID_NAME, 'Необходимо ввести имя');
  } // if (name.length < 2) {
  //   return showError(ERROR_CODES.INVALID_NAME, 'Минимум 2 символа')
  // }
  //
  // if (!name.match(patterns.name)) {
  //   return showError(ERROR_CODES.INVALID_NAME, 'Невалидное имя')
  // }


  return name;
}

function validatePhone() {
  var phone = document.querySelector('#phone').value;

  if (!phone) {
    return showError(ERROR_CODES.INVALID_PHONE, 'Необходимо ввести номер телефона');
  } // if (!phone.match(patterns.phone)) {
  //   return showError(ERROR_CODES.INVALID_PHONE, 'Неверный номер')
  // }


  return phone;
}

function validateEmail() {
  var email = document.querySelector('#email').value;

  if (!email) {
    return showError(ERROR_CODES.INVALID_EMAIL, 'Необходимо ввести email');
  }

  if (!email.match(patterns.email)) {
    return showError(ERROR_CODES.INVALID_EMAIL, 'Невалидный email');
  }

  return email;
}

function validatePromotions() {
  var checked = document.querySelector('#promotions').checked;
  var label = document.querySelector('#promotions-label');

  if (!checked) {
    label.classList.remove('label-active');
    showError(ERROR_CODES.MISSING_PROMOTIONS, 'Не отмечено согласие с Политикой конфиденциальности.');
  } else {
    label.classList.add('label-active');
    hideError(ERROR_CODES.MISSING_PROMOTIONS);
  }

  return checked;
}

function validateMailing() {
  var checked = document.querySelector('#mailing').checked;
  var label = document.querySelector('#mailing-label');

  if (!checked) {
    label.classList.remove('label-active');
    showError(ERROR_CODES.MISSING_MAILING, 'Не отмечено согласие с Политикой конфиденциальности.');
  } else {
    label.classList.add('label-active');
    hideError(ERROR_CODES.MISSING_MAILING);
  }

  return checked;
}

function checkButtonState() {
  var form = document.querySelector('.registration-form');
  var name = form.elements.name.value;
  var phone = form.elements.phone.value;
  var email = form.elements.email.value;
  var mailing = form.elements.mailing.checked;
  var promotions = form.elements.promotions.checked;
  var button = form.elements.submit;
  var activeErrors = [];

  for (var key in errors) {
    if (errors[key]) {
      activeErrors.push(key);
    }
  }

  var hasErrors = activeErrors.length > 0;
  var hasEmptyFields = !name || !phone || !email || !mailing || !promotions;

  if (hasErrors || hasEmptyFields) {
    button.classList.add('disabled');
  } else {
    button.classList.remove('disabled');
  }
}

function showError(code, message) {
  var input = getInputByCode(code);
  input.classList.add('invalid');
  errors[code] = true;
  var errorSpan = getErrorSpanByCode(code);

  if (errorSpan) {
    errorSpan.innerHTML = message;
  }

  checkButtonState();
}

function hideError(code) {
  var input = getInputByCode(code);
  input.classList.remove('invalid');
  errors[code] = false;
  var errorSpan = getErrorSpanByCode(code);

  if (errorSpan) {
    errorSpan.innerHTML = '';
  }

  checkButtonState();
}

function getInputByCode(code) {
  var form = document.querySelector('.registration-form');

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
  var block = event.target;
  block.classList.toggle('accordion-open');
}

function displayModal(visible) {
  var modal = document.querySelector('#modal-results');
  modal.style.display = visible ? 'block' : 'none';
}

function displayForm(visible) {
  var formContainer = document.querySelector('.page-wrapper-form-lg');
  formContainer.style.display = visible ? 'block' : 'none';
}