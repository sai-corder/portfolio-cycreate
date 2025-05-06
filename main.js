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

//実績紹介をカルーセル化
const track = document.querySelector('.slider-track');
let items = document.querySelectorAll('.slider-track .flex_items');
let currentIndex = 1;
let isTransitioning = false;
let startX = 0;
let deltaX = 0;
let isDragging = false;

// クローン追加
const firstClone = items[0].cloneNode(true);
const lastClone = items[items.length - 1].cloneNode(true);
track.appendChild(firstClone);
track.insertBefore(lastClone, items[0]);

// 再取得（クローン含む）
items = document.querySelectorAll('.slider-track .flex_items');
let itemWidth = items[0].getBoundingClientRect().width;

track.style.transform = `translateX(${-itemWidth * currentIndex}px)`;

// 移動関数
function moveToIndex(index) {
  isTransitioning = true;
  track.style.transition = 'transform 0.4s ease';
  track.style.transform = `translateX(${-itemWidth * index}px)`;
}

// 次へ
document.querySelector('.next').addEventListener('click', () => {
  if (isTransitioning) return;
  currentIndex++;
  moveToIndex(currentIndex);
});

// 前へ
document.querySelector('.prev').addEventListener('click', () => {
  if (isTransitioning) return;
  currentIndex--;
  moveToIndex(currentIndex);
});

// ループ処理
track.addEventListener('transitionend', () => {
  track.style.transition = 'none';

  if (currentIndex === items.length - 1) {
    currentIndex = 1;
    track.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
  }
  if (currentIndex === 0) {
    currentIndex = items.length - 2;
    track.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
  }

  isTransitioning = false;
});

// スマホ対応（touchイベント）
track.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
  track.style.transition = 'none';
});
track.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  deltaX = e.touches[0].clientX - startX;
  track.style.transform = `translateX(${(-itemWidth * currentIndex) + deltaX}px)`;
});
track.addEventListener('touchend', () => {
  if (!isDragging) return;
  isDragging = false;

  if (Math.abs(deltaX) > itemWidth / 4) {
    if (deltaX < 0) {
      currentIndex++;
    } else {
      currentIndex--;
    }
  }
  moveToIndex(currentIndex);
  deltaX = 0;
});

// 横幅を再取得
function updateWidth() {
    itemWidth = document.querySelector('.slider-track .flex_items').offsetWidth;
    track.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
}

window.addEventListener('resize', updateWidth);

//▼お問い合わせページcontact.htmlの入力バリデーション
document.addEventListener('DOMContentLoaded', () => {
  // ▼バリデーション用処理
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
      let errors = [];

      // 会社名
      if (!form.company.value.trim()) {
          errors.push("会社名を入力してください。");
      }

      // お名前
      if (!form.name.value.trim()) {
          errors.push("お名前を入力してください。");
      }

      // 電話番号
      const tel1 = form.tel1.value.trim();
      const tel2 = form.tel2.value.trim();
      const tel3 = form.tel3.value.trim();
      const telRegex = /^\d+$/;
      if (!(tel1 && tel2 && tel3) || !telRegex.test(tel1 + tel2 + tel3)) {
          errors.push("電話番号を正しく入力してください（数字のみ）。");
      }

      // メール
      const email = form.email.value.trim();
      const emailRegex = /^[\w\.-]+@[\w\.-]+\.\w+$/;
      if (!email || !emailRegex.test(email)) {
          errors.push("正しいメールアドレスを入力してください。");
      }

      // ご相談内容
      if (!form.inquiry.value) {
          errors.push("ご相談内容を選択してください。");
      }

      if (errors.length > 0) {
          e.preventDefault();
          alert(errors.join('\n'));
      }
  });
});

