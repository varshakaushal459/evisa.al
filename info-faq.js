(function () {
  document.querySelectorAll('.info-faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.info-faq-item');
      var wasOpen = item.classList.contains('is-open');
      document.querySelectorAll('.info-faq-item.is-open').forEach(function (i) {
        i.classList.remove('is-open');
      });
      if (!wasOpen) item.classList.add('is-open');
    });
  });
})();
