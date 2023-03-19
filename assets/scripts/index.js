const arr = [
    {
    name: 'Стивен Спилберг',
    career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
    films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
    top_rated_film: 'Список Шиндлера'
    },

    {
    name: 'Кристофер Нолан',
    career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
    films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
    top_rated_film: 'Начало'
    },

    {
    name: 'Мартин МакДона',
    career: 'Сценарист, Режиссёр, Продюсер',
    films: 'https://www.film.ru/person/martin-makdonah',
    top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },

    {
    name: 'Алексей Балабанов',
    career: 'Режиссёр, Сценарист, Актёр, Продюсер',
    films: 'https://www.film.ru/person/aleksey-balabanov',
    top_rated_film: 'Брат'
    },

    {
    name: 'Питер Фаррелли',
    career: 'Продюсер, Режиссёр, Сценарист, Актёр',
    films: 'https://www.film.ru/person/piter-farrelli',
    top_rated_film: 'Зелёная книга'
    },

    {
    name: 'Юрий Быков',
    career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
    films: 'https://www.film.ru/person/yuriy-bykov',
    top_rated_film: 'Дурак'
    },

    {
    name: 'Жан-Марк Валле',
    career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
    films: 'https://www.film.ru/person/zhan-mark-valle',
    top_rated_film: 'Далласский клуб покупателей'
    },
];


const nameOne = document.querySelector('.personName-1'); 
const careerOne = document.querySelector('.personCareer-1');
const websiteOne = document.querySelector('.personWebsite-1');

const nameTwo = document.querySelector('.personName-2');
const careerTwo = document.querySelector('.personCareer-2');
const websiteTwo = document.querySelector('.personWebsite-2');

const nameThree = document.querySelector('.personName-3');
const careerThree = document.querySelector('.personCareer-3');
const websiteThree = document.querySelector('.personWebsite-3');

const nameFour = document.querySelector('.personName-4');
const careerFour = document.querySelector('.personCareer-4');
const websiteFour = document.querySelector('.personWebsite-4');

const nameFive = document.querySelector('.personName-5');
const careerFive = document.querySelector('.personCareer-5');
const websiteFive = document.querySelector('.personWebsite-5');

const nameSix = document.querySelector('.personName-6');
const careerSix = document.querySelector('.personCareer-6');
const websiteSix = document.querySelector('.personWebsite-6');

const nameSeven = document.querySelector('.personName-7');
const careerSeven = document.querySelector('.personCareer-7');
const websiteSeven = document.querySelector('.personWebsite-7');

const allFilms = document.querySelector('.topFilms');

arr.forEach ((item) => {
    let names = item.name;
    let careers = item.career;
    let websites = item.films;
    let arrFilms = `${arr[0].top_rated_film}, ${arr[1].top_rated_film}, ${arr[2].top_rated_film}, ${arr[3].top_rated_film}, ${arr[4].top_rated_film}, ${arr[5].top_rated_film}, ${arr[6].top_rated_film} `;
    allFilms.textContent = arrFilms;

nameOne.textContent = `${arr[0].name}`;
nameTwo.textContent = `${arr[1].name}`;
nameThree.textContent = `${arr[2].name}`;
nameFour.textContent = `${arr[3].name}`;
nameFive.textContent = `${arr[4].name}`;
nameSix.textContent = `${arr[5].name}`;
nameSeven.textContent = `${arr[6].name}`;

careerOne.textContent = `${arr[0].career}`;
careerTwo.textContent = `${arr[1].career}`;
careerThree.textContent = `${arr[2].career}`;
careerFour.textContent = `${arr[3].career}`;
careerFive.textContent = `${arr[4].career}`;
careerSix.textContent = `${arr[5].career}`;
careerSeven.textContent = `${arr[6].career}`;

websiteOne.href = `${arr[0].films}`;
websiteTwo.href = `${arr[1].films}`;
websiteThree.href = `${arr[2].films}`;
websiteFour.href = `${arr[3].films}`;
websiteFive.href = `${arr[4].films}`;
websiteSix.href = `${arr[5].films}`;
websiteSeven.href = `${arr[6].films}`;
});