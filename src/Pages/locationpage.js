import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../Styles/locationpage_styled.scss';

//Map Configs
const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 40.757628,
  lng: -74.002439,
};

function LocationPage() {
  return (
    <div className='location__container'>
      {/* GOOGLE MAP API */}
      <LoadScript googleMapsApiKey={process.env.API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
      {/* END OF GOOGLE MAP API */}
      <div className='locationCards__container'>
        <div className='location__card'>
          <h1>Location</h1>
          <h2>Jacob K. Javits Convention Center</h2>
          <h3>429 11th Ave, New York, NY 10001</h3>
        </div>
        <div className='locationHotels__card'>
          <h1>Hotel Options</h1>
          <ul>
            <li>
              <a href='https://www.ink48.com/' target='__blank'>
                Ink 48 Hotel
              </a>
            </li>
            <li>
              <a
                href='https://www.marriott.com/hotels/travel/nycmf-four-points-manhattan-midtown-west/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_NjExMzIyMy03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D'
                target='__blank'
              >
                Four Points by Sheraton
              </a>
            </li>
            <li>
              <a
                href='https://equinox-hotels.com/nyc/?utm_source=local-listings&utm_medium=organic&utm_campaign=local-listings'
                target='__blank'
              >
                Equinox Hotel New York
              </a>
            </li>
            <li>
              <a
                href='https://www.marriott.com/hotels/travel/nycjj-courtyard-new-york-manhattan-midtown-west/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTIyODEzMjgtNzE1LWxvY2F0aW9uLmdvb2dsZV93ZWJzaXRlX292ZXJyaWRl'
                target='__blank'
              >
                Courtyard by Marriott New York
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default React.memo(LocationPage);
