document.addEventListener('DOMContentLoaded', () => {
    // for profile.html to check username
    // const queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);
    // const data = JSON.parse(decodeURIComponent(urlParams.get("data")));

  const state = history.state;
  if (state && state.data) {
    const data = JSON.parse(state.data);

    document.querySelector('#profilePicture').src = data.avatar_url;
    document.querySelector('#profileName').innerText = data.name || data.login;
    document.querySelector('.joinedDate').innerText = ' '+ new Date(data.created_at).toLocaleDateString('en-IN',{ day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-');
    document.querySelector('.updatedDate').innerText = ' '+ new Date(data.updated_at).toLocaleDateString('en-In',{ day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-');
    document.querySelector('.followersCount').innerText = data.followers;
    document.querySelector('.followingCount').innerText = data.following;

    document.querySelector('.githubProfButton').addEventListener('click', () =>{
      window.open(data.html_url, '_blank');
    });

    document.querySelector('.backButton').addEventListener('click',()=>{
      window.location.href = 'index.html';
    })


  }else{
    window.location.href = 'index.html';
  }

  window.onpopstate = function() {
    window.location.href = 'index.html';
  };


    // for auto HR of profile name on profile.html
    const h2Element = document.querySelector("#profileName");
    const hrElement = document.querySelector(".custom-hr");
    const detailsColumn = document.querySelector(".detailsColumn");

    hrElement.style.width = `${h2Element.offsetWidth}px`;
    hrElement.style.maxWidth = `100%`; // To ensure the <hr> doesn't exceed the width of .detailsColumn
    hrElement.style.marginLeft = `calc(50% - ${detailsColumn.offsetWidth / 2}px)`;

    // script for burger
      const burgerMenu = document.querySelector('.burger-menu');
      const navLinks = document.querySelector('.navSection');

      burgerMenu.addEventListener('click', function () {
          navLinks.classList.toggle('active');
      });
      navLinks.addEventListener('click', function () {
          navLinks.classList.remove('active');
      });
  });