const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.nav-sidebar');
const main = document.querySelector('main');

// Burger button toggle the sidebar
burger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Close sidebar when click on body
main.addEventListener('click', () => {
    if (sidebar.classList.contains('open')) {
        sidebar.classList.toggle('open');
    }
});


const pres = document.querySelectorAll('pre');
const pre1 = document.getElementById('pre1');
const pre2 = document.getElementById('pre2');
const pre3 = document.getElementById('pre3');
const pre4 = document.getElementById('pre4');
const pre5 = document.getElementById('pre5');
const pre6 = document.getElementById('pre6');
const pre7 = document.getElementById('pre7');
const pre8 = document.getElementById('pre8');
const pre9 = document.getElementById('pre9');
const pre10 = document.getElementById('pre10');

const pre11 = document.getElementById('pre11');
const pre12 = document.getElementById('pre12');
const pre13 = document.getElementById('pre13');
const pre14 = document.getElementById('pre14');
const pre15 = document.getElementById('pre15');
const pre16 = document.getElementById('pre16');
const pre17 = document.getElementById('pre17');
const pre18 = document.getElementById('pre18');
const pre19 = document.getElementById('pre19');
const pre20 = document.getElementById('pre20');

const pre21 = document.getElementById('pre21');
const pre22 = document.getElementById('pre22');
const pre23 = document.getElementById('pre23');
const pre24 = document.getElementById('pre24');
const pre25 = document.getElementById('pre25');
const pre26 = document.getElementById('pre26');
const pre27 = document.getElementById('pre27');
const pre28 = document.getElementById('pre28');
const pre29 = document.getElementById('pre29');
const pre30 = document.getElementById('pre30');

const pre31 = document.getElementById('pre31');
const pre32 = document.getElementById('pre32');
const pre33 = document.getElementById('pre33');
const pre34 = document.getElementById('pre34');
const pre35 = document.getElementById('pre35');

const btns = document.querySelectorAll('.btn');
const checkBtn = document.getElementsByClassName('btn');
const big = document.querySelector('.big');
const small = document.querySelector('.small');
const closeBtn = document.querySelector('.close-btn');
const header = document.querySelector('header');
let status = false;


// Open popup when click on buttton
btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        big.classList.toggle('show');
        small.classList.toggle('show');
        header.classList.toggle('hide');
        status = true;
        switch (checkBtn[index].id) {
            case "demo-div":
                pre31.classList.toggle('show');
                break;

            // 1. Background Animations
            case "slide-left":
                pre1.classList.toggle('show');
                break;
            case "slide-right":
                pre2.classList.toggle('show');
                break;
            case "slide-up":
                pre3.classList.toggle('show');
                break;
            case "slide-down":
                pre4.classList.toggle('show');
                break;
            case "background-in":
                pre5.classList.toggle('show');
                break;
            case "background-out":
                pre6.classList.toggle('show');
                break;
            case "horizontal-window-in":
                pre7.classList.toggle('show');
                break;
            case "horizontal-window-out":
                pre8.classList.toggle('show');
                break;
            case "vertical-window-in":
                pre9.classList.toggle('show');
                break;
            case "vertical-window-out":
                pre10.classList.toggle('show');
                break;

            // 2. Transition Animations
            case "move-left":
                pre11.classList.toggle('show');
                break;
            case "move-right":
                pre12.classList.toggle('show');
                break;
            case "float":
                pre13.classList.toggle('show');
                break;
            case "dive":
                pre14.classList.toggle('show');
                break;
            case "shrink":
                pre15.classList.toggle('show');
                break;
            case "grow":
                pre16.classList.toggle('show');
                break;
            case "pop-in":
                pre17.classList.toggle('show');
                break;
            case "pop-out":
                pre18.classList.toggle('show');
                break;
            case "shake-horizontal":
                pre19.classList.toggle('show');
                break;
            case "shake-vertical":
                pre20.classList.toggle('show');
                break;

            // 3. Border Animations
            case "underline-border":
                pre21.classList.toggle('show');
                break;
            case "underline-left":
                pre22.classList.toggle('show');
                break;
            case "underline-right":
                pre23.classList.toggle('show');
                break;
            case "underline-center":
                pre24.classList.toggle('show');
                break;
            case "border-in":
                pre25.classList.toggle('show');
                break;
            case "border-out":
                pre26.classList.toggle('show');
                break;
            case "wave-in":
                pre27.classList.toggle('show');
                break;
            case "wave-out":
                pre28.classList.toggle('show');
                break;
            case "gradient-border":
                pre29.classList.toggle('show');
                break;
            case "corner-fill":
                pre30.classList.toggle('show');
                break;

            // 4. Shadow Animations
            case "glow-around":
                pre31.classList.toggle('show');
                break;
            case "glow-inset":
                pre32.classList.toggle('show');
                break;
            case "shadow-outset":
                pre33.classList.toggle('show');
                break;
            case "float-outset":
                pre34.classList.toggle('show');
                break;
            case "float-shadow":
                pre35.classList.toggle('show');
                break;

            default:
                console.log('No case prepare for this yet');
        }
    });
});

// Close popup using close button
closeBtn.addEventListener('click', () => {
    if (status == true) {
        big.classList.toggle('show');
        small.classList.toggle('show');
        header.classList.toggle('hide');
        status = false;

        pres.forEach((pre) => {
            pre.classList.remove('show');
        });
    }
});

// Close popup when touch outside
btns.forEach((btn, index) => {
    big.addEventListener('click', () => {
        if (status == true) {
            big.classList.toggle('show');
            small.classList.toggle('show');
            header.classList.toggle('hide');
            status = false;
            
            pres.forEach((pre) => {
                pre.classList.remove('show');
            });
        }
    });
});