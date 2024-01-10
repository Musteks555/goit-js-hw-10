import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'izitoast/dist/js/iziToast.min.js';

const startBtn = document.querySelector('.start-btn');
const calendar = document.querySelector('#datetime-picker');

const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    if (Date.now() - userSelectedDate > 0) {
      startBtn.setAttribute('disabled', true);

      izitoast.show({
        title: 'Error',
        titleColor: '#FFF',
        titleSize: '16px',
        titleLineHeight: '1.5',
        message: 'Please choose a date in the future',
        messageColor: '#FFF',
        messageSize: '16px',
        messageLineHeight: '1.5',
        color: '#EF4040',
        position: 'topRight',
        iconUrl: '/img/alert-close.svg',
        iconColor: '#FAFAFB',
      });
    } else {
      startBtn.removeAttribute('disabled');
    }
  },
};

new flatpickr('#datetime-picker', options);

startBtn.addEventListener('click', startTimer);

function startTimer() {
  startBtn.setAttribute('disabled', true);
  calendar.setAttribute('disabled', true);

  startBtn.removeEventListener('click', startTimer);

  const startTime = userSelectedDate - Date.now();
  updateClock(convertMs(startTime));

  const timeId = setInterval(() => {
    const currentTime = userSelectedDate - Date.now();

    updateClock(convertMs(currentTime));

    if (currentTime < 1000) {
      clearInterval(timeId);
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateClock({ days, hours, minutes, seconds }) {
  daysEl.textContent = pad(days);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
}

function pad(value) {
  return String(value).padStart(2, '0');
}
