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


/************** skill_page ***************/
const skillListArea = document.getElementById('skill_list_area');

const hoverMentBox = document.getElementById('hover_ment_box');

const hoverMentTitle = document.getElementById('ment_box_name');
const hoverMent = document.getElementById('ment_box_ment');

const {skill} = data;


/* hover chnage event
1. 함수로 타입 전달해서 각 li에 해당 타입과 일치하는 리스트 뽑기 
2. skill_list에 핸들러 등록, 자식요소이므로 enter/leave로 등록
3. 해당 skill_list의 index를 전달, 전체 배열에서 해당 index와 일치하는 데이터 출력 */

skillCreate();
function skillCreate() {
    let totalList = ``;

    totalList = `
        <h2 class="title title_front_end">
            FRONTEND
            <i class="fas fa-angle-down"></i>
        </h2>
        <li id="front_end_list">
            ${listCreate(skill, 'frontEnd')}
        </li>
        <h2 class="title title_tools">
            TOOLS
            <i class="fas fa-angle-down"></i>
        </h2>
        <li id="tools_list">
            ${listCreate(skill, 'tools')}
        </li>
        <h2 class="title title_vesion_control">
            VESION CONTROL
            <i class="fas fa-angle-down"></i>
        </h2>
        <li id="vesion_control_list">
            ${listCreate(skill, 'vesionControl')}
        </li>
    `
    skillListArea.innerHTML = totalList;

    const skillLists = document.querySelectorAll('.skill_list');

    skillLists.forEach((list, index) => {
        list.addEventListener('mouseenter', () => {
            
            mentCreate(skill, index);

            classAdd(hoverMentBox, 'opacity_on');

            hoverMentTitle.style.color = `${skill[index].color[0]}`;
            hoverMentTitle.style.borderBottom = `1px solid ${skill[index].color[0]}`;
        });
        list.addEventListener('mouseleave', () => {
            classRemove(hoverMentBox, 'opacity_on');
        });
    })
}

function listCreate(arr, type) {
    const changeArr = arr.filter(object => object.type === type);

    let list = ``;
    let receive = ``;

    for(let i = 0; i < changeArr.length; i++) {
        list = `
            <div class="skill_list">
                <img src=${changeArr[i].src}/ alt=${changeArr[i].type}_list_img_${i}>
            </div>
        `
        receive += list;
    }

    return receive;
}

function mentCreate(arr, index) {
    let totalText = ``;
    let receive = ``;

    hoverMentTitle.textContent = arr[index].name; 
    arr[index].ment.forEach((str) => {
        totalText = `${str} <br/>`
        receive += totalText;
    })

    hoverMent.innerHTML = receive;
}

/************** contact_page ***************/
const dotArea = document.querySelector('.copy_right > .dot_area');
const dotStr = "...";

let dotCnt = 0;
let dotRepeat = setInterval(() => {
    dotArea.textContent += dotStr[dotCnt];

    dotCnt++;

    if(dotCnt > dotStr.length) {
        dotArea.textContent = "";
        dotCnt = 0;
    }

}, 700);

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

            //인덱스2에서 위로 스크롤했을때 || 인덱스0애서 아래로 스크롤했을때
            const condition = (delta < 0 && nowIndex === 2) || ( delta > 0 && nowIndex === 0); 

            if(condition && !profileMentAni) {
                profileMentShow();
            }

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
    

        })
    }, 100)

    
}

function navigatorEvent() {
    let prevOffset = 0;
    navigator.on('click', function() {
        let nowIndex = $(this).index();
        
        let currentOffset = pages.eq(nowIndex).offset().top;

        navigator.removeClass('tab_active');
        navigator.eq(nowIndex).addClass('tab_active');

        let condition = $(window).scrollTop();
        if(!profileMentAni) {
            profileMentAni = true;
            if(prevOffset > currentOffset && condition ===  pages.eq(2).offset().top) {

                //console.log('2번에서 클릭으로 스크롤을 올리셨습니다.');
                profileMentShow();

            } else if(prevOffset < currentOffset && condition ===  pages.eq(0).offset().top) {

                //console.log('0번에서 클릭으로 스크롤을 내리셨습니다.');
                profileMentShow();

            }
        }

        $('#progress_bar .gage').css({
            width: nowIndex * 25 + '%',
        })
        $('html, body').stop().animate({
            scrollTop: currentOffset,
        }, 600)

        //prev가 current보다 크면 올라간거고 낮으면 내려간거
        prevOffset = currentOffset;

        
    })
}

function profileMentShow() {
    profileMentAni = true;
                
    let mentCnt = 0;

    const profileMent = '안녕하세요 늘 낮은 자세로 배움을 추구하는 개발자 지망생 윤서환 입니다!';

    let mentTiping = setInterval(() => {
        $('#ment_box .ment').append(profileMent[mentCnt])
        
        mentCnt++;
        
        if(mentCnt >= profileMent.length) {
            clearInterval(mentTiping);
        }
    }, 150);
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
