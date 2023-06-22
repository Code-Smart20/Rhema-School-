// change nav bar on scroll of the window object

window.addEventListener("scroll",()=>{
    document.querySelector("nav").classList.toggle("window-scroll",window.scrollY > 0)
})