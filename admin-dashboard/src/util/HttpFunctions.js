export async function getData({page = 1,entriesCount = 10,signal,searchKeyword}){
    let url = `http://localhost:8000/products-data`;
    if(!searchKeyword){
        url = `http://localhost:8000/products-data?_page=${page}&_per_page=${entriesCount}`;
    }
    
    
    
    const response = await fetch(url,{signal:signal});
    if(!response.ok){
        throw new Error('Fetching Data from Server failed.Please try later...')
    }
    const data = await response.json();
    

    if(searchKeyword){
        const newData = data.filter((entry)=>entry.title.toLowerCase().includes(searchKeyword) || entry.category.toLowerCase().includes(searchKeyword))
        return newData;
    }
    
    
    return data;
    
}



export async function fetchProduct(id){
    const response = await fetch(`http://localhost:8000/products-data/${id}`);
    if(!response.ok){
        throw new Error('Fetching Data from Server failed.Please try later...')
    }
    const data = await response.json(); 
    
    return data;
}