
export  function getCurrentLocation() {
    return new Promise((resolve:any)=>{
        if (navigator.geolocation) {
            let lat:number,lon:number;
            navigator.geolocation.getCurrentPosition((position)=> {
             lat = position.coords.latitude ;
            lon= position.coords.longitude;
            
            resolve([lat,lon]);
          });
          
        }
    })
}

