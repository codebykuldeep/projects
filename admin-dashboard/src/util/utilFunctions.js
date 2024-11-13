
export function addFieldinProducts(products){
    const newProducts = products.map((product)=>{
        product.status = product.stockAvail === 'true' ? 'Available' : 'Out of Stock';
    
        if(!product.price){
            product.price = Math.floor(Math.random()*1000);
        }
        if(!product.stock){
            product.stock = product.stockAvail === 'true' ? Math.floor(Math.random()*100) : 0;
        }
        return product;
    })

    return newProducts;
}