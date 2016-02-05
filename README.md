# Instagram image to ASCII

The Instagram CDN has a cool convert to ascii feature. (For example, [this image](https://www.instagram.com/p/BAX9VUgD2ts/) becomes [this](https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/12547552_157284714640510_743342067_n.jpg.html)!) This is a simple way to get to it from an Instagram permalink or image URL.

To use make a bookmark out of the following:

```html
javascript:(function%20(url)%20%7Bvar%20isInstagramPermalink%20%3D%20url.indexOf('www.instagram.com')%20!%3D%3D%20-1%3Bvar%20isInstagramImage%20%20%20%20%20%3D%20url.indexOf('cdninstagram.com')%20!%3D%3D%20-1%3Bif%20(!isInstagramPermalink%20%26%26%20!isInstagramPermalink)%20%7Breturn%3B%7Dvar%20location%3Bif%20(isInstagramImage)%20%7Blocation%20%3D%20url%3B%7D%20else%20%7Bvar%20imgs%20%3D%20document.querySelectorAll('img%5Bid%5E%3D%22pImage%22%5D')%3Blocation%20%3D%20imgs%5Bimgs.length%20-%201%5D.src%3B%7Dif%20(!location)%20%7Breturn%3B%7Dwindow.location.href%20%3D%20location%20%2B%20'.html'%3B%7D)(window.location.href)
```
