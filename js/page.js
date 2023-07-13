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

/************** project_page ***************/
const {page} = data;

totalCreate();
function totalCreate() {
    const projectBox = document.getElementById('project_box');

    let list = ``;

    list = `
        <div class="video_container">
            <ul id="page_list_area" class="page_list_area_design">
                ${tabListCreate(0)}
            </ul>
            <div class="thumnail_n_video_box">
                ${thumnailVideoCreate(0, 0)}
            </div>
        </div>

        <div class="info_area">
            <div id="info_text_area" class="info_text_area_design">
                ${infoTextCreate(0, 0)}
            </div>
            <ul id="link_btn_list" class="link_btn_list_design">
                ${linkBtnCreate(0)}
            </ul>
        </div>

        <ul id="project_list_area" class="project_list_design">
            ${projectListCreate()}
        </ul>
    `

    projectBox.innerHTML = list;

    totalClickEvent();
}

function totalClickEvent () {

    const infoTextArea = document.getElementById('info_text_area');
    
    const projectList = document.querySelectorAll('.project_list');

    const pageListArea = document.getElementById('page_list_area');

    const thumNVideoBox = document.querySelector('.thumnail_n_video_box');

    const linkBtnArea = document.getElementById('link_btn_list');
    
    let list01 = ``;
    let list02 = ``;

    projectList.forEach((li, index) => {
        li.addEventListener('click', () => {
            //li = 각 project
            //list01에 전달되어야 할것 
            //메뉴는 menuKind의 갯수만큼 생성되어야 한다. 메뉴에 전달되는 value는 li인덱스에 맞는 object에서.pageInfo 반복문 돌리기.

            //list02에 전달되어야 할것
            //list02에는 각 object에 속해있는 pageInfo의 0번쨰 객체배열정보(디폴트)가 출력되어야 한다.
            //그 부분은 불값으로 컨트롤, 불리언이 false면 0번째 출력, true면 다르게 출력 

            //그렇게해서 최종적으로 pageListArea에 list01, infoArea에 list02 전달.
            //list 생성됐으니, 서브메뉴핸들함수 등록
            list01 = `
                ${tabListCreate(index)}
            `
            list02 = `
                ${infoTextCreate(index, 0)}
            `

            pageListArea.innerHTML = list01;
            infoTextArea.innerHTML = list02;

            thumNVideoBox.innerHTML = thumnailVideoCreate(index, 0);

            linkBtnArea.innerHTML = linkBtnCreate(index);

            handleSubClick(index, thumNVideoBox, infoTextArea);
        });
    });
    handleSubClick(0, thumNVideoBox, infoTextArea);
}


function handleSubClick (parentIndex, thumArea, infoArea) {
    const pageList = document.querySelectorAll('.page_li');
    
    let list = ``;
    pageList.forEach((li, index) => {
        li.addEventListener('click', () => {
            //서브페이지 메뉴를 클릭했을때는, 이미 오브젝트 인덱스가 확정되어있는 상태어야한다.

            list = `
                ${infoTextCreate(parentIndex, index)}
            `

            infoArea.innerHTML = list;
            thumArea.innerHTML = thumnailVideoCreate(parentIndex, index);

            //console.log(list);
            for(let j = 0; j < pageList.length; j++) {
                classRemove(pageList[j], "project_tab_on");
            }

            classAdd(li, "project_tab_on");
        });
    });
    
}

function projectListCreate() {
    let innerList = ``;
    let receive = ``;

    page.forEach((object) => {
        innerList = `
            <li class="project_list">
                <div class="icon_img">
                    <img src=${object.iconSrc} alt="${object.projectName}_icon"/>
                </div>
                <p class="icon_name">${object.projectName}</p>
            </li>
        `

        receive += innerList;
    })

    return receive;
}

