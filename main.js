// 전체 스크립트 엄격 모드 구문
'use strict';

// Make navbar transparent when it is on the top
//querySelector 이용 시, ctrl or cmd 를 이용해서 함수가 정의된 곳으로 이동 가능.
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
// 스크롤이 될 때마다 {} 블럭 안을 실행
document.addEventListener('scroll', () => {
    //console.log(window.scrollY);
    //console.log(`navbarHeight: ${navbarHeight}`);
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar__dark');
    }else{
        navbar.classList.remove('navbar__dark');
    }
});

//Handle scrolling when tappint on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    //console.log(event.target.dataset.link);
    scrollIntoView(link);
});

//Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});

//Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    //console.log(1 - window.scrollY / homeHeight);
    home.style.opacity = 1 - window.scrollY / homeHeight;
})

//Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    }else {
        arrowUp.classList.remove('visible');
    }
});

//Handle click on "arrow up" button
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});

//Work: Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }
    // console.log(filter);

    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) => {
            console.log(project);
            if (filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300); // 0.3초가 지나면 우리가 등록한 animation을 다시 없앰
             // opacity 0 -> 1 (원상복귀)

    // console.log(`--------------`);
    // for(let project of projects) {
    //     console.log(project);
    // }

    // console.log(`--------------`);
    // let project;
    // for (let i = 0; i < projects.length; i++) {
    //     project = projects[i];
    //     console.log(project);
    // }
});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}