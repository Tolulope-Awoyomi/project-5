import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Container, Header, ItemsBreadcrumbContainer, BreadcrumbLink, BreadcrumbSeparator, StyledMapContainer, AutocompleteContainer } from '../styles/StyledComponents';

function GoogleMapContainer(props) { 
    const [currentLocation, setCurrentLocation] = useState({
      lat: 37.7749,
      lng: -122.4194
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [address, setAddress] = useState('');
  
    useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            position => {
              setCurrentLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
              });
            },
            () => {
              setErrorMessage("Geolocation permission denied or not available.");
            },
            { enableHighAccuracy: true }
          );
        } else {
          setErrorMessage("Geolocation is not supported by this browser.");
        }
      }, []);      

      const handleSelect = async value => {
        setAddress(value);
        try {
          const results = await geocodeByAddress(value);
          const latLng = await getLatLng(results[0]);
          setCurrentLocation(latLng);
        } catch (error) {
          console.error('Error', error);
          setErrorMessage('Failed to find the location');
        }
      };
      
    return (
        <Container>
            <Header>
                <ItemsBreadcrumbContainer>
                <BreadcrumbLink to="/items">Food Items</BreadcrumbLink>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbLink to="/googlemap">Google Map</BreadcrumbLink>
            </ItemsBreadcrumbContainer>
            </Header>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <StyledMapContainer> 
            <AutocompleteContainer>
                <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                    <input {...getInputProps({ placeholder: 'Type address...' })} />
                    <div>
                    {loading ? <div>Loading...</div> : null}

                    {suggestions.map((suggestion, index) => {
                        const key = suggestion.placeId || index; 
                        return (
                            <div {...getSuggestionItemProps(suggestion, { key })}>
                            {suggestion.description}
                            </div>
                        );
                    })}
                    </div>
                </div>
                )}
            </PlacesAutocomplete>
        </AutocompleteContainer>
        {!errorMessage && (
          <Map
            google={props.google}
            style={{ width: '100%', height: '100%', marginTop: '150px'}} 
            initialCenter={currentLocation}
            center={currentLocation}
            zoom={15}
          >
            <Marker position={currentLocation} />
          </Map>
        )}
        </StyledMapContainer>
      </Container>
    );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(GoogleMapContainer); 
