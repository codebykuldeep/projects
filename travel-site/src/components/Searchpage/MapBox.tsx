import {
  MapContainer,
  Marker,
  TileLayer,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import IconPoint from "../../assets/map-pin.png";
import PlacePoint from '../../assets/place-pin.png'
import MarkerClusterGroup from "react-leaflet-cluster";

import { Icon, latLng } from "leaflet";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { fetchPlace } from "../utils/fetchFunctions";
import { useDispatch } from "react-redux";
import { cityActions } from "../store/cityState";


function MapBox() {
  const city = useSelector((state:RootState)=>state.city.city)
  const placesData = useSelector((state:RootState)=>state.city.placesData)
  const dispatch = useDispatch<AppDispatch>();

  // const markers = [
  //   // {
  //   //     geocode:[48.86,2.3522],
  //   //     popUp:'Hello marker 1'
  //   // },
  //   // {
  //   //     geocode:[48.85,2.3522],
  //   //     popUp:'Hello marker 2'
  //   // },
  //   // {
  //   //     geocode:[48.855,2.3522],
  //   //     popUp:'Hello marker 3'
  //   // }
  //   {
  //     geocode: [28.7041, 77.1025],
  //     popUp: "Delhi",
  //   },
  // ];

  const customIcon = new Icon({
    iconUrl: IconPoint,
    iconSize: [38, 38],
  });
  const placeIcon = new Icon({
    iconUrl: PlacePoint,
    iconSize: [38, 38],
  });

  const ClickHandler = () => {
    useMapEvents({
      async click(e) {
        
        const {lat,lng} = e.latlng;
        const city =await fetchPlace(lat,lng);
        
  
        dispatch(cityActions.updateCity(city));
      },
    });

    return null;
  };

  const MapControl =()=>{
    const map =useMap();
    map.setView([city.lat,city.lon])
    map.setZoom(13);
    return null;
  }
  

  return (
    <div className="map">
      <MapContainer center={[city.lat,city.lon ]} zoom={10}>
        <TileLayer
          attribution="Open street maps"
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ClickHandler />
        <MapControl/>

        <MarkerClusterGroup>
          {placesData.length!==0 && placesData.map((marker:any) => (
            <Marker key={marker.properties.place_id}
              position={latLng(marker.properties.lat, marker.properties.lon)}
              icon={placeIcon}
            >
              <Popup>
                <h2>{marker.properties.name || marker.properties.address_line1}</h2>
              </Popup>
            </Marker>
          ))}
          <Marker
              position={latLng(city.lat,city.lon)}
              icon={customIcon}
            >
              <Popup>
                <h2>{"YOU LOCATION"}</h2>
              </Popup>
            </Marker>
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default MapBox;
