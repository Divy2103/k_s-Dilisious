const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click',()=>{
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    })
     
    options.forEach(option => {
        option.addEventListener('click',()=>{
              selected.innerText = option.innerText;
              localStorage.setItem('orderstatus',selected.innerText);
              select.classList.remove('select-clicked');
              caret.classList.remove('caret-rotate');
              menu.classList.remove('menu-open');
              options.forEach(option=>{
                option.classList.remove('active');
              })
              option.classList.add('active');
        })
    })
})

const selected = document.querySelector('.selected');
let checkstatus = document.querySelector('.checkstatus')
let a = localStorage.getItem('orderstatus');
// selected.innerText = a;
if(localStorage.getItem('orderstatus'))
{
selected.innerText = a;
}