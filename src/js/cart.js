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






































const removeBtn = document.querySelector('.remove-btn')


for (var i = 0; i < removeBtn.length; i = +1) {
    var delBtn = removeBtn[i];
    
    delBtn.addEventListener('click', function (evt) {
        const cartItemRemove = evt.target.dataset.productdId;
        console.log(evt.target.dataset.productdId)
     const updatedProducts = products.filter(item => item.product !== cartItemRemove);
   
      localStorage.setItem(KEY, JSON.stringify(updatedProducts));  
    
        updateCart(container.inserHTML(createMarkupCart(products)))
          })
}
        // carItemsRemove = localStorage.getItem(KEY);
        // carItemsRemove = JSON.parse(carItemsRemove);
       
        // for (var i in carItemsRemovee) {
        //     if (carItemsRemove != null) {
        //         localStorage.removeItem('title');
        //         localStorage.removeItem('total');
        //         localStorage.removeItem(KEY, carItemsRemove[i])
        //     }
        // }
  
//         //console.log(evt.target.dataset)
//         if (products && products[carItemsRevove]) {
//             delete products[carItemsRevove];
//             localStorage.setItem(KEY, JSON.stringify(products));
//             updataCart();
            
//         }
//        updataCart

        
        
        // localStorage.getItem('products');
        // carItems = JSON.parse(carItems);
        // Object.values(carItems).map(item => {
        //     item.id = 0;
           
        //     localStorage.removeItem('products')
        
        // })
        // location.reload()
// })
// }

