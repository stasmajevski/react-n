import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const styles = StyleSheet.create({
    mapContainer: {
      ...StyleSheet.absoluteFillObject,
      height: 300,
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
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
    return (
        <View style={styles.mapContainer}>
            <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={props.userLocation}>
                {userLocationMarker}
            </MapView>
      </View>
    );
};

export default usersMap;