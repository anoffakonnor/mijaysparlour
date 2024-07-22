//Toggle Navigation Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
});

const header = document.querySelector('header');
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', ()=>{
    if(window.scrollY > heroSection.offsetHeight){
        /*adjust the scroll position value*/
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

//Get all accordion headers
const titles = document.querySelectorAll('.title');

titles.forEach((title) => {
    title.addEventListener('click',() =>{
        title.classList.toggle('active');
        const content = title.nextElementSibling;
        content.style.display = content.style.display === 'block'? 'none':'block';
    });
});