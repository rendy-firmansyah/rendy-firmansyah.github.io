/* ======= toggle style swicther =======*/
const style_swicth_toggler = document.querySelector(".style-switcher-toggler");
style_swicth_toggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style swicther on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/* ======= theme color =======*/
const alternate_style = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternate_style.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}
/* ======= theme light and dark mode =======*/
const day_night = document.querySelector(".day-night");
day_night.addEventListener("click", () => {
    day_night.querySelector("i").classList.toggle("fa-sun");
    day_night.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        day_night.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        day_night.querySelector("i").classList.add("fa-moon");
    }
})