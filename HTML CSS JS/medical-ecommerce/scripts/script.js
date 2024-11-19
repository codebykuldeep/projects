//Loading poduct on startup;
const productList = document.querySelector('.product-list');
const dealList = document.querySelector('.deal-list');


function loadProducts(){
    productList.innerHTML ="";
    productData.forEach((product)=>{
        let discountPrice =Number((product.price - (product.price*product.discount)/100).toFixed(2));
        let html =`<div class="product-container">
                        <img src="assets/products/${product.image}" alt="" draggable="false">
                        <div class="product-info">
                            <div class="category">${product.brand}</div>
                            <div class="pro-name">${product.name}</div>
                            <div class="pro-price"><span>$${product.price}</span> <span>$${discountPrice}</span></div>
                            <button class='add-to-cart' id=${product.productId}>
                            <span><i class="fa-solid fa-bag-shopping"></i></span>
                            <span>Add to Cart</span>
                            </button>
                        </div>
                     </div>`;

        productList.innerHTML +=html;
    });
    
}

loadProducts();



function loadDealProducts(){
    dealList.innerHTML ="";
    let prev =-1;
   for(let i=0;i<2;i++){
        let x =  -2;
        while(1){
            x= Math.floor(Math.random()*productData.length);
            if(x !== prev){
                prev = x ;
                break;
            }
        }
        
        
        let discountPrice =Number((productData[x].price - (productData[x].price*productData[x].discount)/100).toFixed(2));
        let html =`<article class="deal-product">
                    <div class="deal-img">
                        <img src="assets/products/${productData[x].image}" alt="">
                    </div>

                    
                    <div class="deal-product-info product-info">
                            <div class="category">${productData[x].brand}</div>
                            <div class="pro-name">${productData[x].name}</div>
                            <div class="pro-price"><span>$${productData[x].price}</span> <span>$${discountPrice}</span></div>
                            <button class='add-to-cart' id=${productData[x].productId}>
                            <span><i class="fa-solid fa-bag-shopping"></i></span>
                            <span>Add to Cart</span>
                            </button>
                            <div class="deal-timer">
                                <div class="deal-time"><span class="deal-hour">9</span> <span>Hour</span></div>
                                <div class="deal-time"><span class="deal-min">8</span> <span>Min</span></div>
                                <div class="deal-time"> <span class="deal-sec">45</span> <span>Sec</span></div>
                            </div>
                            
                        </div>
                </article>`;

        dealList.innerHTML +=html;
    };
    
}

loadDealProducts();
let time =32925;
const hourBox = document.querySelectorAll('.deal-hour');
const minBox = document.querySelectorAll('.deal-min');
const secBox = document.querySelectorAll('.deal-sec');

function updateTimer(){
    let hour = Math.floor((time/60)/60);
    let min  = Math.floor((time%3600)/60);
    let sec =Math.floor((time%3600)%60);

    hourBox.forEach(box=>{
        box.textContent = hour;
    })
    minBox.forEach(box=>{
        box.textContent = min;
    })
    secBox.forEach(box=>{
        box.textContent = sec;
    })
    
    time--;
}
setInterval(updateTimer,1000);





/*

<div class="deal-product-info">
                        <div class="category">${productData[x].brand}</div>
                        <div class="pro-name">${productData[x].name}</div>
                        <div><span>$${productData[x].price}</span> <span>$${productData[x].price}</span></div>
                        <button class='add-to-cart' id=${productData[x].productId}><span>ICON</span><span>Add to Cart</span></button>
                    </div>


*/