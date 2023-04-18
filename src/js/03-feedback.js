import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input[name="email"]');
const textEl = document.querySelector('textarea[name="message"]');

const saveText = () => {
  const formText = {
    email: emailEl.value,
    message: textEl.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formText));
};

const getText = () => {
  if (localStorage.getItem('feedback-form-state')) {
    const formLoad = JSON.parse(localStorage.getItem('feedback-form-state'));
    emailEl.value = formLoad.email;
    textEl.value = formLoad.message;
  }
};

const delteText = () => {
  const formDelte = JSON.parse(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
  emailEl.value = '';
  textEl.value = '';
  console.log('Form data cleared:', formDelte);
};

emailEl.addEventListener('input', throttle(saveText, 500));
textEl.addEventListener('input', throttle(saveText, 500));

document.addEventListener('DOMContentLoaded', getText);

formEl.addEventListener('submit', ev => {
  ev.preventDefault();
  delteText();
});
