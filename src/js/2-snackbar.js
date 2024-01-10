import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const makePromise = ({ delay, value }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === 'fulfilled') {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });
};

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const delayEl = form.querySelector('input[name="delay"]');
  const valueEl = form.querySelector('input:checked');

  const delay = delayEl.value;
  const value = valueEl.value;

  delayEl.value = '';
  valueEl.checked = false;

  makePromise({ delay, value })
    .then(() => {
      izitoast.show({
        title: 'OK',
        titleColor: '#FFF',
        titleSize: '16px',
        titleLineHeight: '1.5',
        message: `Fulfilled promise in ${delay}ms`,
        messageColor: '#FFF',
        messageSize: '16px',
        messageLineHeight: '1.5',
        color: '#59A10D',
        progressBarColor: '#326101',
        position: 'topRight',
        icon: 'icon-ok',
      });
    })
    .catch(() => {
      izitoast.show({
        title: 'Error',
        titleColor: '#FFF',
        titleSize: '16px',
        titleLineHeight: '1.5',
        message: `Rejected promise in ${delay}ms`,
        messageColor: '#FFF',
        messageSize: '16px',
        messageLineHeight: '1.5',
        color: '#EF4040',
        progressBarColor: '#B51B1B',
        position: 'topRight',
        icon: 'icon-cancel',
        iconColor: '#FAFAFB',
      });
    });
}
