export interface DataObj {
    city?: string;
    lat?: number;
    lon?: number;
    address_line1?: string;
  }

interface cityStoreType{
  city:{
    city:{
      city?:string;
    }
  }
}

export interface StoreType{
  state:cityStoreType
}


export interface PlaceType{
  properties?:{
    lat?:number;
    lon?:number;
    name?:string;
    address_line1?:string,
    address_line2?:string;
    place_id?:string;
  }
};