// Add to cart count
const totalitem = document.getElementById('total-item');
let x = 0;

// Add Item In LocalStorage
document.querySelectorAll('.cartwish').forEach( (i,index) => i.addEventListener("click", function (e) {

    let a = Number(totalitem.innerHTML) + 1;
    totalitem.innerText = a;
    localStorage.setItem("totalitem", a);

    // let pizzaName = i.parentElement.previousElementSibling.firstElementChild.firstElementChild.innerHTML
    // console.log(pizzaName);
    // let pizzaPrice = i.parentElement.previousElementSibling.lastElementChild.firstElementChild.innerHTML
    // console.log(pizzaPrice);
    // let pizzaImg = i.parentElement.parentElement.firstElementChild
    // console.log(pizzaImg);
 
    let pizzaName = document.querySelectorAll('.nameforaddtocart')[index].innerHTML;
    let pizzaPrice = document.querySelectorAll(".priceforaddtocart")[index].innerHTML;
    let pizzaImg = document.querySelectorAll('.imgforaddtocart')[index];
    console.log(pizzaName,pizzaPrice,pizzaImg);


    let storePizza = localStorage.getItem('storePizza');
    if (storePizza == null) {
        pizzaObj = [];
    }
    else {
        pizzaObj = JSON.parse(storePizza);
    } 
 
    let myObj = {
        Pname: pizzaName,
        Pprice: pizzaPrice,
        Pimg:pizzaImg.src,
        Pquntity:1
    }

    pizzaObj.push(myObj);
    localStorage.setItem('storePizza', JSON.stringify(pizzaObj));
    console.log(pizzaObj);
 
}));


b = localStorage.getItem('totalitem');
totalitem.innerText = b;
if (!localStorage.getItem('totalitem')) {
    totalitem.innerText = 0;
}