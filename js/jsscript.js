/* ======= Typing animation =======*/
var typed = new Typed(".typing", {
  strings: ["", "Frontend Web", "Web Development", "Web Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
/* ======= Aside =======*/
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  //   console.log(navList[i])
  const a = navList[i].querySelector("a");
  //   console.log(a)
  a.addEventListener("click", function () {
    // for(let i=0; i<totalSection; i++)
    // {
    //     allSection[i].classList.remove("back-section");
    // }
    removeBackSection();
    //   console.log(this)
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        // console.log("back-section" + navList[j].querySelector("a"))
        // allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTooglerBtn();
    }
  });
}
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
  //   console.log(target)
  //   target = href[1];
  //   console.log(target)
}
function updateNav(element) {
  //   console.log(element.getAttribute("href").split("#")[1])
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".recruit-me").addEventListener("click", function () {
  //   console.log(this)
  const sectionIndex = this.getAttribute("data-section-index");
  //   console.log(sectionIndex)
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});
const nav_toggler_btn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
nav_toggler_btn.addEventListener("click", () => {
  asideSectionTooglerBtn();
});
function asideSectionTooglerBtn() {
  aside.classList.toggle("open");
  nav_toggler_btn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
