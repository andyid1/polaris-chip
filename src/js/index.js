import './components/title-app.js';
import './components/to-dos.js';

const todosContainer = document.querySelector('#todo-container');

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