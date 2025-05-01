window.addEventListener('DOMContentLoaded' , () => {
    const title = document.querySelector('.kv_title');
    const subtitle = document.querySelector('.kv_subtitle');

    setTimeout(() => {
        title.classList.add('show');
    }, 300);

    setTimeout(() => {
        subtitle.classList.add('show');
    }, 800);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const targets = document.querySelectorAll('.observer-target');
targets.forEach((target) => {
    observer.observe(target);
});

//ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

//faqトグル表示
const questions = document.querySelectorAll('.faq_text');

questions.forEach((question) => {
    question.addEventListener('click', () => {
        const next = question.nextElementSibling;

        if(next && next.classList.contains('answer')) {
            next.remove();
        } else {
            const answer = document.createElement('div');
            answer.classList.add('answer');

            answer.textContent = question.dataset.answer;
            question.parentNode.insertBefore(answer, question.nextSibling);
        };
    });
});