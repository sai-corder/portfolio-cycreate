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
    const answer = question.nextElementSibling;
    const icon = question.querySelector('span'); // 各質問の中の+アイコンを取得

    // アコーディオン：他を閉じる
    document.querySelectorAll('.answer.open').forEach((el) => {
      if (el !== answer) el.classList.remove('open');
    });

    // アイコンも他を元に戻す
    document.querySelectorAll('.faq_text span').forEach((el) => {
      if (el !== icon) {
        el.classList.remove('fa-minus');
        el.classList.add('fa-plus');
      }
    });

    answer.classList.toggle('open');
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');
  });
});