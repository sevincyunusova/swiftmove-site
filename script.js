
const navMenuBtn = document.getElementById('nav-menu-icon');
const navLinks = document.getElementById('nav-links');
const lightDarkBtn = document.getElementById('dark-light-btn');
const heroWordItem = document.querySelectorAll('.word-item');
const counters = document.querySelectorAll('.stat-item');
const backToTopBtn = document.getElementById('backToTop');
const track = document.getElementById('sliders');
const slides = document.querySelectorAll('.slider');
const nextBtn = document.getElementById('right-btn');
const prevBtn = document.getElementById('left-btn');
const sliderDots = document.querySelectorAll('.dot');
const faqQuestion = document.querySelectorAll('.question');
const faqAnswer = document.querySelectorAll('.answer');
const faqIcon = document.querySelectorAll('.faqiqon');

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

// SLIDER
const slideCount = slides.length;
let currentIndex = 0;
function updateslider() {
    const slideWidth = slides[0].offsetWidth + 20;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)
    `;
    updateDots()
};
function slider() {
    setInterval(() => {
        currentIndex++;
        if (currentIndex >= slideCount) {
            currentIndex = 0;
        }
        updateslider();
    }, 3000)
}
updateDots();
clickDots();
slider();

// SlIDER BTNS
nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= slideCount) {
        currentIndex = 0;
    }
    updateslider();
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex <= 0) {
        currentIndex = slideCount - 1;
    }
    updateslider();
})

// SLIDER DOTS
function updateDots() {
    let activeDotIndex = Math.floor(currentIndex / 3);

    sliderDots.forEach(dot => {
        dot.classList.remove('bg-[#2563EB]', 'dark:bg-[#60A5FA]');
        dot.classList.add('bg-[#D1D5DB]', 'dark:bg-[#4B5563]');
    });

    sliderDots[activeDotIndex].classList.remove('bg-[#D1D5DB]', 'dark:bg-[#4B5563]');
    sliderDots[activeDotIndex].classList.add('bg-[#2563EB]', 'dark:bg-[#60A5FA]');
};

// DOT CLICK
function clickDots() {
    sliderDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index * 3;
            updateslider();
        })
    })
};
clickDots();


// FAQ
faqQuestion.forEach(question => {
    question.addEventListener('click', () => {
        const currentAnswer = question.nextElementSibling;
        const currentIcon = question.querySelector('.faqiqon');

        faqAnswer.forEach(answer => {
            if (answer !== currentAnswer) {
                answer.classList.add('hidden');
            }
        });

        faqIcon.forEach(icon => {
            if (icon !== currentIcon) {
                icon.textContent = 'add';
            }
        });

        currentAnswer.classList.toggle('hidden');

        if (currentAnswer.classList.contains('hidden')) {
            currentIcon.textContent = 'add';
        } else {
            currentIcon.textContent = 'close';
        }
    });
});


//FAQ BTN QALIB ANIMASIA QALIB 

// faqQuestion.forEach(question=>{
//     question.addEventListener('click', ()=>{
//     const faqAnswer = question.nextElementSibling;
//     const icon = question.querySelector('.faqiqon');
//     faqAnswer.forEach(item=>{
//         if(item != faqAnswer){
//             item.classList.add('hidden')
//         };
//     });
//     faqAnswer.classList.toggle('hidden');
//     faqIcon.forEach(span=>{
//     if(!faqAnswer,classList.contains('hidden')){
//         span.textContent = 'close';
//     }
// });
//     });
// })

