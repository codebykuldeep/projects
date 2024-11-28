interface PropertiesType{
    place_id:string;
    lat:number;
    lon:number;
    name?:string;
    formatted?:string;
    website?:string;
    address_line1?:string;
    address_line2?:string;
    
}

export interface HotelObjType{
    type:string;
    properties:PropertiesType;
}