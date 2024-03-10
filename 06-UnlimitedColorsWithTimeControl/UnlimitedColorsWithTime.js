const navLinks = document.querySelectorAll('.navSection a');
const burgerMenu = document.querySelectorAll('.burger-menu div');
const button = document.querySelectorAll('.button');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const navColorIfMedia = window.matchMedia("(max-width: 960px)");

const speedSlider = document.querySelector('#speedSlider');
const speedValue = document.querySelector('#speedValue');
speedValue.innerHTML = `Speed: ${speedSlider.value} MilliSecond`;

const buttonStatus = document.querySelector('.buttonStatus');

let intervalId;

const startChangingColor = function (intervalTime) {
    if (!intervalId) {
        intervalId = setInterval(changeColor, intervalTime);
    }

    function changeColor() {
        const bgColor = randomColor();
        document.body.style.backgroundColor = bgColor;

        let r = parseInt(bgColor.substring(1, 3), 16);
        let g = parseInt(bgColor.substring(3, 5), 16);
        let b = parseInt(bgColor.substring(5, 7), 16);

        let brightness = (r * 299 + g * 587 + b * 114) / 1000;
        
        startButton.style.backgroundColor = 'rgb(76, 158, 76)';
        stopButton.style.backgroundColor = 'rgb(158, 76, 76)';

        if (brightness > 125) {
            document.body.style.color = '#000';
            burgerMenu.forEach(burger => {
                burger.style.backgroundColor = '#000';
                if(navColorIfMedia.matches){
                    navLinks.forEach(link => {
                        link.style.color = '#fff';
                    });
                }else{
                    navLinks.forEach(link => {
                        link.style.color = '#000';
                    });
                }
            });
            button.forEach(butt => {
                butt.style.color = '#000';
            });
        } else {
            document.body.style.color = '#fff';
            burgerMenu.forEach(burger => {
                burger.style.backgroundColor = '#fff';
                if(navColorIfMedia.matches){
                    navLinks.forEach(link => {
                        link.style.color = '#fff';
                    });
                }else{
                    navLinks.forEach(link => {
                        link.style.color = '#fff';
                    });
                }
            });
            button.forEach(butt => {
                butt.style.color = '#fff';
            });
        }
    }
};

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
};

speedSlider.addEventListener('input', function () {
    const intervalTime = parseInt(this.value);
    speedValue.innerHTML = `Speed: ${intervalTime} MilliSecond`;

    if (intervalId) {
        stopChangingColor();
        startChangingColor(intervalTime);
    }
});

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
};

document.querySelector("#start").addEventListener('click', function () {
    const intervalTime = parseInt(speedSlider.value);
    startChangingColor(intervalTime);
    
    buttonStatus.innerHTML = `Color changing started`;
});

document.querySelector("#stop").addEventListener('click', function () {
    stopChangingColor();
    buttonStatus.innerHTML = `Color changing stopped!!!`;
});

//for hamburger
document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.navSection');

    burgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
    navLinks.addEventListener('click', function () {
        navLinks.classList.remove('active');
    });
});