const insert = document.querySelector('#insert');

window.addEventListener('keydown',function(e){
    insert.innerHTML = `
    <caption><h2>Your KeyCode</h2></caption>
    <table>
      <thead>
        <tr>
          <th colspan="2">Key</th>
          <th rowspan="2">Got Pressed</th>
        </tr>
        <tr>
          <th headers="key" >Value</th>
          <th headers="key" >Code</th>
        </tr>
      </thead>
      <tbody>
          <th>${e.key === " "?"Space":e.key}</th>
          <td headers="value code">${e.keyCode}</td>
          <td headers="region azia">${e.code}</td>
      </tbody>
    </table>
    `;
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

// to show keyboard on mobile
// const mediaSize = window.matchMedia('(max-device-width: 480px)');
// if (mediaSize.matches) {
//     const nonInteractiveArea = document.querySelector('.project');

//     function showVirtualKeyboard() {
//         nonInteractiveArea.focus();
//     }

//     nonInteractiveArea.addEventListener('touchstart', showVirtualKeyboard);
// }