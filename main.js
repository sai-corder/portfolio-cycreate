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
    const currentAnswer = question.nextElementSibling;
    const icon = question.querySelector('span');

    // すでに開いている場合は閉じる
    if (currentAnswer && currentAnswer.classList.contains('answer')) {
      currentAnswer.classList.remove('open');
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
      setTimeout(() => currentAnswer.remove(), 400);
      return;
    }

    // 他の開いている答えをすべて閉じる
    const openAnswers = document.querySelectorAll('.answer.open');
    openAnswers.forEach(answer => {
      const prevQuestion = answer.previousElementSibling;
      const prevIcon = prevQuestion.querySelector('span');

      answer.classList.remove('open');
      prevIcon.classList.remove('fa-minus');
      prevIcon.classList.add('fa-plus');
      setTimeout(() => answer.remove(), 400);
    });

    // 新しい答えを表示
    const answer = document.createElement('div');
    answer.classList.add('answer', 'open');
    answer.textContent = question.dataset.answer;
    question.parentNode.insertBefore(answer, question.nextSibling);

    // アイコン切り替え
    icon.classList.remove('fa-plus');
    icon.classList.add('fa-minus');
  });
});