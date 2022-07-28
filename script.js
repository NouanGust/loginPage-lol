const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button');
const pictures = document.querySelector('.wallpaper');

const fotos = [
    '../img/1.jpg',
    '../img/2.jpg',
    '../img/3.jpg',
    '../img/4.jpg',
    '../img/5.jpg',
    '../img/6.jpg',
    '../img/7.jpg'
]

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active')
}

const handleFocusOut = ({ target }) => {
    if (target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active')
    }
}

const handleChange = () => {
    const [username, password] = inputs;

    if (username.value && password.value.length >= 8) {
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', '')
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));

inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));

inputs.forEach((input) => input.addEventListener('input', handleChange));

function displayImage (x) {
    pictures.style.backgroundImage = "url(" + fotos[x] + ")";
}

function startTimer() {
    let x = 0;
    displayImage(x);
    setInterval(function () {
        x = x + 1 >= fotos.length ? 0 : x + 1;
        displayImage(x)
    }, 10000)
}

window.onload(startTimer())

