let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist")
menuIcon.addEventListener("click", ()=>{
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

navlist.addEventListener("click", ()=>{
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
});

let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char,i)=>{
    `<b style="transform:rotate(${i * 6.3}deg)">${char}</b>`
}).join("");

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