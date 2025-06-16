document.querySelectorAll('.service').forEach(service => {
  service.addEventListener('mouseenter', () => {
    if (navigator.vibrate) navigator.vibrate(10);
  });
});
