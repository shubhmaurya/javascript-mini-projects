const form = document.querySelector('form');

form.addEventListener('submit', function (e){
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value).toFixed(2);
    const weight = parseFloat(document.querySelector('#weight').value).toFixed(2);
    
    const bmiResult = document.querySelector('#bmiResult');

    if(height === '' || height < 0 || isNaN(height)){
        bmiResult.innerHTML = 'Please give a valid height';
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        bmiResult.innerHTML = 'Please give a valid weight';
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        bmiResult.innerHTML = `${bmi}`

        if(bmi < 18.6){
            const guide = document.createElement('p').appendChild(document.createTextNode('Under Weight = Less than 18.6'));
            document.querySelector('.result').appendChild(guide);
        }
        if(bmi >= 18.6 && bmi <=24.9){
            const guide = document.createElement('p').appendChild(document.createTextNode('Normal Weight = 18.6 and 24.9'));
            document.querySelector('.result').appendChild(guide);
        }
        if(bmi > 24.9){
            const guide = document.createElement('p.tempPara').appendChild(document.createTextNode('Over Weight = Greater than 24.9'));
            document.querySelector('.result').appendChild(guide);
        }
    }
    document.querySelector('#height').value = '';
    document.querySelector('#weight').value = '';
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