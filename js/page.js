/************** intro_ani ***************/ 
const introSection = document.getElementById('intro_page');
const introInner = document.querySelector('.intro_container');

const titleMentArea = document.querySelector('.title_ment_area');
const titleMent = document.querySelector('.title_ment');
const tipingBar = document.querySelector('.tiping_bar');

const titleMentArr = [
    'W','E','L','C','O','M','E ','T','O ','M','Y ','P','O','R','T','F','O','L','I','O'
];

const startMent = document.getElementById('start_ment');
const tipMent = document.getElementById('tips');

const controller = document.getElementById('arrow_controller');
const tipMentDelay = parseInt(window.getComputedStyle(tipMent).getPropertyValue('transition-duration'), 10);

let cnt = 0;
const repeatTime = 150;
setTimeout(() => {
    let tiping = setInterval(() => {
        //console.log(cnt);
    
        titleMent.textContent += titleMentArr[cnt];

        cnt ++;
    
        if(cnt >= titleMentArr.length) {
            clearInterval(tiping);
            addClass(tipingBar, 'tiping_ani');
        }
    }, repeatTime);

}, 1250);

setTimeout(() => {
    addClass(startMent, 'block_on');
}, 1350 + (repeatTime * titleMentArr.length));

setTimeout(() => {
    addClass(tipMent, 'width_600');
}, 1400 + (repeatTime * titleMentArr.length));

setTimeout(() => {
    addClass(controller, 'opacity_on');
}, 1400 + (repeatTime * titleMentArr.length));

/************** scroll_event ***************/ 
const controlBtn = document.querySelectorAll('.arrow_btn');
const topBtn = document.getElementById('top_arrow');
const bottomBtn = document.getElementById('bottom_arrow');

/* let topState = false;
let bottomState = false; */

controlBtn.forEach(() => {
    window.addEventListener('keydown', (e) => {
        if(e.key === 'ArrowUp') {
            addClass(topBtn,'color_yellow');
        }
        if(e.key === 'ArrowDown') {
            addClass(bottomBtn,'color_yellow');
        }
    })
    window.addEventListener('keyup', (e) => {
        if(e.key === 'ArrowUp') {
            removeClass(topBtn,'color_yellow');
        }
        if(e.key === 'ArrowDown') {
            removeClass(bottomBtn,'color_yellow');
        }
    })
})


function addClass(el, className) {
    el.classList.add(className);
}
function addClassMulti(el, classArr) {
    classArr.forEach(className => el.classList.add(className));
}

function removeClass(el, className) {
    el.classList.remove(className);
}
function removeClassMulti(el, classArr) {
    classArr.forEach(className => el.classList.remove(className));
}

/* titleMentArr.forEach(text => setTimeout(() => {
    titleMent.textContent += text;
},20)); */