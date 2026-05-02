const navbar = document.querySelector(".navbar");
const placesSection = document.querySelector(".places-section");

window.addEventListener("scroll", () => {

  const sectionTop = placesSection.offsetTop;
  const scrollPosition = window.scrollY;

  if (scrollPosition >= sectionTop - 100) {
    navbar.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
  }

});




const container = document.querySelector(".places");
const cards = document.querySelectorAll(".plac1");
const nextBtn = document.querySelector(".right");
const prevBtn = document.querySelector(".left");

let index = 0;
const visibleCards = 3;

// حساب عرض البطاقة + gap بدقة
let cardStyle = window.getComputedStyle(cards[0]);
let cardWidth = cards[0].offsetWidth;
let gap = parseInt(cardStyle.marginRight) || 30;
let totalMove = cardWidth + gap;

nextBtn.addEventListener("click", () => {
  if (index < cards.length - visibleCards) {
    index++;
    container.style.transform = `translateX(-${index * totalMove}px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    container.style.transform = `translateX(-${index * totalMove}px)`;
  }
});



// نجيب الفورم من الصفحة
const form = document.querySelector(".contact-form");

// نعمل Event Listener على submit
form.addEventListener("submit", function(e) {
  e.preventDefault(); // يمنع الصفحة من إعادة التحميل

  // نطلع رسالة نجاح
  alert("Message sent successfully!");

  // نرجع الفورم فارغ
  form.reset();
});