import Notiflix from 'notiflix';

const firstDelayEl = document.querySelector('[name="delay"]');
const stepDelayEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');
const submitBtn = document.querySelector('button');

function createPromise(position, delay, step) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const timeDelay = delay + (position - 1) * step;
  
    setTimeout(() => {
      if (shouldResolve) {
        resolve(Notiflix.Notify.success(`Fulfilled promise ${position} in ${timeDelay} ms`));
      } else {
        reject(Notiflix.Notify.failure(`Rejected promise ${position} in ${timeDelay} ms`));
      }
    }, timeDelay);
  });
};

function onCreatePromiseBtn(evt) {
  evt.preventDefault();
  const delay = Number(firstDelayEl.value);
  const step = Number(stepDelayEl.value);
  const amount = Number(amountEl.value);

  for (let i = 1; i <= amount; i += 1) {
    const position = i;
    createPromise(position, delay, step)
      .then(() => {
        console.log(`Fulfilled promise ${position} in ${delay + (position - 1) * step} ms`);
      }).catch(() => {
        console.log(`Rejected promise ${position} in ${delay + (position - 1) * step} ms`);
      });
  }
};
submitBtn.addEventListener('click', onCreatePromiseBtn);