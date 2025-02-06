//  You can add JavaScript for interactive elements,
//  animations, form submissions, etc. as needed.

// Example: Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

function selectPlan(selected) {
  document.querySelectorAll(".plan").forEach((plan) => {
    plan.classList.remove("selected");
    plan.querySelector("input").checked = false;
  });
  selected.classList.add("selected");
  selected.querySelector("input").checked = true;
}

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentSlide = 0;

function showSlide(n) {
  slider.style.transform = `translateX(-${n * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
