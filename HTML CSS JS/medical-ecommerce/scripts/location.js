const getLocation = document.getElementById('get-location');
const locationName = document.querySelector('.location');
const API_KEY = `eaeb5d26f24a2dbd1f3a1097e7783bd9`;

const updateLocation = async (latitude,longitude) => {
    const res  = await fetch(`http://api.positionstack.com/v1/reverse?access_key=${API_KEY}&query=${latitude},${longitude}`)
    const {data} = await res.json();

    let {locality:area} =data[0];
    console.log(data[0]);
    
    locationName.textContent =area;
    
    
}

getLocation.addEventListener('click',()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            const {coords:{latitude,longitude}} =position;
           
            updateLocation(latitude,longitude);
        })
    }
})