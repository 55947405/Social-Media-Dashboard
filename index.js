alert("Welcome To Trailbox")
var sun = document.getElementById("sun-pic")
var moon = document.getElementById("moon-pic")
var body = document.getElementsByTagName("body")[0]
function darkMode(){
    sun.style.display="none"
    moon.style.display="block"
    body.classList.toggle("body-light")
}
function lightMode(){
    sun.style.display="block"
    moon.style.display="none"
    body.classList.toggle("body-light")
}
// lightMode()