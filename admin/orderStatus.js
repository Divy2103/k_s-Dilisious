const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

let orderstatus = localStorage.getItem('orderstatus');

if(orderstatus == 'ordered'){
    // one.onclick = function() {
        one.classList.add("active");
        two.classList.remove("active");
        three.classList.remove("active");
        four.classList.remove("active");
        // five.classList.remove("active");
    // }
}

if(orderstatus == 'placed'){
// two.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.remove("active");
    four.classList.remove("active");
    // five.classList.remove("active");
// }
}

if(orderstatus == 'in way'){
// three.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.remove("active");
    // five.classList.remove("active");
// }
}

if(orderstatus == 'deliverd'){

// four.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    // five.classList.remove("active");
// }
}

// five.onclick = function() {
//     one.classList.add("active");
//     two.classList.add("active");
//     three.classList.add("active");
//     four.classList.add("active");
//     five.classList.add("active");
// }
