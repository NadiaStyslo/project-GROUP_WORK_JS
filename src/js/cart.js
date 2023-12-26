import{createMarkupCart} from './template.js'
const title = document.querySelector('.products-quantity-title')
const totalPrice = document.querySelector('.products-total-price')
const container = document.querySelector('.cart-container')
const KEY = 'products in cart'

const products = JSON.parse(localStorage.getItem(KEY))

container.insertAdjacentHTML('beforeend', createMarkupCart(products))
const productsQuantity = document.querySelectorAll('.products-quantity')
products.forEach((el, index) => {
    productsQuantity[index].textContent = el.quantity
})

title.textContent = `Cart (${products.length})`
const total = products.reduce((acc, {quantity, price}) => {
    return acc += quantity * price
}, 0)
totalPrice.textContent = `$${total}`

// const moreBtn = document.querySelectorAll('.more-btn')
// const lessBtn = document.querySelectorAll('.less-btn')

//

































































// var form.innerHTML =` <form class="form" autocomplete="off">
//         <input type="email" name="email" autofocus />
//         <button type="submit">checkout</button>
//       </form>`
var form = document.createElement('form')
form.setAttribute("class", "form")

var input = document.createElement('input')
input.setAttribute("type", "email")

var btnInput = document.createElement('sumbit');
btnInput.setAttribute('type', 'sumbit')
btnInput.setAttribute('value', 'checkout');

form.appendChild(input);
form.appendChild(btnInput);

//document.body.appendChild(form)
container.insertAdjacentElement('beforeend', form)