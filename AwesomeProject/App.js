/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import FetchLocation from './components/FetchLocation';
import UsersMap from './components/UsersMap';
import Geolocation from 'react-native-geolocation-service';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state = {
    userLocation: null,
    usersPlaces: []
  }

  getUserLocationHandler = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          userLocation: {
            latitude: position.coords.latitude,
            longitude:position.coords.longitude,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0421
          }
        });
        fetch('https://react-native-uni-1553542737099.firebaseio.com/places.json', {
          method: 'POST',
          body: JSON.stringify({
            latitude: position.coords.latitude,
            longitude:position.coords.longitude
          })
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
        console.log(position);
      },
      (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }

  getUserPlacesHandler = () => {
    fetch('https://react-native-uni-1553542737099.firebaseio.com/places.json')
    .then(res => res.json())
    .then(parsedResponse => {
      const placesArray = [];
      for(const key in parsedResponse) {
        placesArray.push({
          latitude: parsedResponse[key].latitude,
          longitude: parsedResponse[key].longitude,
          id: key
        });
        console.log(key);
      }
      this.setState({
        usersPlaces: placesArray
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{marginBottom:20, marginTop:35}}>
          <Button title="Get User Places" onPress={this.getUserPlacesHandler}/>
        </View>  
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
        <UsersMap userLocation={this.state.userLocation} usersPlaces={this.state.usersPlaces}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
