let addproduct = document.getElementById('addproduct');
let hideshow = document.getElementById('hideshow');
let dash = document.getElementById('dash');
let nav = document.getElementById('navbar');

addproduct.addEventListener('click', () => {
    hideshow.classList.add('forproductshow');
    hideshow.classList.remove('forproducthide');
    dash.classList.add('opacity');
    nav.classList.add('opacity');
})

let cancel = document.getElementById('Cancel');
cancel.addEventListener('click', (e) => {
    hideshow.classList.remove('forproductshow');
    hideshow.classList.add('forproducthide');
    dash.classList.remove('opacity');
    nav.classList.remove('opacity');
    e.preventDefault();
})

let submit = document.getElementById('submit');
let ptitle = document.getElementById('Ptitle');
let pname = document.getElementById('Pname');
let pimg = document.getElementById('Ping');
console.log(ptitle.innerHTML);

submit.addEventListener('click', () => {
    if ((ptitle.innerHTML && pname.innerHTML && pimg.innerHTML) != '') {
        hideshow.classList.remove('forproductshow');
        hideshow.classList.add('forproducthide');
        dash.classList.remove('opacity');
        nav.classList.remove('opacity');
    }
    console.log(ptitle.innerHTML);
})


let Delete = document.querySelectorAll('.Delete');
let Info = document.querySelectorAll('.Info');

Delete.forEach((element, index) => {
    element.addEventListener('click', () => {
        Info[index].classList.add('information');
    })
})