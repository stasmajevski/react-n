import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const styles = StyleSheet.create({
    mapContainer: {
      ...StyleSheet.absoluteFillObject,
      height: '100%',
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
      zIndex: -1
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
});

const usersMap = props => {
    let userLocationMarker = null;
    
    if(props.userLocation) {
        userLocationMarker = <MapView.Marker coordinate={props.userLocation}/>;
    }

    const usersMarkers = props.usersPlaces.map(userPlace => <MapView.Marker coordinate={userPlace} key={userPlace.id}/>);
    console.log(usersMarkers);
    return (
        <View style={styles.mapContainer}>
            <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={props.userLocation}>
                {userLocationMarker}
                {usersMarkers}
            </MapView>
      </View>
    );
};

export default usersMap;