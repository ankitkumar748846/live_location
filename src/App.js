import React from 'react';
import {MapContainer, TileLayer , Marker, Popup} from 'react-leaflet';
import {geolocated} from 'react-geolocated';
const DEFAULT_LANGITUDE = -123;
const DEFAULT_LATITUDE = 48;
class App extends React.Component {
 render()
  {
  const langitude = this.props.coords? this.props.coords:DEFAULT_LANGITUDE;
  const latitude = this.props.coords? this.props.coords:DEFAULT_LATITUDE;
  return (
    <MapContainer center ={[langitude,latitude]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {
        !this.props.coords?
        <div className='loading'>Loading</div>
        :
        <Marker 
        position={[langitude,latitude]}>
          <Popup>
            You are here!
          </Popup>
        </Marker>

      }
    </MapContainer>
    
  );
  }
}
export default geolocated({
  positionOptions:
  {
    enableHighAccuracy:false
  },
  userDecisionTimeout:10000

})(App);