function thumnailVideoCreate(parentIndex, myIndex) {

    let content = ``;

    let myObject = page[parentIndex];

    console.log(myObject.pageInfo[myIndex]);
    if(myIndex === 0) {
        content = `
            <img src="${myObject.pageInfo[myIndex].thunmnailSrc}" />
        `;
    } else {
        content = `
            <video controls>
                <source src="${myObject.pageInfo[myIndex].videoSrc}" type="video/mp4" />
            </video>
        `;
    }
    
    return content;
}

function linkBtnCreate(myIndex) {
    let innerList = ``;
    let receive = ``;

    console.log(myIndex);
    page[myIndex].link.forEach((object) => {
        innerList = `
            <li class="color_change"><a href="${object.url}" target="_blank">${object.ment}</a></li>
        `

        receive += innerList;
    })
    return receive;
}

function tabListCreate(myIndex) {
    //서브메뉴 리스트를 뽑아내는 역할

    //초기화 안시켜주면 언디파인드 들어감.
    let innerList = ``;
    let innerReceive = ``;

    let myObject = page[myIndex];
    myObject.menuKind.forEach((value, i) => {
        
        if (i === 0) {
            innerList = `
                <li class="page_li color_change project_tab_on">${value}</li>
            `
        } else {
            innerList = `
                <li class="page_li color_change">${value}</li>
            `
        }
        innerReceive += innerList
    })

    return innerReceive;
} 

function infoTextCreate (objectIndex, menuIndex = 0) {

    let myObject = page[objectIndex];

    let innerList = ``;

    if(menuIndex === 0) {
        innerList = `
            <h2 class="project_name">${myObject.projectName}</h2>
            <h2 class="project_sub_title">제작기간</h2>
            <p class="project_ment">${myObject.pageInfo[0].makePeriod}</p>
    
            <h2 class="project_sub_title">사용기술</h2>
            <p class="project_ment">${strMaker(myObject.pageInfo[0].makeSkill)}</p>
    
            <h2 class="project_sub_title">제작환경</h2>
            <p class="project_ment">${strMaker(myObject.pageInfo[0].setting)}</p>
        `;
    } else {
        innerList = `
            <h2 class="project_name">${myObject.projectName}: ${myObject.pageInfo[menuIndex].type}</h2>
    
            <h2 class="project_sub_title">주요기능</h2>
            <p class="project_ment">${myObject.pageInfo[menuIndex].pageContents}</p>
    
            <h2 class="project_sub_title">EPISODE</h2>
            <p class="project_ment">${strMaker(myObject.pageInfo[menuIndex].episode, true)}</p>
        
        `
    }

    return innerList;
}

function strMaker (nowObjectArr, nowBool = false) {
    let strReturn = ``;

    nowObjectArr.forEach((str) => {
        if(!nowBool) {
            strReturn += str;
        } else {
            strReturn += `${str} </br>`;
        }
    });

    return strReturn;
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


// 메뉴 리스트 데이터 동적 변경 --
//메뉴 리스트를 클릭시 밸류값 받아와서 텍스트가 변화된다.
//하지만 디폴트값은 all로주고, all로 생성된 dom을 기준으로 이벤트를 걸어주면 될듯. 
/* function pageCreate(nowIndex, totalBox){

    //all에 해당하는 페이지를 뽑아내는 역할
    totalBox.innerHTML = ``;
    let contents = ``;
    let nowObject = page[nowIndex];
    
    contents = `
        <div class="video_container">
            <ul class="page_list_area">
                ${tabListCreate(nowObject)}
            </ul>
        </div>
        <div class="info_area">
            <div class="info_text_area">
                ${defaultTextCreate(nowObject)}
            </div>
            <ul class="link_btn_list">
                <li class="color_change">기획서 보기</li>
                <li class="color_change">사이트 보기</li>
                <li class="color_change">코드 보기</li>
                <li class="color_change">GITHUB/README</li>
            </ul>
        </div>
        <ul id="project_list_area" class="project_list_design">

        </ul>
    `

    totalBox.innerHTML = contents;

    //서브메뉴 + 프로젝트 리스트 클릭 이벤트 등록 역할
    totalClickEvent();
} */