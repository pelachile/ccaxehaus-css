window.onload = () => {
  if (/iP(hone|ad)/.test(window.navigator.userAgent)) {
    document.body.addEventListener('touchstart', function() { }, false);
  }
}
