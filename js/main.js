// Фільтр проектів в порфтоліо
const list = document.querySelector('.port__list');
const items = document.querySelectorAll('.port__item');

function filter() {
  const filters = document.querySelectorAll('.filters__item');

  filters.forEach(filter => {
    filter.addEventListener('click', event => {
      const targetId = event.currentTarget.dataset.id;
      console.log(targetId);

      items.forEach(item => {
        if (targetId === 'all' || item.classList.contains(targetId)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

filter();

// Модельне вікно для кнопки "Замовити послугу"
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

