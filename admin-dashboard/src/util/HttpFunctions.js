const cloudName = process.env.REACT_APP_CLOUD_NAME;

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


export async function uploadImage(image) {
    const data = new FormData();
    console.log(image);
    
    data.append('file',image);
    data.append("upload_preset", "test123")
    data.append("cloud_name","dhnzclvra")
    const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
    if(!response.ok){
        return {error:'Failed to upload'};
    }
    const res = await response.json();
    console.log(res);
    
    return res.secure_url;

}


export async function addProduct(formData) {
    formData = formData.formData;
    const imgURL = await uploadImage(formData.image);
    formData.imageURL =imgURL; 
    formData.price= Math.floor(Math.random()*30000);
    console.log(imgURL);
    
    const response = await fetch(`http://localhost:8000/products-data`,{
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData),
    });
    if(!response.ok){
        throw new Error('failed to upload form')
    }
    const data = await response.json(); 
    
    console.log('ADDED SUCCESSFULLY !');
    
    return data;

}
export async function updateProduct(formData) {
    const {id} = formData;
    formData = formData.formData;
    formData.id = id;
    formData.price= Math.floor(Math.random()*30000);
    if(formData.image?.exists){
        console.log('exists');
        
        formData.imageURL =formData.image.imageURL;
        delete formData.image;
    }
    else{
        const imgURL = await uploadImage(formData.image);
        formData.imageURL =imgURL; 
    }
    
    
    const response = await fetch(`http://localhost:8000/products-data/${id}`,{
        method: 'PUT',
        headers: {
           'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData),
    });
    if(!response.ok){
        throw new Error('failed to upload form')
    }
    const data = await response.json(); 
    
    console.log('UPDATED SUCCESSFULLY !');
    
    return data;

}


export async function deleteProduct(id) {
    const response = await fetch(`http://localhost:8000/products-data/`+id,{
        method: 'DELETE',
    });
    if(!response.ok){
        throw new Error('failed to delete product')
    }
    const data = await response.json(); 
    console.log(data);
    
    return data;
}