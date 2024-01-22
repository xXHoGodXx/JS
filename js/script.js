/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */


const movieDB = {
    movies: [
        "1. Логан",
        "2. Лига справедливости",
        "3. Ла-ла лэнд",
        "4. Одержимость",
        "5. Скотт Пилигрим против..."
    ]
};

//1

let element = document.querySelector('.promo-element')
element.remove()

//2

let tit = document.querySelector('.promo__genre')
tit.textContent = 'Драма'

//3

let bg = document.querySelector('.promo__bg')
bg.style.backgroundImage = `url('./img/bg.jpg')`

//4

let main = document.querySelector('.promo__interactive-list')
movieDB.movies.sort()
for(let item of movieDB.movies) {
    let list = document.createElement('li')
    main.append(list)
    list.textContent = item
    list.classList.add('promo__interactive-item')
}

