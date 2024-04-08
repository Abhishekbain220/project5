
let menu=document.querySelector(".ri-menu-3-line")
menu.addEventListener("click",()=>{
    gsap.to(".menu_slider",{
        y:"100%"
    })
})
let page1=document.querySelector(".page1_container")
page1.addEventListener("click",()=>{
    gsap.to(".menu_slider",{
        y:"-100%"
    })
})
gsap.from(".page1_left",{
    x:100,
    opacity:0,
    duration:1
})
gsap.from(".page1_right",{
    scale:0,
    
    opacity:0,
    duration:1,
})
