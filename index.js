import { projects } from "./data/projects.js";
import { renderPortfolio } from "./js/portfolioRenderer.js";

// Hamburger menu
const menuIcon = document.querySelector(".menu-icon");
const navlist = document.querySelector(".navlist");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

navlist.addEventListener("click", () => {
    menuIcon.classList.remove("active");
    navlist.classList.remove("active");
    document.body.classList.remove("open");
});

// Rotate text
const text = document.querySelector(".text p");
text.innerHTML = text.innerHTML.split("").map((char, i) => 
    `<b style="transform:rotate(${i * 6.3}deg)">${char}</b>`
).join("");

// About section buttons
const buttons = document.querySelectorAll(".about-btn button");
const contents = document.querySelectorAll(".content");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        contents.forEach(content => (content.style.display = "none"));
        contents[index].style.display = "block";
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});

// Portfolio filter & dynamic rendering
const gallery = document.querySelector(".portfolio-gallery");
if (gallery) {
    renderPortfolio(projects, gallery);
    mixitup(gallery, {
        selectors: { target: ".portfolio-box" },
        animation: { duration: 500 },
    });
}

// Swiper
new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: { el: ".swiper-pagination", clickable: true },
    autoplay: { delay: 3000, disableOnInteraction: false },
    breakpoints: {
        576: { slidesPerView: 2, spaceBetween: 10 },
        1200: { slidesPerView: 3, spaceBetween: 20 },
    },
});

// Skills progress bar
const firstSkill = document.querySelector(".skill:first-child");
const skillCounters = document.querySelectorAll(".counter span");
const progressBars = document.querySelectorAll(".skills svg circle");
let skillsPlayed = false;

function hasReached(el) {
    const topPosition = el.getBoundingClientRect().top;
    return window.innerHeight >= topPosition + el.offsetHeight;
}

function updateCount(num, maxNum) {
    const currentNum = +num.innerText;
    if (currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => updateCount(num, maxNum), 12);
    }
}

function skillsCounter() {
    if (!hasReached(firstSkill) || skillsPlayed) return;
    skillsPlayed = true;
    skillCounters.forEach((counter, i) => {
        const target = +counter.dataset.target;
        const strokeValue = 465 - 465 * (target / 100);
        progressBars[i].style.setProperty("--target", strokeValue);
        setTimeout(() => updateCount(counter, target), 400);
    });
    progressBars.forEach(p => (p.style.animation = "progress 2s ease-in-out forwards"));
}

window.addEventListener("scroll", () => {
    if (!skillsPlayed) skillsCounter();
});

// Scroll progress
const calcScrollValue = () => {
    const scrollProgress = document.getElementById("progress");
    const pos = document.documentElement.scrollTop;
    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = Math.round((pos * 100) / calcHeight);
    scrollProgress.style.display = pos > 100 ? "grid" : "none";
    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%, #e6006d ${scrollValue}%)`;
};

document.getElementById("progress").addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", calcScrollValue);
window.onload = calcScrollValue;

// Active menu
const menuList = document.querySelectorAll("header ul li a");
const sections = document.querySelectorAll("section");

function activeMenu() {
    let len = sections.length;
    while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
    menuList.forEach(sec => sec.classList.remove("active"));
    menuList[len].classList.add("active");
}

window.addEventListener("scroll", activeMenu);
activeMenu();

// Scroll reveal
ScrollReveal({
    distance: "90px",
    duration: 2000,
    delay: 200,
    // reset: true,
});

ScrollReveal().reveal(".hero-info,.main-text,.proposal,.heading", { origin: "top" });
ScrollReveal().reveal(".about-img,.filter-buttons,.contact-info", { origin: "left" });
ScrollReveal().reveal(".about-content,.skills", { origin: "right" });
ScrollReveal().reveal(".all-services,.portfolio-gallery,.footer,.img-hero", { origin: "bottom" });
