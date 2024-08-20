import './components/title-app.js';
import './components/to-dos.js';
import './components/lit-atrib.js';
import './components/react-pro.js';
import './components/lifecycle.js';

const todosContainer = document.querySelector('#todo-container');

const reactPro = document.querySelector('react-pro');
const addAttrButton = document.querySelector('button#add-attribute');
const removeAttrButton = document.querySelector('button#remove-attribute');

addAttrButton.addEventListener('click', () => {
    reactPro.setAttribute('name', 'Andy Yulianto');
    
});

removeAttrButton.addEventListener('click', () => {
    reactPro.removeAttribute('name');

});

// latihan life cycle
const myLifeElements = document.querySelector('life-cycle');
const changeNameBtn = document.querySelector('button#change-name');
const changeAgeBtn = document.querySelector('button#change-age');

changeNameBtn.addEventListener('click', () => {
    console.log('===== Ubah Nama ====');
    myLifeElements.namel = 'Dicoding Indonesia';
})

changeAgeBtn.addEventListener('click', () => {
    console.log('===== Ubah Umur ====');
    myLifeElements.age = 9;
})


const todos = [
    {
        title: ' Belajar CSS Preprocessor dengan Sass',
        completed: true,
    },
    {
        title: ' Belajar CSS Preprocessor dengan Bootstra',
        completed: true,
    },
    {
        title: ' Belajar Lit Dasar',
        completed: true,
    },
    {
        title: ' Belajar Lit Lanjutan',
        completed: false,
    },
    {
        title: ' Belajar HTTP Client dengan Axios',
        completed: false,
    },
    {
        title: ' Belajar Firebase untuk Aplikasi Web',
        completed: false,
    },
];

todosContainer.setAttribute('todos', JSON.stringify(todos));