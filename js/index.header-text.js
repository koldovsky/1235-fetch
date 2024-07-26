const headerTitle = document.querySelector('.header__title');

// document.querySelectorAll('???') - масив
// document.getElementById('id')
// document.getElementsByClassName('class')
// document.getElementsByTagName('tag')

const greetings = [
    'Вітаю!',
    'Привіт!',
    'Добрий день!',
    'Hello!',
    'Hi!',
    'Hey!'
];

const getRandomEl = (arr) => arr[Math.floor(Math.random() * arr.length)];

headerTitle.innerText = getRandomEl(greetings);
