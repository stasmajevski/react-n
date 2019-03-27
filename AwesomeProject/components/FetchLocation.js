import React from 'react';
import { Button } from 'react-native';

const fetchLocation = props => {
    return (
        <Button
        title="Get Location"
        onPress={props.onGetLocation}
        color="#841584"
        style={{marginBottom:20}}
        accessibilityLabel="Learn more about this purple button"
        />
    );
};

export default fetchLocation;