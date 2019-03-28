import React from 'react';
import { Button, View } from 'react-native';

const fetchLocation = props => {
    return (
        <View style={{marginTop:5, width:165}}>
            <Button
            title="Get Location"
            onPress={props.onGetLocation}
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
        </View>    
    );
};

export default fetchLocation;