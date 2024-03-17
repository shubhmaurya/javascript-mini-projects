const form = document.querySelector('#mainForm');
const usernameInput = document.querySelector('#username');
const errorMsg = document.querySelector('.errorMsg');
const isError = document.querySelector('#ifError');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();

    if (!username) {
        displayError('Please Enter a GitHub Username');
    } else if (username.length > 37) {
        displayError('Username exceeds maximum length of 37 characters.');
    } else if (username.endsWith('.') || username.endsWith('_') || username.endsWith('-')) {
        displayError('Username cannot end with a period.');
    } else if (/\.{2,}/.test(username)) {
        displayError('Username cannot contain consecutive periods.');
    } else if (!/^[a-zA-Z0-9][a-zA-Z0-9._-]{1,36}[a-zA-Z0-9]$/.test(username)) {
        displayError('Invalid username format. Alphanumeric, max 37 chars, can include ._-.');
    } else {
        getGitHubData(username);
    }

    function getGitHubData(username){
        //API Request using basic XMLHttpRequest() and not fetch()
        const requestUrl = `https://api.github.com/users/${username}`
        const xhr = new XMLHttpRequest();
        xhr.open('GET', requestUrl)
        xhr.onreadystatechange = function(){
            // console.log(xhr.readyState);
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const data = JSON.parse(this.responseText);
                    // window.location.href = 'profile.html?data=' + encodeURIComponent(JSON.stringify(data));
                    const state = { data: JSON.stringify(data) };
                    history.pushState(state, '', 'profile.html');
                    window.location.href = 'profile.html';
                } else {
                    console.error("Failed to fetch user data.");
                    displayError('The GitHub username you entered is incorrect.');
                }
            }
        };
        xhr.send();
    }
    
    function displayError(message) {
        errorMsg.style.display = 'block';
        isError.innerHTML = message;
        usernameInput.value = "";
    }
});

// script for burger
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

// ----------------------------------------------------------------------------------------------------------------------------------------------
// if (!username) {
        //   errorMsg.style.display = 'block';
        //   isError.innerHTML = 'Please Enter a GitHub Username';
        //   usernameInput.value = "";
        //   return;
        // }
        // if (username.endsWith('.') || username.endsWith('_') || username.endsWith('-')) {
        //     errorMsg.style.display = 'block';
        //     isError.innerHTML = 'Username cannot end with a period.';
        //     usernameInput.value = "";
        //     return;
        // }
        // if (!/^[a-zA-Z0-9][a-zA-Z0-9._-]{1,36}[a-zA-Z0-9]$/.test(username)) {
        //     errorMsg.style.display = 'block';
        //     isError.innerHTML = 'Invalid username format. Alphanumeric, max 37 chars, can include ._-.';
        //     usernameInput.value = "";
        //     return;
        // }
        // if (username.length > 37) {
        //     errorMsg.style.display = 'block';
        //     isError.innerHTML = 'Username exceeds maximum length of 37 characters.';
        //     usernameInput.value = "";
        //     return;
        // }
        // if (/\.{2,}/.test(username)) {
        //     errorMsg.style.display = 'block';
        //     isError.innerHTML = 'Username cannot contain consecutive periods.';
        //     usernameInput.value = "";
        //     return;
        // }