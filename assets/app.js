(function () {
  var dialog = document.getElementById('lightbox');
  var image = document.getElementById('lightbox-image');
  var caption = document.getElementById('lightbox-caption');
  if (!dialog || !image || !caption || typeof dialog.showModal !== 'function') return;

  document.querySelectorAll('a.shot').forEach(function (link) {
    link.addEventListener('click', function (event) {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      var thumb = link.querySelector('img');
      event.preventDefault();
      image.src = link.getAttribute('href');
      image.alt = thumb ? thumb.alt : '';
      caption.textContent = link.getAttribute('data-caption') || '';
      dialog.showModal();
    });
  });

  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) dialog.close();
  });
})();
