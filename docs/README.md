# English

For english version refer to docs/README.eng.md

-------

# О приложении

Приложение было написано в целях изучить React. Писалось приложение по [видео](https://youtu.be/GNrdg3PzpJQ) от Ulbi. Писал приложение следующим способом, сначала отсматривал фрагмент видео, смотрел что мы сейчас будем реализовывать и какие вещи для реализации той или иной фичи использует автор, после чего составлял себе таск в Obsidian где описывал:

* Что нужно реализовать (без подробностей, допустим нужно сделать сортировку постов по разным критериям и я просто писал "Сделать сортировку постов по заголовку и сортировку по контенту")

* Описывал какие технологии мне понадобятся для реализации

Когда таск был готов, я составлял план псевдокодом или просто схемой в условном паинте, чтобы прикинуть шаги реализации и уже тогда шел выполнять таск. Гуглил материал по технологиям, читал документацию и писал такое решение, которое было именно у меня в голове, а не просто копируя код из видео.

Когда реализация была готова, я возвращался к видео и смотрел как это реализовано в нем и смотрел какие моменты я могу улучшить у себя.

# Запуск приложения и его содержание

## Запуск
Чтобы запустить приложение нужно склонировать репозиторий к себе на компьютер и подгрузить зависимости командой `npm install`

Когда загрузка завершится останется запустить приложение командой `npm start`

## Что из себя представляет приложение

Приложение состоит из нескольких страниц:
* `About` - страница с кратким описанием приложения 
* `Home` - страница с приветствием
* `Blog` - страница с постами
* `AuthPage` - страница с окном авторизации

Какой-то общей цели у приложения нет и оно не несет в себе никакой идеи, разрабатывалось чисто чтобы набить руку.

# Что было изучено и реализовано

## База реакта
* Узнал как правильно превращать массив данных в массив элементов. Атрибут `key`
* Что такое `JSX` и как правильно разбивать приложение на компоненты
* Двустороннее связывание
* Пропсы и `props.children`
* Управляемые и неуправляемые компоненты
* Условный рендер компонентов
* Не совсем реакт, но изучил css модули для стилизации компонентов
* Классовые и функциональные компоненты
* Хуки

Возможно что-то забыл, т.к. подобные вещи стали уже такими привычными, что ими просто пользуешься и не держишь их в голове. 

## Базовые хуки
Почти все основные ванильные хуки:
* `useState()`
* `useRef()`
* `useEffect()`
* `useContext()`
* `useMemo()`

## Кастомные хуки
Научился писать кастомные хуки и узнал зачем они нужны. Кастомные хуки в приложении:
* `useFetching()` - хук для подгрузки данных с сервера
* `usePosts()` - хук для работы с постами
* `useObserver()` - хук для работы с Intersecting Observer API

## Роутинг
Познакомился с react-router-dom и научился делать роутинг по приложению через соответствующие компоненты:
* `BrowserRouter`
* `Routes`
* `Route`
* `Link`
* `Outlet`
* `NavLink`

А также узнал два фундаментальных хука из библиотеки:

* `useParams`
* `useNavigate`

## Запросы к серверу
Поработал с такой библиотекой как `axios` для создания исходящих запросов к серверу с клиента.

Например это используется для подгрузки постов с `jsonplaceholder` или открытия конкретного поста, который тоже подгружается с `jsonplaceholder`, а также подгрузку комментариев к посту.

## Анимации
Немножко потыкал анимации элементов в такой библиотеке как `React Transition Group`

## А также

Была подтянута куча JS базы по типу: 

* `работы с объектами`
* `работы с массивами`
* `операторов расширения и сбора аргументов`
* `асинхронного программирования`
* `классов`
* `работы с ивентами`
* `тернарного оператора`

И по ощущениям еще некоторых вещей, которые я просто не могу вспомнить

## Заключение
Возможно что-то я упустил, но к сожалению весь объем полученной информации я просто не могу удержать в голове. Написал все что вспомнил и смог найти в приложении и журнале который я вел по ходу разработки, он есть в `docs/GUIDE.md`

По итогу получился очень емкий проект, который дал мне кучу знаний, за что я крайне благодарен [вот этому](https://www.youtube.com/@UlbiTV) человеку