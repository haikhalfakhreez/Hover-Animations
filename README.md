# Hover Animations

Get creative with animations for your links, buttons, images, logos, and so on. Easily copy & paste the CSS code, and apply the specified class to your element. Get inspired and modify it on your own!

- [Demo](https://haikhalfakhreez.github.io/Hover-Animations/)
- [How to Use](#how-to-use)

## ℹ What is Hover Animations?
Hover Animations is a collection of CSS styles. 

Hover Animations are all about simplicity. All animations are made using single element, together with the help of their pseudo-elements (```::before``` and ```::after```). No SVG and complex CSS involved. All CSS codes are provided on click, so you can easily copy and paste them.

***Disclaimer***. *The CSS animations may not be supported in older browsers. It is advisable to provide fallback values when applying.*

## ⚙ How to Use
Since the CSS for all the animations can be easily found in the [demo](https://haikhalfakhreez.github.io/Hover-Animations/), it is recommended to just simply copy and paste the code directly.

### A. Copy and Paste
For example, if you want to get the Glow Around effect:

1. Find the Glow Around effect/animation. Can be found in the [demo](https://haikhalfakhreez.github.io/Hover-Animations/).
2. Click on it to open a pop-up window with its CSS. For example:

    ```css
    .glow-around {
        background: #fff;
        transition: box-shadow 0.3s;
    }
    .glow-around:hover, .glow-around:focus, .glow-around:active {
        box-shadow: 0 0 10px #aaa !important;
    }
    ```
3. Copy the code and paste it in your own styesheet.
4. In the HTML, add the specified class.

    ```html
    <a href="#" class="glow-around">My Button</a>
    ```

***Please note that in order for the animation to take an effect, make sure your element is*** ```block``` ***or*** ```inline-block```. ***The CSS given does not include basic element style such as*** ```border```, ```height```, ```width```, ```padding```, ***etc. It serves to be an inspiration / guide for you to use and make it your own.***

Happy styling!

## 📄 MIT License

Copyright (c) 2020 Haikhal Fakhreez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Hire Me

Haikhal Fakhreez - [See Portfolio](https://haikhalfakhreez.github.io/Portfolio/)   |   Contact: **haikhalfakhreez@gmail.com**

Front-end Developer. A passionate coder. Self-taught.