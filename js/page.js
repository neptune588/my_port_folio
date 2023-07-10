import $ from 'jquery';
import 'jquery-mousewheel';

import {data} from './data.js';
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

const titleMentStr = "WELCOME TO MY PORTFOLIO";

const startMent = document.getElementById('start_ment');
const tipMent = document.getElementById('tips');

const tipMentDelay = parseInt(window.getComputedStyle(tipMent).getPropertyValue('transition-duration'), 10);

let aniComplete = false;

let cnt = 0;
const repeatTime = 150;
setTimeout(() => {
    let tiping = setInterval(() => {
        //console.log(cnt);

        titleMent.textContent += titleMentStr[cnt];

        cnt++;

        if (cnt >= titleMentStr.length) {
            clearInterval(tiping);
            classAdd(tipingBar, 'tiping_ani');
        }
    }, repeatTime);

}, 1250);

setTimeout(() => {
    classAdd(startMent, 'block_on');
}, 1350 + (repeatTime * titleMentStr.length));

setTimeout(() => {
    classAdd(tipMent, 'width_600');
}, 1400 + (repeatTime * titleMentStr.length));

setTimeout(() => {
    aniComplete = true;
    pageScrollEvent();
}, 1500 + (tipMentDelay * 100) + (repeatTime * titleMentStr.length));


/************** jquery ***************/
function pageScrollEvent() {
    $(function () {
        if (aniComplete) {
            $('#section_wrapper').removeClass('container_overflow');
            $('#header_ex').addClass('block_on');
            $('#progress_bar').addClass('block_on');

            wheelEvent();
            navigatorEvent();
        }
    })
}

const pages = $('#section_wrapper .page');
const navigator = $('#navgation_area > li');

let profileMentAni = false;
function wheelEvent() {
    let scrollEv;
    clearTimeout(scrollEv);

    scrollEv = setTimeout(() => {
        pages.on('wheel', function (e) {
            let delta = e.originalEvent.deltaY;
            //console.log(e.originalEvent.deltaY);
    
            let nowIndex = $(this).index();
            const pageLength = pages.length;

            let prev = 0;
            let next = 0;

            if (delta < 0 && nowIndex > 0) {
    
                $('#progress_bar .gage').css({
                    width: (nowIndex - 1) * 25 + '%',
                })
    
                navigator.removeClass('tab_active');
                navigator.eq(nowIndex - 1).addClass('tab_active');

                prev = $(this).prev().offset().top;
                $('html, body').stop().animate({
                    scrollTop: prev,
                }, 600);
                
            } else if (delta > 0 && nowIndex < pageLength - 1) {
    
                navigator.removeClass('tab_active');
                navigator.eq(nowIndex + 1).addClass('tab_active');

                $('#progress_bar .gage').css({
                    width: (nowIndex + 1) * 25 + '%',
                })
                
                next = $(this).next().offset().top;
                $('html, body').stop().animate({
                    scrollTop: next,
                }, 600);
            }
    
            if(nowIndex === 0 && !profileMentAni) {
                profileMentAni = true;
                
                let mentCnt = 0;
                let prevCnt = 0;
    
                const profileMent = '안녕하세요 늘 낮은 자세로 배움을 추구하는 개발자 지망생 윤서환 입니다!';
    
                let mentTiping = setInterval(() => {
                    $('#ment_box .ment').append(profileMent[mentCnt])
                    
                    mentCnt++;
                    
                    prevCnt = mentCnt;
                    if(mentCnt >= profileMent.length) {
                        clearInterval(mentTiping);
                    }
                }, 150);
            }

        })
    }, 100)

    
}

function navigatorEvent() {
    navigator.on('click', function() {
        let nowIndex = $(this).index();

        let moveOffset = pages.eq(nowIndex).offset().top;

        navigator.removeClass('tab_active');
        navigator.eq(nowIndex).addClass('tab_active');

        $('#progress_bar .gage').css({
            width: nowIndex * 25 + '%',
        })
        $('html, body').stop().animate({
            scrollTop: moveOffset,
        }, 600)
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
