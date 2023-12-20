const sectBtns = document.querySelectorAll(".controls");
const sections = document.querySelectorAll(".section");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const hover = document.querySelectorAll(".hover-item");
const portfolio = document.querySelectorAll(".portfolioitem");
const submitBtn = document.querySelector(".submit-btn")


function pageTransition() {
  
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function() {
      
    let currentBtn = document.querySelectorAll(".active-btn");
    currentBtn[0].className = currentBtn[0].className.replace(" active-btn", "");
    this.className += " active-btn"
    }) }

 allSections.addEventListener("click", (e) => {

  const id = e.target.dataset.id;
  if (id) {
    sections.forEach((section) => {
      section.classList.remove("active")
    });
    const element = document.getElementById(id);
    element.classList.add("active");

  }

})
}

pageTransition(); 

submitBtn.addEventListener("click", (e) => {

  e.preventDefault()

})
