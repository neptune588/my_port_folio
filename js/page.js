const introSection = document.getElementById('intro_page');
const introInner = document.querySelector('.intro_container');

const titleMent = document.querySelector('.title_ment');
const tipingBar = document.querySelector('.tiping_bar');

const titleMentArr = [
    'W','E','L','C','O','M','E','T','O','M','Y','P','O','R','T','F','O','L','I','O'
];

const startMent = document.getElementById('start_ment');
let cnt = 0;
setTimeout(() => {
    let tiping = setInterval(() => {
        //console.log(cnt);
    
        titleMent.innerHTML += `<span class="text">${titleMentArr[cnt]}</span>`;

        cnt ++;
    
        if(cnt >= titleMentArr.length) {
            clearInterval(tiping);
        }
    }, 150);

},1250);

setTimeout(() => {
    addClass(startMent, 'block_on');
},1350 + (150 * titleMentArr.length));

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