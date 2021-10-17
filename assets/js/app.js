const box = document.querySelector('.about-box');
const boxRect = box.getBoundingClientRect();

box.addEventListener('mousemove', e =>{
  const xPosition = (e.clientX - boxRect.left) / boxRect.width;
  const yPosition = (e.clientY - boxRect.top) / boxRect.height - 0.6;
  const xOffset = -(xPosition - 0.6);
  const dxNorm = Math.min(Math.max(xOffset, -0.6), 0.6)
  box.style.transform = `perspective(1000px)
  rotateY(${dxNorm*(45)}deg)
  rotateX(${yPosition*(-45)}deg)`
})

box.addEventListener('mouseleave', () => {
  box.style.transform = 'none'
})


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


let typed = "";
const element = document.querySelector(".typity");

function startType(pun, index) {
  if (index < pun.length) {
    typed += pun.charAt(index);
    element.innerHTML = typed;
    index++;
    setTimeout(function() {
      startType(pun, index);
    }, 50);
  } else {
    setTimeout(function() {
      element.classList.add("highlight");
    }, 4000);

    setTimeout(function() {
      element.classList.remove("highlight");
      typed = "";
      element.innerHTML = typed;
      startType(getRandomPun(), 0);
    }, 5000);
  }
}

function getRandomPun() {
  const puns = [
    "Software Engineer",
    "Web Developer"
  ];
  const index = Math.floor(Math.random() * puns.length);

  return puns[index];
}

startType(getRandomPun(), 0);