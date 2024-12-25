// active hamburger menu
let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist")
menuIcon.addEventListener("click", ()=>{
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

//remove navlist
navlist.addEventListener("click", ()=>{
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
});

//rotate text js code
let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char,i)=>{
    `<b style="transform:rotate(${i * 6.3}deg)">${char}</b>`
}).join("");

//switch between about buttons
const buttons = document.querySelectorAll(".about-btn button");
const contents = document.querySelectorAll(".content");

buttons.forEach((button,index) => {
    button.addEventListener("click", ()=>{
        contents.forEach(content => content.style.display = 'none');
        contents[index].style.display = 'block';
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

//portfolio filter

var mixer = mixitup('.portfolio-gallery',{
    selectors:{
        target: '.portfolio-box'
    },
    animation:{
        duration: 500
    }
});

var swiper = new Swiper("mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination:{
        el: ".swiper-pagination",
        clickable:true,
    },
    autoplay:{
        delay3000,
        disableOnInteraction:false,
    },
    breakpoints:{
        576:{
            slidesPerView: 2,
            spaceBetween: 10,   
        },
        1200:{
            slidesPerView: 3,
            spaceBetween: 20,   
        },
    }
});

//skill  progress bar
const first_skill = document.querySelector(".skill:first-child");
const sk_couters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll", ()=>{
    if(!skilsPlayed){
        skillsCounter();
    }
});

function hashReached(el){
    let topPosition = el.getBoundingClientRect().top;
    if(window.innerHeight >= topPosition + el.offSetHeight) return true;
    return false;
}

function updateCount(num, maxNum){
    let currentNum = +num.innerText;

    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(() =>{
            updateCount(num,maxNum)
        },12)
    }
}

let skilsPlayed = false;

function skillsCounter(){
    if(!hashReached(first_skill))return;
    skilsPlayed = true;
    sk_couters.forEach((counter,i) => {
        let target = +counter.CDATA_SECTION_NODE.target;
        let strokeValue = 465 - 465 * (target/100);

        progress_bars[i].style.setProperty("--target",strokeValue);

        setTimeout(() =>{
            updateCount(counter, target);
        },400)
    })

    progress_bars.forEach(p => p.style.animation = "progress 2s ease-in-out forwards");
}

//side progress bar
let calcScrollValue = ()=>{
    let scrollProgress  = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/ calcHeight);

    if(pos > 100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", ()=>{
        document.documentElement.scrollTop = 0 ;
    });

    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%, #e6006d ${scrollValue}%)`;
}

window.onscroll = calcScrollValue;
window.onload =  calcScrollValue;

//active menu
let menuList = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuList.forEach(sec => sec.classList.remove("active"));
    menuList[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

//scroll reveal

ScrollReveal({
    distance: "90px",
    duration:2000,
    delay: 200,
    // reset: true
});

ScrollReveal().reveal('.hero-info,.main-text,.proposal,.heading', {
    origin:"top"
});
ScrollReveal().reveal('.about-img,.fillter-buttons,.contact-info', {
    origin:"left"
});
ScrollReveal().reveal('.about-content,.skills', {
    origin:"right"
});
ScrollReveal().reveal('.all-services,.portfolio-gallery,.footer,.img-hero', {
    origin:"bottom"
});

