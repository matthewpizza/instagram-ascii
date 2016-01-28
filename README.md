# Instagram image to ASCII

The Instagram CDN has a cool convert to ascii feature. This is a simple way to get to it from an Instagram permalink or image URL.

To use make a bookmark out of the following:

```html
javascript:(function%20(url)%20%7Bvar%20isInstagramPermalink%20%3D%20url.indexOf('www.instagram.com')%20!%3D%3D%20-1%3Bvar%20isInstagramImage%20%20%20%20%20%3D%20url.indexOf('cdninstagram.com')%20!%3D%3D%20-1%3Bif%20(!isInstagramPermalink%20%26%26%20!isInstagramPermalink)%20%7Breturn%3B%7Dvar%20location%3Bif%20(isInstagramImage)%20%7Blocation%20%3D%20url%3B%7D%20else%20%7Bvar%20img%20%3D%20document.querySelector('img%5Bid%5E%3D%22pImage%22%5D')%3Blocation%20%3D%20img.src%3B%7Dif%20(!location)%20%7Breturn%3B%7Dwindow.location.href%20%3D%20location%20%2B%20'.html'%3B%7D)(window.location.href)
```
