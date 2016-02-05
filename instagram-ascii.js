(function (url) {

  var isInstagramPermalink = url.indexOf('www.instagram.com') !== -1;
  var isInstagramImage     = url.indexOf('cdninstagram.com') !== -1;

  if (!isInstagramPermalink && !isInstagramPermalink) {
    return;
  }

  var location;

  if (isInstagramImage) {
    location = url;
  } else {
    var imgs = document.querySelectorAll('img[id^="pImage"]');
    location = imgs[imgs.length - 1].src;
  }

  if (!location) {
    return;
  }

  window.location.href = location + '.html';

})(window.location.href);
