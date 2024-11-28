export interface imgDataType{
    id:number;
    webformatURL:string;
    tags?:string;
  }

export   interface placeType{
    place_id?:string;
    lat?:number;
    lon?:number;
    name?:string;
    formatted?:string;
    website?:string;
    address_line1?:string;
    address_line2?:string;
    name_international?:{
        en:string;
    }
}