const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

let timer = null;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

const onStart = () => {
       btnStartEl.setAttribute('disabled', '');
       btnStopEl.removeAttribute('disabled', '');
       timer = setInterval(() => {
            bodyEl.style.backgroundColor = getRandomHexColor();
        }, 1000)
};

const onStop = () => {
        btnStartEl.removeAttribute('disabled', '');
        btnStopEl.setAttribute('disabled', '');
        clearInterval(timer);

}; 
btnStartEl.addEventListener('click', onStart);
btnStopEl.addEventListener('click', onStop);
