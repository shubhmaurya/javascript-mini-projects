//changing the background color along with text color
// Example: while picking the background color if light bg then text will be dark vice versa. 
const navLinks = document.querySelectorAll('.navSection a');
const burgerMenu = document.querySelectorAll('.burger-menu div');
const navColorIfMedia = window.matchMedia("(max-width: 960px)");

function colorChange(){
    const colorPicked = document.getElementById('color_Picker');
    const body = document.querySelector('body');
    body.style.backgroundColor = colorPicked.value;
    // body.style.color='#000'

    let r = parseInt(colorPicked.value.substring(1, 3), 16);
    let g = parseInt(colorPicked.value.substring(3, 5), 16);
    let b = parseInt(colorPicked.value.substring(5, 7), 16);

    //calculating total brightness
    let brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // Set text color as per brightness
    if (brightness > 125) {
        body.style.color = '#000';
        // navLinks.forEach(link => {
        //     link.style.color = '#000';
        // });
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
    } else {
        body.style.color = '#fff';
        // navLinks.forEach(link => {
        //     link.style.color = '#fff';
        // });
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
    }
}

//changing background color with preset colors.
const buttons = document.querySelectorAll('.button');

buttons.forEach(function (button){
    button.addEventListener('click',function (c){
        const body = document.querySelector('body');
        // console.log(c.target);
        if(c.target.id === 'white'){
            body.style.backgroundColor = c.target.id;
            body.style.color = '#000';
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
        }
        if(c.target.id === 'blue'){
            body.style.backgroundColor = c.target.id;
            body.style.color = '#fff';
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
        }
        if(c.target.id === 'yellowgreen'){
            body.style.backgroundColor = c.target.id;
            body.style.color = '#000';
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
        }
        if(c.target.id === 'orangered'){
            body.style.backgroundColor = c.target.id;
            body.style.color = '#fff';
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
        }
    })
})

//reset to default
const reset = document.querySelector('.reset');
function setToDefault(){
    window.location.reload();
}

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