import './components/lifecycle.js';


// latihan life cycle
const myLifeElements = document.querySelector('life-cycle');
const changeNameBtn = document.querySelector('button#change-name');
const changeAgeBtn = document.querySelector('button#change-age');

changeNameBtn.addEventListener('click', () => {
    console.log('===== Ubah Nama ====');
    myLifeElements.name = 'Dicoding Indonesia';
})

changeAgeBtn.addEventListener('click', () => {
    console.log('===== Ubah Umur ====');
    myLifeElements.age = 9;
})