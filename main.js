window.addEventListener('DOMContentLoaded', () => {
  console.log("main.js読み込みOK");

  // -------------------------------
  // ▼ ① キービジュアルの表示
  // -------------------------------
  const title = document.querySelector('.kv_title');
  const subtitle = document.querySelector('.kv_subtitle');

  if (title && subtitle) {
    setTimeout(() => {
      title.classList.add('show');
    }, 300);

    setTimeout(() => {
      subtitle.classList.add('show');
    }, 800);
  }

  // -------------------------------
  // ▼ ② IntersectionObserver
  // -------------------------------
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  const targets = document.querySelectorAll('.observer-target');
  targets.forEach((target) => observer.observe(target));

  // -------------------------------
  // ▼ ③ ハンバーガーメニュー
  // -------------------------------
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      menu.classList.toggle('active');
    });
  }

// -------------------------------
// ▼ 実績紹介スライダー処理（ループ＋中央表示）
// -------------------------------
const track = document.querySelector('.slider-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const wrapper = document.querySelector('.slider-wrapper');

if (track && prevBtn && nextBtn && wrapper) {
  let items = track.querySelectorAll('.flex_items');
  let itemWidth = items[0].getBoundingClientRect().width;
  let wrapperWidth = wrapper.getBoundingClientRect().width;
  let offset = (wrapperWidth - itemWidth * 3) / 2;

  let currentIndex = 1;
  let isTransitioning = false;

  // ▼ クローン追加（無限ループのため）
  const firstClone = items[0].cloneNode(true);
  const lastClone = items[items.length - 1].cloneNode(true);
  track.appendChild(firstClone);
  track.insertBefore(lastClone, items[0]);

  // ▼ 再取得（クローン含めて）
  items = track.querySelectorAll('.flex_items');

  // ▼ 初期表示位置（中央寄せ調整付き）
  track.style.transform = `translateX(-${itemWidth * currentIndex - offset}px)`;

  // ▼ ループ処理
  track.addEventListener('transitionend', () => {
    isTransitioning = false;
    if (items[currentIndex] === firstClone) {
      track.style.transition = 'none';
      currentIndex = 1;
      track.style.transform = `translateX(-${itemWidth * currentIndex - offset}px)`;
    }
    if (items[currentIndex] === lastClone) {
      track.style.transition = 'none';
      currentIndex = items.length - 2;
      track.style.transform = `translateX(-${itemWidth * currentIndex - offset}px)`;
    }
  });

  // ▼ リサイズ対応
  function updateSliderPosition() {
    items = track.querySelectorAll('.flex_items');
    itemWidth = items[0].getBoundingClientRect().width;
    wrapperWidth = wrapper.getBoundingClientRect().width;

    const visibleCount = Math.floor(wrapperWidth / itemWidth);
    offset = (wrapperWidth - itemWidth * visibleCount) / 2;

    track.style.transition = 'none';
    track.style.transform = `translateX(-${itemWidth * currentIndex - offset}px)`;
    track.offsetHeight;
    track.style.transition = 'transform 0.4s ease';
  }

  window.addEventListener('resize', updateSliderPosition);
  updateSliderPosition(); // 初期表示にも呼ぶ

  // ▼ 前ボタン
  prevBtn.addEventListener('click', () => {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex--;
    track.style.transition = 'transform 0.4s ease';
    track.style.transform = `translateX(-${itemWidth * currentIndex - offset}px)`;
  });

  // ▼ 次ボタン
  nextBtn.addEventListener('click', () => {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex++;
    track.style.transition = 'transform 0.4s ease';
    track.style.transform = `translateX(-${itemWidth * currentIndex - offset}px)`;
  });
}

  // -------------------------------
  // ▼ ④ FAQトグル
  // -------------------------------
  const questions = document.querySelectorAll('.faq_text');
  questions.forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector('span');

      document.querySelectorAll('.answer.open').forEach((el) => {
        if (el !== answer) el.classList.remove('open');
      });

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

  // -------------------------------
  // ▼ ⑤ バリデーション
  // -------------------------------
  const form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log("バリデーション開始");

      const company = document.getElementById('company');
      const name = document.getElementById('name');
      const tel1 = document.getElementById('tel1');
      const tel2 = document.getElementById('tel2');
      const tel3 = document.getElementById('tel3');
      const email = document.getElementById('email');
      const prefecture = document.getElementById('prefecture');
      const inquiry = document.getElementById('inquiry');

      document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
      let hasError = false;

      if (company.value.trim() === "") {
        document.getElementById('error-company').textContent = "会社名を入力してください。";
        hasError = true;
      }
      if (name.value.trim() === "") {
        document.getElementById('error-name').textContent = "お名前を入力してください。";
        hasError = true;
      }
      if (!/^\d{2,5}$/.test(tel1.value.trim()) || !/^\d{1,4}$/.test(tel2.value.trim()) || !/^\d{1,4}$/.test(tel3.value.trim())) {
        document.getElementById('error-tel').textContent = "電話番号を正しく入力してください。";
        hasError = true;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        document.getElementById('error-email').textContent = "有効なメールアドレスを入力してください。";
        hasError = true;
      }
      if (prefecture.value === "" || prefecture.value === "選択してください") {
        document.getElementById('error-prefecture').textContent = "都道府県を選択してください。";
        hasError = true;
      }
      if (inquiry.value === "" || inquiry.value === "ご相談内容を選択") {
        document.getElementById('error-inquiry').textContent = "ご相談内容を選択してください。";
        hasError = true;
      }

      if (!hasError) {
        console.log("送信されました");
        this.submit();
      }
    });
  }
});
