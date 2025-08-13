document.querySelectorAll('.duration-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.duration-btn').forEach(el => el.classList.remove('selected'));
    btn.classList.add('selected');


    const price = btn.dataset.price;
  });
});

  const buttons = document.querySelectorAll('.duration-btn');
  const supportText = document.querySelector('.support-info');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      const supportType = btn.getAttribute('data-support');

      if (supportType === 'advance') {
        supportText.innerHTML = '<i class="fas fa-headset"></i> Support avancé – Réponse sous 24h';
      } else if (supportType === 'expert') {
        supportText.innerHTML = '<i class="fas fa-headset"></i> Support expert – Réponse sous 12h';
      }
    });
  });
