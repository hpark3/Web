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
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar__dark');
    }else{
        navbar.classList.remove('navbar__dark');
    }
})