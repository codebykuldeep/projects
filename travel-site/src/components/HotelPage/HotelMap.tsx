import { MapContainer,Marker,TileLayer ,Popup,useMapEvents, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"

import IconPoint from '../../assets/map-pin.png'

import MarkerClusterGroup from 'react-leaflet-cluster'

import { Icon, latLng } from "leaflet"
import { fetchPlace } from "../utils/fetchFunctions"
import { useDispatch } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { hotelActions } from "../store/hotelState"
import { useSelector } from "react-redux"
import { HotelObjType } from "./HotelTypeModel"
import PlacePoint from '../../assets/place-pin.png'

function HotelMap() {
const city = useSelector((state:RootState)=>state.hotel.city)
const hoteData = useSelector((state:RootState)=>state.hotel.hotelData)
const dispatch =useDispatch<AppDispatch>();

const customIcon =new Icon({
    iconUrl:IconPoint,
    iconSize:[38,38]
})
const placeIcon = new Icon({
    iconUrl: PlacePoint,
    iconSize: [38, 38],
  });

const ClickHandler =()=>{
  useMapEvents({
      async click(e){
         
          const {lat,lng} = e.latlng;
          const city = await fetchPlace(lat,lng);
          
          
          if(city){
            dispatch(hotelActions.updateCity(city));
          }
      }
  })

  return null;
}

const MapControl =()=>{
  const map =useMap();
  map.setView([city.lat,city.lon])
  map.setZoom(13);
  return null;
}
  return (
    <div className="hotel-map">
      <MapContainer center={[city.lat,city.lon]} zoom={10} >
            <TileLayer
                attribution="Open street maps"
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
             />

            <ClickHandler/>
            <MapControl/>
            <MarkerClusterGroup>
            {hoteData.map(({properties}:HotelObjType)=>(
                <Marker key={properties.place_id} position={latLng(properties.lat,properties.lon)}
                    icon={placeIcon}
                >

                    <Popup><h2>{properties.name || properties.address_line1}</h2></Popup>


                </Marker>
             ))}
             <Marker key={'user location'} position={latLng(city.lat,city.lon)}
                    icon={customIcon}
                >

                    <Popup><h2>{'Your Location'}</h2></Popup>


            </Marker>
            </MarkerClusterGroup>
             
        </MapContainer>
    </div>
  )
}

export default HotelMap