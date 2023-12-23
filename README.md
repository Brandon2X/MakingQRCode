## Overview

Provide a brief description of your solution. What was the challenge, and how did you approach it? Mention any interesting or challenging aspects you encountered.

The challenge for this project was to make the same exact design as the front-end mentor challenge image.You can see a image was uploaded with two heading texts in the bottom. The image was aligned at the center with the two text's aligned right below it. So I saved the image that was linked and put it in the same directory as the index.html file to make the image run more smoothly on the web. And once I had my image and my two texts I then began to focus on the syling which really all was needed to do was center the image, center the text below it, and change the color of the h2 element to grey. To make it more synamic I created a script.js file and linked it with my index.html file and made it so that you can click the box and drag it and move where you'd like.

# # links

https://vercel.com/brandon-2xs-projects/qr-code

https://github.com/Brandon2X/QRCode

### What I Learned

I learned how to style my pages a lot better. I completely forgot that you can break up heading tags. Javascript is very useful in making the web page more dynamic, this can be useful for making a web page more interactive.


### Built with

- HTML 
- CSS 
- javascript


### What I learned


```html
<div class="container" id="moveable-box">
        <h1>
            <img src="image-qr-code.png" alt="QR Code">
            Improve your front-end <br> skills by building projects
        </h1>
        <h2>
            Scan the QR code to visit Frontend <br> Mentor and take your coding skills to <br> the next level
        </h2>
    </div>
    //used the div container variable to make the box for the image, h1 and h2 heading
'''
```js
const moveableBox = document.getElementById("moveable-box");
//used this as a variable to create the clicking and moving condition of the box
```
'''css
.container {
    position: relative;
    text-align: center;
    padding: 20px;
    border: 2px solid #ccc;
    background-color: white;
    cursor: grab;
    border-radius: 10px;
}

'''

## Author
- Frontend Mentor - [@Brandon2X](https://www.frontendmentor.io/profile/Brandon2X)
