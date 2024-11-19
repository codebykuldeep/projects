const addToCartBtn = document.querySelectorAll('.add-to-cart');

const cartCount = document.querySelector('.cart-count');


const updateCartCount =()=>{
    let count =0;
    for(let i of Object.values(cart)){
        count+=i;
    }
    cartCount.textContent = count;
    console.log(count);
    
}


addToCartBtn.forEach((button)=>{
    button.addEventListener('click',()=>{
        
        if(cart[button.id] ){
            cart[button.id]++;
        }
        else{
            cart[button.id] = 1;
        }
        updateCartCount();
        console.log(cart);
    
        localStorage.setItem('cart',JSON.stringify(cart));
    })  
})


//for page load
updateCartCount();