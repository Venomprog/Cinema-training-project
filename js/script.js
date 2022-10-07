/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img');
const poster = document.querySelector('.promo__bg');
const genre = poster.querySelector('.promo__genre');
const filmsList = document.querySelector('.promo__interactive-list'); //получение эл-ов со страницы


movieDB.movies.sort();

adv.forEach(item =>{
    item.remove();
});
//task 1 complete
genre.textContent = "Драма";
//task 2 complete
poster.style.backgroundImage = 'url("img/bg.jpg")';
//task 3 complete commenting
filmsList.innerHTML = "";

movieDB.movies.forEach(function(item, i){ //Перепишем код для чёткого создания элемента
    filmsList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${item} 
        <div class="delete"></div>
    </li>
    `;
});

//task 4 complete
//task 5 complete


const typeClick = (e) => { //функция при евенте пишет цель и тип евента
    console.log(e.target);
    console.log(e.type);
};
document.addEventListener('click', typeClick); //Обработчик на документ, при клике вызывает функцию

let i = 0;
const dlt = (event) =>{
    i++;
    
    if ( i == 3){
        filmsList.removeEventListener('click', dlt); //При клике 3 раза убирает слушателя события
    }
    console.log(i);
};

// filmsList.addEventListener('mouseenter', typeClick);

// filmsList.addEventListener('click', (event, dlt) =>{
//     console.log('done'); //При клике на элементы списка фильмов выводит сообщение в консоль
// });

