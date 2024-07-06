// Item Add and remove from the cart
showPizza();

let prizeallPizza = document.getElementById('prizeallPizza');


// Show Item 
function showPizza() {

    const totalitem = document.getElementById('total-item');
    b = localStorage.getItem('totalitem');
    totalitem.innerText = b;
    if (!localStorage.getItem('totalitem')) {
        totalitem.innerText = 0;
    }

    let storePizza = localStorage.getItem('storePizza');
    if (storePizza == null) {
        pizzaObj = [];
    }
    else {
        pizzaObj = JSON.parse(storePizza);
    }
    let html = "";
    pizzaObj.forEach(function (element, index) {
        html += ` 
     <div class="items">
          <img src="${element.Pimg}" class="slide-gralic" alt="main-product1">
        <div class="innerItem">
            <div class="menu-text">
                <div class="menu-left">
                    <h4>${element.Pname}</h4>
                </div>
                <div class="menu-right">
                    <h5>${element.Pprice}</h5>
                </div>
            </div>

            <div class="addDelete">
                <div class="removeitem">
                    <img id="${index}" onclick="deletePizza(this.id)" src="icons8-delete.svg" alt="">
                </div>
                <div class="counter">
                    <div class="btn btn1">+</div>
                    <div class="count">${element.Pquntity}</div>
                    <div class="btn btn2">-</div>
                </div>
            </div>
        </div>
     </div>
            `;
    });

    let totalPizzaItem = document.getElementById('totalItem');
    if (pizzaObj.length != 0) {
        totalPizzaItem.innerHTML = html;
    }
    else {
        totalPizzaItem.innerHTML = `<div class="emptycartmessage">Nothing to show&nbsp;! <a href="menu1.html">&nbsp;&nbsp;Order Your Favorite Pizza.</a></div>`;
    }
    
}


// Delete Item 
function deletePizza(index) {
    pizzaObj.splice(index, 1);
    localStorage.setItem('storePizza', JSON.stringify(pizzaObj));
    console.log(index);

    const totalitem = document.getElementById('total-item');
    let a = Number(totalitem.innerHTML) - 1;
    totalitem.innerText = a;
    localStorage.setItem("totalitem", a);


    // Show Item 
    showPizza();

    // Total Price
    prizeallPizza.innerHTML = total();
        localStorage.setItem('prizeallPizza', total());
        total();
}


// Increase Item 
document.querySelectorAll('.btn1').forEach(function (element, index) {
    console.log(element);
    element.addEventListener("click", function (e) {
        console.log(pizzaObj[index].Pquntity);
        pizzaObj[index].Pquntity += 1;
        let a = Number(element.nextElementSibling.innerHTML) + 1;
        element.nextElementSibling.innerHTML = a;
        localStorage.setItem('storePizza', JSON.stringify(pizzaObj));


     // Total Price
        prizeallPizza.innerHTML = total();
        localStorage.setItem('prizeallPizza', total());
        total();
    })
});


// Decrease Item 
document.querySelectorAll('.btn2').forEach(function (element, index) {

    element.addEventListener("click", function (e) {
        console.log(pizzaObj[index].Pquntity);
        if (pizzaObj[index].Pquntity > 1) {
            pizzaObj[index].Pquntity -= 1;
            element.previousElementSibling.innerHTML -= 1;
            localStorage.setItem('storePizza', JSON.stringify(pizzaObj));
        }

     // Total Price
        prizeallPizza.innerHTML = total();
        localStorage.setItem('prizeallPizza', total());
        total();
    })

})

//Calculate Total Price
function total(d) {
    let total = 0;
    pizzaObj.forEach(function (element, index) {
        total += element.Pprice * element.Pquntity;
    });
    return total;
}

// Total Price
prizeallPizza.innerHTML = total();
localStorage.setItem('prizeallPizza', total());



// Header Sticky
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
})


//  MouseOver and MouseOut Event
let Continueshoping = document.querySelector('.Continueshoping');
let ContinueshopingInner1 = document.querySelector('#ContinueshopingInner1');
console.log(ContinueshopingInner1)
let ContinueshopingInner2 = document.querySelector('#ContinueshopingInner2');
console.log(ContinueshopingInner2)

ContinueshopingInner1.addEventListener('mouseover', function (e) {
    ContinueshopingInner1.classList.toggle("activecolor");
    ContinueshopingInner2.classList.toggle("activecolor");
});

ContinueshopingInner1.addEventListener('mouseout', function (e) {
    ContinueshopingInner1.classList.toggle("activecolor");
    ContinueshopingInner2.classList.toggle("activecolor");
});