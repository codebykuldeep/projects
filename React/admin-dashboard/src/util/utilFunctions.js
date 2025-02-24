import { redirect } from "react-router-dom";

// export function addFieldinProducts(products){
//     const newProducts = products.map((product)=>{
//         product.status = product.stockAvail === 'true' ? 'Available' : 'Out of Stock';
    
//         if(!product.price){
//             product.price = Math.floor(Math.random()*1000);
//         }
//         if(!product.stock){
//             product.stock = product.stockAvail === 'true' ? Math.floor(Math.random()*100) : 0;
//         }
//         return product;
//     })

//     return newProducts;
// }


export function redirectRoute(){
    const token =true;
    
    if(token){
        return redirect('/products');
    }

    return null;
}


export function checkUserAuthentication(){
    const authenticated = localStorage.getItem('login')

    if(authenticated){
        // console.log('here to products');
        // localStorage.setItem('login','success');
        return redirect('/products')
    }

    return redirect('/login')
}
export function checkUser(){
    const authenticated = localStorage.getItem('login')

    if(authenticated){
        return redirect('/products');
    }

    return null;
}
export function routeProtection(){
    const authenticated = localStorage.getItem('login')

    if(!authenticated){
        return redirect('/login');
    }

    return null;
}

export function dateFormatter(date){
    if(date.trim() === '')
        return date;

    let yourDate = new Date()
    return yourDate.toISOString().split('T')[0]
}