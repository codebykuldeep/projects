import constant from "../constant";

const cloudName = constant.CLOUD_NAME;
const uploadPreset = constant.UPLOAD_PRESET;
const SERVER = constant.SERVER;

export async function getAllDataLength(){
    const response = await fetch(SERVER);
    if(!response.ok){
        throw new Error('Fetching Data from Server failed.Please try later...')
    }
    const data = await response.json();
    const length = data.length;
    return length;
}

export async function getData({page = 1,entriesCount = 10,signal,searchKeyword}){
    let url = SERVER;
    if(!searchKeyword){
        url+=`?p=${page}&l=${entriesCount}`;
    }
    else{
        const query =searchKeyword.toLowerCase();
        url+=`?filter=${query}`;
    }
    
    const response = await fetch(url,{signal:signal});
    const length = await getAllDataLength();
    console.log('response',response);
    
    if(!response.ok){
        if(response.status === 404 || response.statusText === "Not Found"){
            return {products:[],length}
        }
        throw new Error('Fetching Data from Server failed.Please try later...')
    }
    const data = await response.json();
    
    
    
    return {products:data,length};
    
}



export async function fetchProduct(id){
    const response = await fetch(SERVER + `/${id}`);
    if(!response.ok){
        throw new Error('Fetching Data from Server failed.Please try later...')
    }
    const data = await response.json(); 
    
    return data;
}


export async function uploadImage(image) {
    const data = new FormData();
    
    
    data.append('file',image);
    data.append("upload_preset", uploadPreset)
    data.append("cloud_name",cloudName)
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
    
    
    return res.secure_url;

}


export async function addProduct(formData) {
    if(formData.image === ''){
        
        
    }
    else{
        console.log('upload');
        const imgURL = await uploadImage(formData.image);
        formData.image =imgURL;
    }
    
    
     
    // // formData.price= Math.floor(Math.random()*30000);
    // console.log(imgURL);
    
    const response = await fetch(SERVER,{
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
export async function updateProduct({form:formData,id}) {
    console.log(formData,id);
    debugger;
    if(typeof formData.image === 'string'){
        console.log('donot upload');
        
    }
    else{
        console.log('upload');
        const imgURL = await uploadImage(formData.image);
        formData.image =imgURL;
    }
    
    
    const response = await fetch(`${SERVER}/${id}`,{
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
    const response = await fetch(SERVER+'/'+id,{
        method: 'DELETE',
    });
    if(!response.ok){
        throw new Error('failed to delete product')
    }
    const data = await response.json(); 
    console.log(data);
    
    return data;
}