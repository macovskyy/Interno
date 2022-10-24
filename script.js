var hamburgerIcon = document.querySelector('#hamburgerIcon')
var hamburger = document.querySelector('#hamburger')
var close = document.querySelector('#close')

hamburgerIcon.addEventListener("click",function(){
    hamburger.classList.add("active")
})

close.addEventListener("click",function(){
    hamburger.classList.remove("active")
})