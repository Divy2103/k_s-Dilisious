//  sticky navbar
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
	header.classList.toggle("sticky", window.scrollY > 0);
})



// reveal containt
const sr = ScrollReveal ({
	distance: '30px', 
	duration: 2500,
	reset: true
})

sr.reveal('.home-text',{delay:200, origin:'left'});
sr.reveal('.home-img',{delay:200, origin:'right'});
sr.reveal('.container, .about, .menu, .contact',{delay:200, origin:'bottom'});
sr.reveal('#pizza',{delay:200, origin:'left'});
sr.reveal('#sides, #garlic, .contact',{delay:200, origin:'bottom'});





// typeWriter Animation 
var i = 0;
txt = " to The world of Tasty and Fresh Pizza. ";

setInterval(myTimer, 10000);
setInterval(typeWriter,200);

function myTimer() {
    document.getElementById("welcome").innerHTML = "";
    if (i % 2 == 0) {
        txt = " to most popular pizza delivery Website. ";
        i = 0;
    }
    else {
        txt = " to The world of Tasty and Fresh Pizza. ";
        i = 0;
    }

}
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("welcome").innerHTML += txt.charAt(i);
        i++;
    }
}

