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