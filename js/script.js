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

// const adv = document.querySelector('.promo__adv');
const adv = document.getElementsByClassName('promo__adv');
const genre = document.querySelector('.promo__genre');
const bg = document.querySelector('.promo__bg');

adv[0].remove();
//task 1 complete
genre.textContent = "Драма";
//task 2 complete
bg.style.cssText = 'background-image: url(img/bg.jpg)';
//task 3 complete





