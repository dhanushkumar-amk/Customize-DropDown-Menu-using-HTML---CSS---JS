const selectBtn = document.querySelector('.select-btn');const items = document.querySelectorAll('.item');

selectBtn.addEventListener('click', () => {
  selectBtn.classList.add('open');
});

items.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('checked');

    let checked = document.querySelectorAll('.checked');

    let btnText = document.querySelector('.btn-text');
    if (checked && checked.length > 0) {
      btnText.innerHTML = `${checked.length} Selected`;
    } else {
      btnText.innerHTML = 'Select language';
    }
  });
});
