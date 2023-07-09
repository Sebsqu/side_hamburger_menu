const hamburger = document.querySelector('.first');
const hamburger2 = document.querySelector('.second');
const menu = document.querySelector('aside');

hamburger.addEventListener('click', () => {
    menu.style.left = "0px";
    menu.style.transition = "0.5s";
    hamburger.style.display = "none";
    hamburger2.style.display = "inline";
});

hamburger2.addEventListener('click', () => {
    menu.style.left = "-215px";
    menu.style.transition = "0.5s";
    hamburger.style.display = "inline";
    hamburger2.style.display = "none";
});
