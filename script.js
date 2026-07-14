
const navMenuBtn = document.getElementById('nav-menu-icon');
const navLinks = document.getElementById('nav-links');
const lightDarkBtn = document.getElementById('dark-light-btn');
const heroWordItem = document.querySelectorAll('.word-item');
const counters = document.querySelectorAll('.stat-item');
const backToTopBtn = document.getElementById('backToTop');

// NAVBAR MENU BUTTON
navMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');

    if (navLinks.classList.contains('hidden')) {
        navMenuBtn.textContent = 'menu';
    }
    else {
        navMenuBtn.textContent = 'close';
    }
});

// NAVBAR DARK-LIGHT MODE BUTTON
lightDarkBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        lightDarkBtn.firstElementChild.textContent = 'light_mode';
    } else {
        lightDarkBtn.firstElementChild.textContent = 'dark_mode';
    }
});

// HERO WORD CYCLE
function wordcycle() {
    let currentIndex = 0;
    const wordCount = heroWordItem.length;

    setInterval(() => {
        heroWordItem[currentIndex].classList.replace('inline-block', 'hidden');
        currentIndex += 1;
        if (currentIndex >= wordCount) {
            currentIndex = 0;
        }
        heroWordItem[currentIndex].classList.replace('hidden', 'inline-block');
    }, 2000);
}
wordcycle();

// COUNTER
function counter() {
    counters.forEach(statItem => {
        const target = Number(statItem.dataset.target);
        let nowNum = 0;
        const interval = setInterval(() => {
            nowNum += Math.ceil(target / 100); statItem.textContent = nowNum;
            if (nowNum >= target) {
                clearInterval(interval);
            }
        }, 10)
    })
}
counter()

// Back To Top Button
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        backToTopBtn.classList.remove('hidden');
    }
    else {
        backToTopBtn.classList.add('hidden');
    }
})
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



// lightDarkBtn.addEventListener('click', () => {
//     document.documentElement.classList.toggle('dark');
// });





// lightDarkBtn.addEventListener('click', () => {
//     document.documentElement.classList.toggle('dark');
//     let currentText = lightDarkBtn.textContent;
//     if (currentText.includes('dark')) {
//         lightDarkBtn.textContent = currentText.replace('dark', 'light');
//     }
//     else{
//         lightDarkBtn.textContent = currentText.replace('light', 'dark');
//     }
// });
