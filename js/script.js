/* Задания на урок:

 */

'use strict';

document.addEventListener('DOMContentLoaded', () =>{
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
    const poster = document.querySelector('.promo__bg'); //Получение объекта главного экрана фильма
    const genre = poster.querySelector('.promo__genre');
    const filmsList = document.querySelector('.promo__interactive-list'); //получение эл-ов со страницы
    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.adding__input');
    
    const deleteAdv = (arr) =>{
        arr.forEach(item =>{
            item.remove();
        });
    };
    deleteAdv(adv);
   

    //task 1 complete
    genre.textContent = "Драма";
    //task 2 complete
    poster.style.backgroundImage = 'url("img/bg.jpg")';
    //task 3 complete commenting
    movieDB.movies.sort();
    
    function renderMovies(films, parent){
        parent.innerHTML = "";
        films.forEach(function(item, i){ //Перепишем код для чёткого создания элемента
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${item} 
                <div class="delete"></div>
            </li>
            `;
        });
        
    }
    renderMovies(movieDB.movies, filmsList);
    
    // movieDB.movies.forEach(function(item, i){ //Перепишем код для чёткого создания элемента
    //     filmsList.innerHTML += `
    //     <li class="promo__interactive-item">${i + 1} ${item} 
    //         <div class="delete"></div>
    //     </li>
    //     `;
    // });
    
    //task 4 complete
    //task 5 complete
    
    
    // const typeClick = (e) => { //функция при евенте пишет цель и тип евента
    //     console.log(e.target);
    //     console.log(e.type);
    // };
    // document.addEventListener('click', typeClick); //Обработчик на документ, при клике вызывает функцию
    
    // let i = 0;
    // const dlt = (event) =>{
    //     i++;
        
    //     if ( i == 3){
    //         filmsList.removeEventListener('click', dlt); //При клике 3 раза убирает слушателя события
    //     }
    //     console.log(i);
    // };
    
    // filmsList.addEventListener('mouseenter', typeClick);
    
    // filmsList.addEventListener('click', (event, dlt) =>{
    //     console.log('done'); //При клике на элементы списка фильмов выводит сообщение в консоль
    // });
    // Изучение DOM-элементов
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (addInput.value != ""){
            const newFilm = addInput.value;
            movieDB.movies.push(newFilm);
            movieDB.movies.sort(); //Сортировка фильмов по алфавиту
            renderMovies(movieDB.movies, filmsList);
            
        }
    });
    
});


//  15^44!