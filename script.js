// const navMenuOpen = document.getElementById('nav-menu-open');
// const navMenuClose = document.getElementById('nav-menu-close');
const navMenuBtn = document.getElementById('nav-menu-icon');
const navLinks = document.getElementById('nav-links');

navMenuBtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('hidden');

    if(navLinks.classList.contains('hidden')){
        navMenuBtn.textContent = 'menu';
    }
    else{
        navMenuBtn.textContent = 'close';
    }
});

// navMenuOpen.addEventListener('click', () => {
//     navLinks.classList.remove('hidden');
//     navLinks.classList.add('block');

//     navMenuOpen.classList.remove('block');
//     navMenuOpen.classList.add('hidden');

//     navMenuClose.classList.remove('hidden');
//     navMenuClose.classList.add('block');
// })

// navMenuClose.addEventListener('click', () => {
//     navLinks.classList.remove('block');
//     navLinks.classList.add('hidden');

//     navMenuOpen.classList.remove('hidden');
//     navMenuOpen.classList.add('block');

//     navMenuClose.classList.remove('block');
//     navMenuClose.classList.add('hidden');
// })