const time = document.querySelector('#time');

setInterval(function(){
    const currentTime = new Date();
    time.innerHTML = currentTime.toLocaleTimeString();
},1000);

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

// function updateClock() {
//     const currentTime = new Date();
//     const hours = currentTime.getHours().toString().padStart(2, '0');
//     const minutes = currentTime.getMinutes().toString().padStart(2, '0');
//     const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  
//     const timeString = `${hours}:${minutes}:${seconds}`;
//     document.getElementById('time').innerText = timeString;
//   }
  
//   // Update the clock every second
//   setInterval(updateClock, 1000);
  
//   // Initial update
//   updateClock();
  