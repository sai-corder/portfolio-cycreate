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