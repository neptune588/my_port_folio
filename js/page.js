import $ from 'jquery';
import 'jquery-mousewheel';

let aniComplete = false;
/************** all ***************/
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
    }
})

window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
    }
})


/************** intro_ani ***************/
const titleMent = document.querySelector('.title_ment');
const tipingBar = document.querySelector('.tiping_bar');

const titleMentArr = [
    'W', 'E', 'L', 'C', 'O', 'M', 'E ', 'T', 'O ', 'M', 'Y ', 'P', 'O', 'R', 'T', 'F', 'O', 'L', 'I', 'O'
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

        cnt++;

        if (cnt >= titleMentArr.length) {
            clearInterval(tiping);
            classAdd(tipingBar, 'tiping_ani');
        }
    }, repeatTime);

}, 1250);

setTimeout(() => {
    classAdd(startMent, 'block_on');
}, 1350 + (repeatTime * titleMentArr.length));

setTimeout(() => {
    classAdd(tipMent, 'width_600');
}, 1400 + (repeatTime * titleMentArr.length));

setTimeout(() => {
    aniComplete = true;
    pageScrollEvent();
}, 1500 + (tipMentDelay * 100) + (repeatTime * titleMentArr.length));


/************** jquery ***************/
function pageScrollEvent() {
    $(function () {
        if (aniComplete) {
            $('#section_wrapper').removeClass('container_overflow');
            $('#header_ex').addClass('block_on');

            wheelTotalEvent();
        }
    })
}

let profileMentAni = false;
function wheelTotalEvent() {
    const pages = $('#section_wrapper .page');

    pages.on('wheel', function (e) {
        let delta = e.originalEvent.deltaY;
        //console.log(e.originalEvent.deltaY);

        
        let nowIndex = $(this).index();
        const pageLength = pages.length;

        //console.log(delta);

        let prev = 0;
        let next = 0;

        if (delta < 0 && nowIndex > 0) {
            //console.log(delta, nowIndex);
            prev = $(this).prev().offset().top;
            //console.log(prev);
            $('html, body').stop().animate({
                scrollTop: prev,
            }, 600);
            
        } else if (delta > 0 && nowIndex < pageLength - 1) {
            //console.log(delta, nowIndex);
            next = $(this).next().offset().top;
            $('html, body').stop().animate({
                scrollTop: next,
            }, 600);

        } else {
            return;
        }

        if(nowIndex === 0 && !profileMentAni) {
            
            let mentCnt = 0;
            
            const profileMent = '안녕하세요 늘 낮은 자세로 배움을 추구하는 개발자 지망생 윤서환 입니다!';
            let mentTiping = setInterval(() => {
                $('#ment_box .ment').append(profileMent[mentCnt])
                
                mentCnt++;
                
                if(mentCnt >= profileMent.length) {
                    clearInterval(mentTiping);
                    profileMentAni = true;
                }
            }, 150);
        }
    })
}

/************** js fnc ***************/
function classAdd(el, className) {
    el.classList.add(className);
}

function classAddMulti(el, classArr) {
    classArr.forEach(className => el.classList.add(className));
}

function classRemove(el, className) {
    el.classList.remove(className);
}

function classRemoveMulti(el, classArr) {
    classArr.forEach(className => el.classList.remove(className));
}


/* const controlBtn = document.querySelectorAll('.arrow_btn');
const topBtn = document.getElementById('top_arrow');
const bottomBtn = document.getElementById('bottom_arrow'); */

/* let topState = false;
let bottomState = false; */

/* controlBtn.forEach(() => {
    window.addEventListener('keydown', (e) => {
        if(e.key === 'ArrowUp') {
            addClass(topBtn,'color_yellow');
        } else if(e.key === 'ArrowDown') {
            addClass(bottomBtn,'color_yellow');
        }
    })
    window.addEventListener('keyup', (e) => {
        if(e.key === 'ArrowUp') {
            removeClass(topBtn,'color_yellow');
        } else if(e.key === 'ArrowDown') {
            removeClass(bottomBtn,'color_yellow');
        }
    })
}) */