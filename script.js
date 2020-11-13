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

