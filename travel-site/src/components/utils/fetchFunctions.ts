import axios from "axios";
import { imgDataType } from "../DetailPage/DetailModelType";


export async function fetchPlace(lat:number,lon:number) {
    const {data} =await axios.get('https://api.geoapify.com/v1/geocode/reverse',{
        params:{
            lat:lat,
            lon:lon,
            format:'json',
            apiKey:process.env.REACT_APP_API_KEY
        }
    })
    
    return data.results[0];
    
}

export async function fetchCityList(city:string) {
    const { data } = await axios.get(
        "https://api.geoapify.com/v1/geocode/autocomplete",
        {
          params: {
            text: city.toLowerCase(),
            lang: "en",
            limit: 10,
            type: "city",
            format: "json",
            apiKey: process.env.REACT_APP_API_KEY,
          },
        }
      );
      
      return data.results;
    
}
export async function fetchPlaceById(id:string) {
  const {data} =await axios.get('https://api.geoapify.com/v2/place-details',{
      params:{
          id:id,
          format:'json',
          apiKey:process.env.REACT_APP_API_KEY
      }
  })
  
  
  return data?.features[0]?.properties;
}



const dummyImagesData:imgDataType[] =[
  {
    id:1,
    webformatURL:'https://placehold.co/1000',
    tags:'image 1'
  },
  {
    id:2,
    webformatURL:'https://placehold.co/600',
    tags:'image 2'
  },
  {
    id:3,
    webformatURL:'https://placehold.co/600',
    tags:'image 3'
  },
  {
    id:4,
    webformatURL:'https://placehold.co/600',
    tags:'image 4'
  }
]

export async function fetchImages(text:string,text2:string){
  const queryText = text || text2;
  
  
  const {data} = await axios.get('https://pixabay.com/api/',{
    params:{
      key:process.env.REACT_APP_IMG_KEY,
      q:queryText,
      safesearch:true,
    }
  })

  if(data.hits.length === 0 ) return dummyImagesData;
  
  
  return data.hits;
  // console.log('here');
  
  // return dummyImagesData;
  
}




