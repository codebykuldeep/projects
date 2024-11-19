const search =document.getElementById('search');
const dropdown =document.querySelector('.dropdown')



//dropdown
search.addEventListener('focus',()=>{
    
    dropdown.style.display = 'block';
})

search.addEventListener('blur',()=>{
    
    dropdown.style.display = 'none';
})


//product search

const searchRelatedProducts = function(name){
    if(name.length === 0) return;
    const  result = medicineList.filter((product)=>product.name.toLowerCase().includes(name));
    return result;
}

const searchListUpdate= function(){
    dropdown.innerHTML="";

    console.log(search.value);


    let resultProductArray = searchRelatedProducts(search.value) ?? [];
    
    
    resultProductArray.forEach((product)=>{
        dropdown.innerHTML +=`<li>${product.name}<li>`;
    })
    
}


const debouncingLogic =(fn,delay)=>{
    let timer;
    return function(){
        clearTimeout(timer);
        timer=setTimeout(fn,delay);
    }
}


const debouncing =debouncingLogic(searchListUpdate,300);


search.addEventListener('keyup',debouncing);